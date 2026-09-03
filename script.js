// ==========================================
// DESAFÍO MENTAL - SCRIPT.JS
// ==========================================

let playerName = "";
let selectedCategory = "mixed";
let selectedAmount = 10;

let gameQuestions = [];
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timeLeft = 15;
let timer = null;

// 🏆 RÉCORD PERSONAL
let bestScore = Number(localStorage.getItem("bestScore")) || 0;

// 🔥 RACHA
let currentStreak = 0;
let bestStreak = Number(localStorage.getItem("bestStreak")) || 0;

let musicEnabled = true;
let vibrationEnabled = true;

let roomCode = "";
let isHost = false;


// ==========================================
// ELEMENTOS
// ==========================================

const music = document.getElementById("backgroundMusic");


// ==========================================
// PANTALLAS
// ==========================================

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
        screen.classList.add("hidden");
    });

    const screen = document.getElementById(id);

    if (screen) {
        screen.classList.remove("hidden");
        screen.classList.add("active");
    }
}


// ==========================================
// INICIO
// ==========================================

function openPlayerScreen() {

    showScreen("playerScreen");

    const input = document.getElementById("playerName");

    if (input) {
        setTimeout(() => input.focus(), 200);
    }
}


function continueToCategories() {

    const input = document.getElementById("playerName");

    if (!input) return;

    playerName = input.value.trim();

    if (playerName === "") {
        playerName = "Jugador";
    }

    showScreen("categoryScreen");
}


function goHome() {

    clearInterval(timer);

    stopMusic();

    showScreen("homeScreen");
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
        `.category-card[onclick="selectCategory('${category}')"]`
    );

    if (selected) {
        selected.classList.add("selected");
    }

    showScreen("amountScreen");
}


function openCategoryScreen() {
    showScreen("categoryScreen");
}


// ==========================================
// CANTIDAD
// ==========================================

function startGame(amount) {

    selectedAmount = Number(amount);

    prepareQuestions();

    if (gameQuestions.length === 0) {

        alert("No hay preguntas disponibles.");

        showScreen("categoryScreen");

        return;
    }

    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    // 🔥 Reiniciar racha de la partida
    currentStreak = 0;

    showScreen("gameScreen");

    const opponentBar =
        document.getElementById("opponentBar");

    if (opponentBar) {
        opponentBar.classList.add("hidden");
    }

    startMusic();

    updateStreak();

    showQuestion();
}


// ==========================================
// PREPARAR PREGUNTAS
// ==========================================

function prepareQuestions() {

    let available = [...window.questionBank];

    if (selectedCategory !== "mixed") {

        available = available.filter(
            question =>
                question.category === selectedCategory
        );
    }

    // Mezclar preguntas
    available.sort(() => Math.random() - 0.5);

    const amount = Math.min(
        selectedAmount,
        available.length
    );

    gameQuestions =
        available.slice(0, amount);
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

    const question =
        gameQuestions[currentQuestion];


    // Número de pregunta
    const counter =
        document.getElementById("questionCounter");

    if (counter) {

        counter.textContent =
            `Pregunta ${currentQuestion + 1} de ${gameQuestions.length}`;
    }


    // Barra de progreso
    const progress =
        document.getElementById("progressFill");

    if (progress) {

        const percentage =
            ((currentQuestion) /
            gameQuestions.length) * 100;

        progress.style.width =
            `${percentage}%`;
    }


    // Categoría
    const category =
        document.getElementById("currentCategory");

    if (category) {

        category.textContent =
            getCategoryName(question.category).toUpperCase();
    }


    // Pregunta
    const questionText =
        document.getElementById("questionText");

    if (questionText) {

        questionText.textContent =
            question.question;
    }


    // Respuestas
    for (let i = 0; i < 4; i++) {

        const answer =
            document.getElementById(`answer${i}`);

        const button =
            answer
                ? answer.closest(".answer")
                : null;

        if (answer) {

            answer.textContent =
                question.answers[i];
        }

        if (button) {

            button.disabled = false;

            button.classList.remove(
                "correct",
                "wrong",
                "disabled"
            );
        }
    }


    updateScore();
    updateStreak();

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

    timeLeft = 15;

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
            `⏱️ ${timeLeft}`;
    }
}


// ==========================================
// TIEMPO AGOTADO
// ==========================================

function timeOut() {

    const question =
        gameQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach(button => {

        button.disabled = true;

        button.classList.add("disabled");
    });


    if (buttons[question.correct]) {

        buttons[question.correct]
            .classList.add("correct");
    }


    wrongAnswers++;

    // ❌ Se rompe la racha
    currentStreak = 0;

    updateStreak();

    vibrate([100, 50, 100]);


    setTimeout(() => {

        currentQuestion++;

        showQuestion();

    }, 1000);
}


// ==========================================
// RESPONDER
// ==========================================

function selectAnswer(index) {

    if (
        currentQuestion >=
        gameQuestions.length
    ) {
        return;
    }

    clearInterval(timer);

    const question =
        gameQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach(button => {

        button.disabled = true;
    });


    // ======================================
    // RESPUESTA CORRECTA
    // ======================================

    if (index === question.correct) {

        correctAnswers++;

        // 🔥 Aumentar racha
        currentStreak++;

        // 🏆 Guardar mejor racha
        if (currentStreak > bestStreak) {

            bestStreak =
                currentStreak;

            localStorage.setItem(
                "bestStreak",
                bestStreak
            );
        }


        // 💰 Puntos por rapidez
        score +=
            100 + (timeLeft * 5);


        // 🔥 Bonus por racha
        if (currentStreak >= 3) {

            score +=
                currentStreak * 10;
        }


        if (buttons[index]) {

            buttons[index]
                .classList.add("correct");
        }


        vibrate([50]);

    }


    // ======================================
    // RESPUESTA INCORRECTA
    // ======================================

    else {

        wrongAnswers++;

        // ❌ Romper racha
        currentStreak = 0;


        if (buttons[index]) {

            buttons[index]
                .classList.add("wrong");
        }


        if (buttons[question.correct]) {

            buttons[question.correct]
                .classList.add("correct");
        }


        vibrate([100, 50, 100]);
    }


    updateScore();
    updateStreak();


    setTimeout(() => {

        currentQuestion++;

        showQuestion();

    }, 1000);
}


// ==========================================
// PUNTUACIÓN
// ==========================================

function updateScore() {

    const scoreElement =
        document.getElementById("gameScore");

    if (scoreElement) {

        scoreElement.textContent =
            score;
    }
}


// ==========================================
// 🔥 RACHA
// ==========================================

function updateStreak() {

    const streakElement =
        document.getElementById("currentStreak");

    if (streakElement) {

        streakElement.textContent =
            currentStreak;
    }
}


// ==========================================
// FINAL
// ==========================================

function finishGame() {

    clearInterval(timer);

    stopMusic();

    showScreen("resultScreen");


    const total =
        gameQuestions.length;


    const accuracy =
        total > 0
            ? Math.round(
                (correctAnswers / total) * 100
            )
            : 0;


    // ======================================
    // 🏆 RÉCORD PERSONAL
    // ======================================

    let newRecord = false;


    if (score > bestScore) {

        bestScore =
            score;

        localStorage.setItem(
            "bestScore",
            bestScore
        );

        newRecord = true;
    }


    // ======================================
    // ELEMENTOS
    // ======================================

    const finalScore =
        document.getElementById("finalScore");

    const correct =
        document.getElementById("correctAnswers");

    const wrong =
        document.getElementById("wrongAnswers");

    const accuracyElement =
        document.getElementById("accuracy");

    const message =
        document.getElementById("resultMessage");


    // ======================================
    // RESULTADOS
    // ======================================

    if (finalScore) {

        finalScore.textContent =
            score;
    }


    if (correct) {

        correct.textContent =
            correctAnswers;
    }


    if (wrong) {

        wrong.textContent =
            wrongAnswers;
    }


    if (accuracyElement) {

        accuracyElement.textContent =
            `${accuracy}%`;
    }


    // ======================================
    // MENSAJE FINAL
    // ======================================

    if (message) {

        if (newRecord) {

            message.textContent =
                "🏆 ¡NUEVO RÉCORD PERSONAL! 🔥";

        }
        else if (accuracy >= 90) {

            message.textContent =
                "🔥 ¡Excelente! Eres una máquina.";

        }
        else if (accuracy >= 70) {

            message.textContent =
                "👏 ¡Muy buen trabajo!";

        }
        else if (accuracy >= 50) {

            message.textContent =
                "💪 ¡Vas por buen camino!";

        }
        else {

            message.textContent =
                "🧠 ¡Sigue practicando!";
        }
    }


    // ======================================
    // MOSTRAR RÉCORD
    // ======================================

    const bestScoreElement =
        document.getElementById("bestScore");

    if (bestScoreElement) {

        bestScoreElement.textContent =
            bestScore;
    }


    // ======================================
    // MOSTRAR MEJOR RACHA
    // ======================================

    const bestStreakElement =
        document.getElementById("bestStreak");

    if (bestStreakElement) {

        bestStreakElement.textContent =
            bestStreak;
    }


    // Barra de progreso
    const progress =
        document.getElementById("progressFill");

    if (progress) {

        progress.style.width =
            "100%";
    }
}


// ==========================================
// REINICIAR
// ==========================================

function restartGame() {

    closeGameMenu();

    clearInterval(timer);

    startGame(selectedAmount);
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
// SALIR DEL JUEGO
// ==========================================

function exitGame() {

    clearInterval(timer);

    stopMusic();

    closeGameMenu();

    showScreen("homeScreen");
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
// 🎵 MÚSICA
// ==========================================

function startMusic() {

    if (!musicEnabled || !music) {

        return;
    }

    music.volume =
        0.25;

    const promise =
        music.play();

    if (promise) {

        promise.catch(() => {});
    }
}


function stopMusic() {

    if (!music) {

        return;
    }

    music.pause();

    music.currentTime =
        0;
}


function toggleMusic() {

    musicEnabled =
        !musicEnabled;

    localStorage.setItem(
        "musicEnabled",
        musicEnabled
    );

    updateSettings();


    if (musicEnabled) {

        startMusic();

    } else {

        stopMusic();
    }
}


// ==========================================
// 📳 VIBRACIÓN
// ==========================================

function vibrate(pattern) {

    if (
        vibrationEnabled &&
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

    updateSettings();


    if (vibrationEnabled) {

        vibrate([50]);
    }
}


// ==========================================
// ⚙️ CONFIGURACIÓN
// ==========================================

function loadSettings() {

    const musicSetting =
        localStorage.getItem("musicEnabled");

    const vibrationSetting =
        localStorage.getItem("vibrationEnabled");


    if (musicSetting !== null) {

        musicEnabled =
            musicSetting === "true";
    }


    if (vibrationSetting !== null) {

        vibrationEnabled =
            vibrationSetting === "true";
    }


    updateSettings();
}


function updateSettings() {

    const musicStatus =
        document.getElementById("musicStatus");

    const vibrationStatus =
        document.getElementById("vibrationStatus");


    if (musicStatus) {

        musicStatus.textContent =
            musicEnabled
                ? "ON"
                : "OFF";
    }


    if (vibrationStatus) {

        vibrationStatus.textContent =
            vibrationEnabled
                ? "ON"
                : "OFF";
    }
}


// ==========================================
// 👥 MULTIJUGADOR
// ==========================================

function openMultiplayerScreen() {

    showScreen("multiplayerScreen");
}


function showJoinRoom() {

    const box =
        document.getElementById("joinRoomBox");

    if (box) {

        box.classList.remove("hidden");

        const input =
            document.getElementById("roomCode");

        if (input) {

            input.focus();
        }
    }
}


// ==========================================
// CREAR SALA
// ==========================================

function createRoom() {

    roomCode =
        generateRoomCode();

    isHost = true;


    const display =
        document.getElementById("displayRoomCode");

    if (display) {

        display.textContent =
            roomCode;
    }


    const host =
        document.getElementById("hostName");

    if (host) {

        host.textContent =
            playerName ||
            "Jugador 1";
    }


    showScreen("roomScreen");
}


// ==========================================
// UNIRSE A SALA
// ==========================================

function joinRoom() {

    const input =
        document.getElementById("roomCode");

    if (!input) {

        return;
    }


    const code =
        input.value
            .trim()
            .toUpperCase();


    if (code.length !== 6) {

        alert(
            "El código debe tener 6 caracteres."
        );

        return;
    }


    roomCode =
        code;

    isHost =
        false;


    const display =
        document.getElementById("displayRoomCode");

    if (display) {

        display.textContent =
            roomCode;
    }


    const guest =
        document.getElementById("guestName");

    if (guest) {

        guest.textContent =
            playerName ||
            "Jugador 2";
    }


    showScreen("roomScreen");


    alert(
        "Sala encontrada. El multijugador real se conectará con Firebase en el siguiente paso."
    );
}


// ==========================================
// GENERAR CÓDIGO
// ==========================================

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


// ==========================================
// COPIAR SALA
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
                "Código: " +
                roomCode
            );
        });
}


// ==========================================
// SALIR DE SALA
// ==========================================

function leaveRoom() {

    roomCode = "";

    isHost = false;

    showScreen("multiplayerScreen");
}


// ==========================================
// ⌨️ TECLADO A B C D
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            document
                .getElementById("gameScreen")
                ?.classList.contains("active")
        ) {

            const keys = {

                a: 0,
                b: 1,
                c: 2,
                d: 3
            };


            const key =
                event.key.toLowerCase();


            if (key in keys) {

                selectAnswer(
                    keys[key]
                );
            }
        }
    }
);


// ==========================================
// 🚀 INICIAR
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadSettings();

        showScreen(
            "homeScreen"
        );


        console.log(
            "🧠 Desafío Mental cargado correctamente."
        );

        console.log(
            "🏆 Récord personal:",
            bestScore
        );

        console.log(
            "🔥 Mejor racha:",
            bestStreak
        );
    }
);
