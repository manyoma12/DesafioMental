// ==========================================
// DESAFÍO MENTAL - SCRIPT PRINCIPAL
// ==========================================

// ---------- ESTADO DEL JUEGO ----------

let currentScreen = "homeScreen";

let playerName = "";
let selectedCategory = "mixed";
let selectedAmount = 10;

let gameQuestions = [];
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timeLeft = 20;
let timer = null;

let musicEnabled = true;
let vibrationEnabled = true;

let isMultiplayer = false;
let roomCode = "";
let isHost = false;

// ---------- ELEMENTOS ----------

const music = document.getElementById("backgroundMusic");


// ==========================================
// CAMBIAR DE PANTALLA
// ==========================================

function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
        screen.classList.add("hidden");
    });

    const screen = document.getElementById(screenId);

    if (screen) {
        screen.classList.remove("hidden");
        screen.classList.add("active");
        currentScreen = screenId;
    }
}


// ==========================================
// INICIO
// ==========================================

function openPlayerScreen() {
    isMultiplayer = false;
    showScreen("playerScreen");

    const nameInput = document.getElementById("playerName");

    if (nameInput) {
        setTimeout(() => nameInput.focus(), 200);
    }
}


function startSinglePlayer() {

    const input = document.getElementById("playerName");

    playerName = input && input.value.trim()
        ? input.value.trim()
        : "Jugador";

    isMultiplayer = false;

    showScreen("categoryScreen");
}


// ==========================================
// CATEGORÍAS
// ==========================================

function selectCategory(category) {

    selectedCategory = category;

    document.querySelectorAll(".category-card").forEach(card => {
        card.classList.remove("selected");
    });

    const selected = document.querySelector(
        `.category-card[data-category="${category}"]`
    );

    if (selected) {
        selected.classList.add("selected");
    }

    showScreen("amountScreen");
}


// ==========================================
// CANTIDAD DE PREGUNTAS
// ==========================================

function selectAmount(amount) {

    selectedAmount = Number(amount);

    document.querySelectorAll(".amount-btn").forEach(button => {
        button.classList.remove("selected");
    });

    const selected = document.querySelector(
        `.amount-btn[data-amount="${amount}"]`
    );

    if (selected) {
        selected.classList.add("selected");
    }

    startGame();
}


// ==========================================
// PREPARAR PREGUNTAS
// ==========================================

function prepareQuestions() {

    let available = [...window.questionBank];

    if (selectedCategory !== "mixed") {

        available = available.filter(
            question => question.category === selectedCategory
        );
    }

    // Mezclar preguntas
    available.sort(() => Math.random() - 0.5);

    // Si una categoría tiene menos preguntas
    // que las solicitadas, usamos las disponibles.
    const amount = Math.min(
        selectedAmount,
        available.length
    );

    gameQuestions = available.slice(0, amount);
}


// ==========================================
// INICIAR JUEGO
// ==========================================

function startGame() {

    clearInterval(timer);

    prepareQuestions();

    if (gameQuestions.length === 0) {

        alert("No hay preguntas disponibles para esta categoría.");

        showScreen("categoryScreen");

        return;
    }

    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    showScreen("gameScreen");

    updateScore();

    showQuestion();

    startMusic();
}


// ==========================================
// MOSTRAR PREGUNTA
// ==========================================

function showQuestion() {

    clearInterval(timer);

    if (currentQuestion >= gameQuestions.length) {
        finishGame();
        return;
    }

    const question = gameQuestions[currentQuestion];

    const questionNumber = document.getElementById("questionNumber");
    const questionText = document.getElementById("questionText");
    const categoryLabel = document.getElementById("categoryLabel");

    if (questionNumber) {
        questionNumber.textContent =
            `${currentQuestion + 1} / ${gameQuestions.length}`;
    }

    if (questionText) {
        questionText.textContent = question.question;
    }

    if (categoryLabel) {
        categoryLabel.textContent =
            getCategoryName(question.category);
    }

    const answerButtons =
        document.querySelectorAll(".answer-btn");

    answerButtons.forEach((button, index) => {

        button.disabled = false;

        button.classList.remove(
            "correct",
            "wrong",
            "disabled"
        );

        if (question.answers[index]) {
            button.textContent =
                `${String.fromCharCode(65 + index)}. ${question.answers[index]}`;
        }
    });

    updateScore();

    startTimer();
}


// ==========================================
// NOMBRE DE CATEGORÍA
// ==========================================

function getCategoryName(category) {

    const names = {

        general: "Cultura General",
        colombia: "Colombia",
        science: "Ciencia",
        history: "Historia",
        sports: "Deportes",
        technology: "Tecnología",
        geography: "Geografía",
        entertainment: "Entretenimiento"

    };

    return names[category] || "Desafío Mixto";
}


// ==========================================
// TEMPORIZADOR
// ==========================================

function startTimer() {

    clearInterval(timer);

    timeLeft = 20;

    updateTimer();

    timer = setInterval(() => {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timer);

            timeOut();
        }

    }, 1000);
}


function updateTimer() {

    const timerElement =
        document.getElementById("timer");

    if (timerElement) {
        timerElement.textContent =
            timeLeft;
    }
}


// ==========================================
// TIEMPO AGOTADO
// ==========================================

function timeOut() {

    const question =
        gameQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.disabled = true;
        button.classList.add("disabled");
    });

    if (buttons[question.correct]) {
        buttons[question.correct]
            .classList.add("correct");
    }

    wrongAnswers++;

    vibrate([100, 50, 100]);

    setTimeout(() => {

        currentQuestion++;

        showQuestion();

    }, 1200);
}


// ==========================================
// RESPONDER
// ==========================================

function answerQuestion(answerIndex) {

    if (currentQuestion >= gameQuestions.length) {
        return;
    }

    clearInterval(timer);

    const question =
        gameQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.disabled = true;
    });

    const selectedButton =
        buttons[answerIndex];

    const correctButton =
        buttons[question.correct];

    if (answerIndex === question.correct) {

        score += 100 + (timeLeft * 5);

        correctAnswers++;

        if (selectedButton) {
            selectedButton.classList.add("correct");
        }

        vibrate([50]);

    } else {

        wrongAnswers++;

        if (selectedButton) {
            selectedButton.classList.add("wrong");
        }

        if (correctButton) {
            correctButton.classList.add("correct");
        }

        vibrate([100, 50, 100]);
    }

    updateScore();

    setTimeout(() => {

        currentQuestion++;

        showQuestion();

    }, 1000);
}


// ==========================================
// ACTUALIZAR PUNTOS
// ==========================================

function updateScore() {

    const scoreElement =
        document.getElementById("score");

    if (scoreElement) {
        scoreElement.textContent = score;
    }
}


// ==========================================
// FINAL DEL JUEGO
// ==========================================

function finishGame() {

    clearInterval(timer);

    stopMusic();

    showScreen("resultScreen");

    const total =
        gameQuestions.length;

    const accuracy =
        total > 0
            ? Math.round((correctAnswers / total) * 100)
            : 0;

    const finalScore =
        document.getElementById("finalScore");

    const correctElement =
        document.getElementById("correctAnswers");

    const wrongElement =
        document.getElementById("wrongAnswers");

    const accuracyElement =
        document.getElementById("accuracy");

    if (finalScore) {
        finalScore.textContent = score;
    }

    if (correctElement) {
        correctElement.textContent =
            correctAnswers;
    }

    if (wrongElement) {
        wrongElement.textContent =
            wrongAnswers;
    }

    if (accuracyElement) {
        accuracyElement.textContent =
            `${accuracy}%`;
    }
}


// ==========================================
// REINICIAR
// ==========================================

function restartGame() {

    closeGameMenu();

    clearInterval(timer);

    startGame();
}


// ==========================================
// VOLVER AL INICIO
// ==========================================

function goHome() {

    clearInterval(timer);

    stopMusic();

    closeGameMenu();

    isMultiplayer = false;

    showScreen("homeScreen");
}


// ==========================================
// MENÚ DEL JUEGO
// ==========================================

function openGameMenu() {

    const menu =
        document.getElementById("gameMenu");

    if (menu) {
        menu.classList.remove("hidden");
    }
}


function closeGameMenu() {

    const menu =
        document.getElementById("gameMenu");

    if (menu) {
        menu.classList.add("hidden");
    }
}


// ==========================================
// CÓMO JUGAR
// ==========================================

function openHowToPlay() {

    const modal =
        document.getElementById("howToPlay");

    if (modal) {
        modal.classList.remove("hidden");
    }
}


function closeHowToPlay() {

    const modal =
        document.getElementById("howToPlay");

    if (modal) {
        modal.classList.add("hidden");
    }
}


// ==========================================
// MÚSICA
// ==========================================

function startMusic() {

    if (!musicEnabled || !music) {
        return;
    }

    music.volume = 0.25;

    const playPromise = music.play();

    if (playPromise !== undefined) {

        playPromise.catch(() => {
            // El navegador puede bloquear
            // el autoplay hasta que haya interacción.
        });
    }
}


function stopMusic() {

    if (!music) {
        return;
    }

    music.pause();
    music.currentTime = 0;
}


function toggleMusic() {

    musicEnabled = !musicEnabled;

    localStorage.setItem(
        "musicEnabled",
        musicEnabled
    );

    updateSettingsUI();

    if (musicEnabled) {
        startMusic();
    } else {
        stopMusic();
    }
}


// ==========================================
// VIBRACIÓN
// ==========================================

function vibrate(pattern) {

    if (!vibrationEnabled) {
        return;
    }

    if (
        "vibrate" in navigator
    ) {
        navigator.vibrate(pattern);
    }
}


function toggleVibration() {

    vibrationEnabled =
        !vibrationEnabled;

    localStorage.setItem(
        "vibrationEnabled",
        vibrationEnabled
    );

    updateSettingsUI();

    if (vibrationEnabled) {
        vibrate([50]);
    }
}


// ==========================================
// CONFIGURACIÓN
// ==========================================

function loadSettings() {

    const savedMusic =
        localStorage.getItem("musicEnabled");

    const savedVibration =
        localStorage.getItem("vibrationEnabled");

    if (savedMusic !== null) {
        musicEnabled =
            savedMusic === "true";
    }

    if (savedVibration !== null) {
        vibrationEnabled =
            savedVibration === "true";
    }

    updateSettingsUI();
}


function updateSettingsUI() {

    const musicToggle =
        document.getElementById("musicToggle");

    const vibrationToggle =
        document.getElementById("vibrationToggle");

    if (musicToggle) {
        musicToggle.checked =
            musicEnabled;
    }

    if (vibrationToggle) {
        vibrationToggle.checked =
            vibrationEnabled;
    }
}


// ==========================================
// MULTIJUGADOR
// ==========================================

function openMultiplayer() {

    isMultiplayer = true;

    showScreen("multiplayerScreen");
}


function createRoom() {

    isMultiplayer = true;
    isHost = true;

    roomCode =
        generateRoomCode();

    const roomCodeElement =
        document.getElementById("roomCode");

    if (roomCodeElement) {
        roomCodeElement.textContent =
            roomCode;
    }

    const displayCode =
        document.getElementById("displayRoomCode");

    if (displayCode) {
        displayCode.value =
            roomCode;
    }

    showScreen("roomScreen");
}


function joinRoom() {

    const input =
        document.getElementById("joinRoomCode");

    if (!input) {
        return;
    }

    const code =
        input.value.trim().toUpperCase();

    if (code.length !== 6) {

        alert(
            "Escribe un código de sala de 6 caracteres."
        );

        return;
    }

    roomCode = code;

    isMultiplayer = true;
    isHost = false;

    showScreen("roomScreen");

    const roomCodeElement =
        document.getElementById("roomCode");

    if (roomCodeElement) {
        roomCodeElement.textContent =
            roomCode;
    }
}


function generateRoomCode() {

    const characters =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "";

    for (let i = 0; i < 6; i++) {

        code +=
            characters.charAt(
                Math.floor(
                    Math.random() *
                    characters.length
                )
            );
    }

    return code;
}


function leaveRoom() {

    roomCode = "";
    isHost = false;
    isMultiplayer = false;

    showScreen("homeScreen");
}


// ==========================================
// COPIAR CÓDIGO DE SALA
// ==========================================

function copyRoomCode() {

    if (!roomCode) {
        return;
    }

    navigator.clipboard
        .writeText(roomCode)
        .then(() => {

            alert(
                "¡Código copiado! 📋"
            );

        })
        .catch(() => {

            alert(
                `Código de sala: ${roomCode}`
            );

        });
}


// ==========================================
// BOTÓN ATRÁS
// ==========================================

function goBackToPlayer() {
    showScreen("playerScreen");
}


function goBackToCategory() {
    showScreen("categoryScreen");
}


// ==========================================
// TECLADO
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        // ESC
        if (event.key === "Escape") {

            const gameMenu =
                document.getElementById("gameMenu");

            const howToPlay =
                document.getElementById("howToPlay");

            if (
                gameMenu &&
                !gameMenu.classList.contains("hidden")
            ) {
                closeGameMenu();
                return;
            }

            if (
                howToPlay &&
                !howToPlay.classList.contains("hidden")
            ) {
                closeHowToPlay();
                return;
            }
        }

        // Respuestas A B C D
        if (
            currentScreen === "gameScreen"
        ) {

            const keys = {
                "a": 0,
                "b": 1,
                "c": 2,
                "d": 3
            };

            const key =
                event.key.toLowerCase();

            if (
                Object.prototype.hasOwnProperty
                .call(keys, key)
            ) {
                answerQuestion(keys[key]);
            }
        }
    }
);


// ==========================================
// INICIALIZAR
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadSettings();

        showScreen("homeScreen");

        console.log(
            "Desafío Mental iniciado correctamente."
        );

    }
);
