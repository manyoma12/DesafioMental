// ==========================================
// DESAFÍO MENTAL - SCRIPT.JS
// ==========================================

// ==========================================
// VARIABLES
// ==========================================

let playerName = "";
let selectedCategory = "mixed";
let selectedAmount = 10;
let selectedDifficulty = "easy";

let gameQuestions = [];
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

let timeLeft = 50;
let timer = null;

let bestScore =
    Number(localStorage.getItem("bestScore")) || 0;

let currentStreak = 0;

let bestStreak =
    Number(localStorage.getItem("bestStreak")) || 0;

let musicEnabled = true;
let vibrationEnabled = true;

let roomCode = "";
let isHost = false;


// ==========================================
// CONFIGURACIÓN DE DIFICULTADES
// ==========================================

const difficultySettings = {

    easy: {
        name: "Fácil",
        time: 50
    },

    medium: {
        name: "Medio",
        time: 35
    },

    hard: {
        name: "Difícil",
        time: 20
    },

    god: {
        name: "Dios",
        time: 15
    }

};


// ==========================================
// ELEMENTOS
// ==========================================

const music =
    document.getElementById("backgroundMusic");


// ==========================================
// PANTALLAS
// ==========================================

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {

        screen.classList.remove("active");
        screen.classList.add("hidden");

    });

    const screen =
        document.getElementById(id);

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

    const input =
        document.getElementById("playerName");

    if (input) {

        setTimeout(() => {
            input.focus();
        }, 200);

    }

}


function continueToCategories() {

    const input =
        document.getElementById("playerName");

    if (!input) return;

    playerName =
        input.value.trim();

    if (playerName === "") {

        playerName = "Jugador";

    }

    showScreen("categoryScreen");

}


// ==========================================
// VOLVER A INICIO
// ==========================================

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

    document.querySelectorAll(".category-card")
        .forEach(card => {

            card.classList.remove("selected");

        });

    const selected =
        document.querySelector(
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

function selectAmount(amount) {

    selectedAmount =
        Number(amount);

    showScreen("difficultyScreen");

}


function openAmountScreen() {

    showScreen("amountScreen");

}


// ==========================================
// DIFICULTAD
// ==========================================

function selectDifficulty(difficulty) {

    if (!difficultySettings[difficulty]) {

        return;

    }

    selectedDifficulty =
        difficulty;

    showScreen("gameScreen");

    startGame(selectedAmount);

}


// ==========================================
// INICIAR PARTIDA
// ==========================================

function startGame(amount) {

    clearInterval(timer);

    selectedAmount =
        Number(amount);

    prepareQuestions();

    if (gameQuestions.length === 0) {

        alert(
            "No hay preguntas disponibles para esta categoría y dificultad."
        );

        showScreen("difficultyScreen");

        return;

    }

    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    currentStreak = 0;

    const opponentBar =
        document.getElementById("opponentBar");

    if (opponentBar) {

        opponentBar.classList.add("hidden");

    }

    showScreen("gameScreen");

    updateScore();

    updateStreak();

    startMusic();

    showQuestion();

}


// ==========================================
// PREPARAR PREGUNTAS
// ==========================================

function prepareQuestions(previousFirstQuestion = null) {

    // Comprobar que exista el banco
    if (
        !window.questionBank ||
        !Array.isArray(window.questionBank)
    ) {

        console.error(
            "❌ No se encontró window.questionBank"
        );

        gameQuestions = [];

        return;

    }


    // Copiar banco completo
    let available =
        [...window.questionBank];


    // ======================================
    // FILTRAR POR CATEGORÍA
    // ======================================

    if (selectedCategory !== "mixed") {

        available =
            available.filter(question =>
                question.category === selectedCategory
            );

    }


    // ======================================
    // FILTRAR POR DIFICULTAD
    // ======================================

    available =
        available.filter(question =>
            question.difficulty === selectedDifficulty
        );


    // ======================================
    // COMPROBAR DISPONIBILIDAD
    // ======================================

    if (available.length === 0) {

        console.warn(
            "⚠️ No existen preguntas para:",
            selectedCategory,
            selectedDifficulty
        );

        gameQuestions = [];

        return;

    }


    // ======================================
    // EVITAR PRIMERA PREGUNTA REPETIDA
    // ======================================

    if (
        previousFirstQuestion &&
        available.length > 1
    ) {

        const differentQuestions =
            available.filter(question =>
                question.question !== previousFirstQuestion
            );

        if (differentQuestions.length > 0) {

            available =
                differentQuestions;

        }

    }


    // ======================================
    // MEZCLAR PREGUNTAS
    // ======================================

    shuffleArray(available);


    // ======================================
    // CREAR LA PARTIDA
    // ======================================

    gameQuestions = [];


    /*
        Si hay menos preguntas disponibles
        que las seleccionadas, reutilizamos
        preguntas para completar la partida.

        Ejemplo:

        Hay 2 preguntas disponibles.
        El jugador selecciona 10.

        Resultado:
        10 preguntas en la partida.

        Las preguntas pueden repetirse,
        pero el orden será aleatorio.
    */

    for (
        let i = 0;
        i < selectedAmount;
        i++
    ) {

        const originalQuestion =
            available[
                i % available.length
            ];


        const newQuestion = {

            category:
                originalQuestion.category,

            difficulty:
                originalQuestion.difficulty,

            question:
                originalQuestion.question,

            answers:
                [...originalQuestion.answers],

            correct:
                originalQuestion.correct

        };


        gameQuestions.push(
            newQuestion
        );

    }


    // ======================================
    // MEZCLAR NUEVAMENTE
    // ======================================

    shuffleArray(gameQuestions);


    // ======================================
    // ASEGURAR PRIMERA PREGUNTA DIFERENTE
    // ======================================

    if (
        previousFirstQuestion &&
        gameQuestions.length > 1 &&
        gameQuestions[0].question === previousFirstQuestion
    ) {

        const differentIndex =
            gameQuestions.findIndex(question =>
                question.question !== previousFirstQuestion
            );

        if (differentIndex !== -1) {

            [
                gameQuestions[0],
                gameQuestions[differentIndex]
            ] =
            [
                gameQuestions[differentIndex],
                gameQuestions[0]
            ];

        }

    }


    // ======================================
    // SEGURIDAD
    // ======================================

    if (
        gameQuestions.length !==
        selectedAmount
    ) {

        console.error(
            "❌ Error preparando preguntas."
        );

        console.error(
            "Solicitadas:",
            selectedAmount
        );

        console.error(
            "Preparadas:",
            gameQuestions.length
        );

    }
    else {

        console.log(
            "✅ Partida preparada:",
            gameQuestions.length,
            "preguntas"
        );

        console.log(
            "🆕 Primera pregunta:",
            gameQuestions[0]?.question
        );

    }

}


// ==========================================
// MEZCLAR ARRAY
// ==========================================

function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }

    return array;

}


// ==========================================
// MOSTRAR PREGUNTA
// ==========================================

function showQuestion() {

    clearInterval(timer);


    // ======================================
    // COMPROBAR FINAL
    // ======================================

    if (
        currentQuestion >=
        gameQuestions.length
    ) {

        finishGame();

        return;

    }


    const question =
        gameQuestions[currentQuestion];


    // ======================================
    // CONTADOR
    // ======================================

    const counter =
        document.getElementById(
            "questionCounter"
        );

    if (counter) {

        counter.textContent =
            `Pregunta ${currentQuestion + 1} de ${gameQuestions.length}`;

    }


    // ======================================
    // PROGRESO
    // ======================================

    const progress =
        document.getElementById(
            "progressFill"
        );

    if (progress) {

        const percentage =
            (currentQuestion /
            gameQuestions.length) * 100;

        progress.style.width =
            `${percentage}%`;

    }


    // ======================================
    // CATEGORÍA
    // ======================================

    const category =
        document.getElementById(
            "currentCategory"
        );

    if (category) {

        category.textContent =
            getCategoryName(
                question.category
            ).toUpperCase();

    }


    // ======================================
    // PREGUNTA
    // ======================================

    const questionText =
        document.getElementById(
            "questionText"
        );

    if (questionText) {

        questionText.textContent =
            question.question;

    }


    // ======================================
    // RESPUESTAS
    // ======================================

    for (
        let i = 0;
        i < 4;
        i++
    ) {

        const answer =
            document.getElementById(
                `answer${i}`
            );

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


    return (
        names[category] ||
        "Desafío Mixto"
    );

}


// ==========================================
// TEMPORIZADOR
// ==========================================

function startTimer() {

    clearInterval(timer);


    const difficulty =
        difficultySettings[
            selectedDifficulty
        ];


    timeLeft =
        difficulty
            ? difficulty.time
            : 50;


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


// ==========================================
// ACTUALIZAR TEMPORIZADOR
// ==========================================

function updateTimer() {

    const timerElement =
        document.getElementById(
            "timer"
        );


    if (timerElement) {

        timerElement.textContent =
            `⏱️ ${timeLeft}`;

    }

}


// ==========================================
// TIEMPO AGOTADO
// ==========================================

function timeOut() {

    if (
        currentQuestion >=
        gameQuestions.length
    ) {

        return;

    }


    const question =
        gameQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(button => {

        button.disabled = true;

        button.classList.add(
            "disabled"
        );

    });


    if (
        buttons[question.correct]
    ) {

        buttons[question.correct]
            .classList.add(
                "correct"
            );

    }


    wrongAnswers++;

    currentStreak = 0;

    updateStreak();


    vibrate([
        100,
        50,
        100
    ]);


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
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    // ======================================
    // CORRECTA
    // ======================================

    if (
        index ===
        question.correct
    ) {

        correctAnswers++;

        currentStreak++;


        if (
            currentStreak >
            bestStreak
        ) {

            bestStreak =
                currentStreak;

            localStorage.setItem(
                "bestStreak",
                bestStreak
            );

        }


        // PUNTOS

        score +=
            100 +
            (timeLeft * 5);


        // BONUS RACHA

        if (
            currentStreak >= 3
        ) {

            score +=
                currentStreak * 10;

        }


        if (buttons[index]) {

            buttons[index]
                .classList.add(
                    "correct"
                );

        }


        vibrate([50]);

    }


    // ======================================
    // INCORRECTA
    // ======================================

    else {

        wrongAnswers++;

        currentStreak = 0;


        if (buttons[index]) {

            buttons[index]
                .classList.add(
                    "wrong"
                );

        }


        if (
            buttons[question.correct]
        ) {

            buttons[question.correct]
                .classList.add(
                    "correct"
                );

        }


        vibrate([
            100,
            50,
            100
        ]);

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
        document.getElementById(
            "gameScore"
        );


    if (scoreElement) {

        scoreElement.textContent =
            score;

    }

}


// ==========================================
// RACHA
// ==========================================

function updateStreak() {

    const streakElement =
        document.getElementById(
            "currentStreak"
        );


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


    showScreen(
        "resultScreen"
    );


    const total =
        gameQuestions.length;


    const accuracy =
        total > 0
            ? Math.round(
                (correctAnswers /
                total) * 100
            )
            : 0;


    let newRecord =
        false;


    if (
        score >
        bestScore
    ) {

        bestScore =
            score;

        localStorage.setItem(
            "bestScore",
            bestScore
        );

        newRecord = true;

    }


    const finalScore =
        document.getElementById(
            "finalScore"
        );

    const correct =
        document.getElementById(
            "correctAnswers"
        );

    const wrong =
        document.getElementById(
            "wrongAnswers"
        );

    const accuracyElement =
        document.getElementById(
            "accuracy"
        );

    const message =
        document.getElementById(
            "resultMessage"
        );


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


    const bestScoreElement =
        document.getElementById(
            "bestScore"
        );


    if (bestScoreElement) {

        bestScoreElement.textContent =
            bestScore;

    }


    const bestStreakElement =
        document.getElementById(
            "bestStreak"
        );


    if (bestStreakElement) {

        bestStreakElement.textContent =
            bestStreak;

    }


    const progress =
        document.getElementById(
            "progressFill"
        );


    if (progress) {

        progress.style.width =
            "100%";

    }

}


// ==========================================
// JUGAR OTRA VEZ
// ==========================================

function restartGame() {

    clearInterval(timer);

    closeGameMenu();


    // ======================================
    // GUARDAR LA PRIMERA PREGUNTA ANTERIOR
    // ======================================

    const previousFirstQuestion =
        gameQuestions.length > 0
            ? gameQuestions[0].question
            : null;


    // ======================================
    // REINICIAR ESTADÍSTICAS
    // ======================================

    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    currentStreak = 0;


    timeLeft =
        difficultySettings[selectedDifficulty]
            ? difficultySettings[selectedDifficulty].time
            : 50;


    // ======================================
    // PREPARAR NUEVA PARTIDA
    // ======================================

    prepareQuestions(
        previousFirstQuestion
    );


    if (gameQuestions.length === 0) {

        alert(
            "No hay preguntas disponibles para esta categoría y dificultad."
        );

        showScreen("difficultyScreen");

        return;

    }


    showScreen("gameScreen");

    updateScore();

    updateStreak();

    startMusic();

    showQuestion();

}


// ==========================================
// MENÚ
// ==========================================

function openGameMenu() {

    const menu =
        document.getElementById(
            "gameMenu"
        );


    if (menu) {

        menu.classList.remove(
            "hidden"
        );

    }

}


function closeGameMenu() {

    const menu =
        document.getElementById(
            "gameMenu"
        );


    if (menu) {

        menu.classList.add(
            "hidden"
        );

    }

}


// ==========================================
// SALIR
// ==========================================

function exitGame() {

    clearInterval(timer);

    stopMusic();

    closeGameMenu();

    showScreen(
        "homeScreen"
    );

}


// ==========================================
// CÓMO JUGAR
// ==========================================

function openHowToPlay() {

    const modal =
        document.getElementById(
            "howToPlay"
        );


    if (modal) {

        modal.classList.remove(
            "hidden"
        );

    }

}


function closeHowToPlay() {

    const modal =
        document.getElementById(
            "howToPlay"
        );


    if (modal) {

        modal.classList.add(
            "hidden"
        );

    }

}


// ==========================================
// MÚSICA
// ==========================================

function startMusic() {

    if (
        !musicEnabled ||
        !music
    ) {

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

    }
    else {

        stopMusic();

    }

}


// ==========================================
// VIBRACIÓN
// ==========================================

function vibrate(pattern) {

    if (
        vibrationEnabled &&
        "vibrate" in navigator
    ) {

        navigator.vibrate(
            pattern
        );

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
// CONFIGURACIÓN
// ==========================================

function loadSettings() {

    const musicSetting =
        localStorage.getItem(
            "musicEnabled"
        );

    const vibrationSetting =
        localStorage.getItem(
            "vibrationEnabled"
        );


    if (
        musicSetting !== null
    ) {

        musicEnabled =
            musicSetting === "true";

    }


    if (
        vibrationSetting !== null
    ) {

        vibrationEnabled =
            vibrationSetting === "true";

    }


    updateSettings();

}


function updateSettings() {

    const musicStatus =
        document.getElementById(
            "musicStatus"
        );

    const vibrationStatus =
        document.getElementById(
            "vibrationStatus"
        );


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
// MULTIJUGADOR
// ==========================================

function openMultiplayerScreen() {

    showScreen(
        "multiplayerScreen"
    );

}


function showJoinRoom() {

    const box =
        document.getElementById(
            "joinRoomBox"
        );


    if (box) {

        box.classList.remove(
            "hidden"
        );


        const input =
            document.getElementById(
                "roomCode"
            );


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
        document.getElementById(
            "displayRoomCode"
        );


    if (display) {

        display.textContent =
            roomCode;

    }


    const host =
        document.getElementById(
            "hostName"
        );


    if (host) {

        host.textContent =
            playerName ||
            "Jugador 1";

    }


    showScreen(
        "roomScreen"
    );

}


// ==========================================
// UNIRSE
// ==========================================

function joinRoom() {

    const input =
        document.getElementById(
            "roomCode"
        );


    if (!input) {

        return;

    }


    const code =
        input.value
            .trim()
            .toUpperCase();


    if (
        code.length !== 6
    ) {

        alert(
            "El código debe tener 6 caracteres."
        );

        return;

    }


    roomCode =
        code;

    isHost = false;


    const display =
        document.getElementById(
            "displayRoomCode"
        );


    if (display) {

        display.textContent =
            roomCode;

    }


    const guest =
        document.getElementById(
            "guestName"
        );


    if (guest) {

        guest.textContent =
            playerName ||
            "Jugador 2";

    }


    showScreen(
        "roomScreen"
    );


    alert(
        "Sala encontrada. El multijugador real se conectará con Firebase en el siguiente paso."
    );

}


// ==========================================
// CÓDIGO DE SALA
// ==========================================

function generateRoomCode() {

    const characters =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "";


    for (
        let i = 0;
        i < 6;
        i++
    ) {

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
// COPIAR
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

    showScreen(
        "multiplayerScreen"
    );

}


// ==========================================
// TECLADO A B C D
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        const game =
            document.getElementById(
                "gameScreen"
            );


        if (
            game?.classList.contains(
                "active"
            )
        ) {

            const keys = {

                a: 0,
                b: 1,
                c: 2,
                d: 3

            };


            const key =
                event.key.toLowerCase();


            if (
                key in keys
            ) {

                selectAnswer(
                    keys[key]
                );

            }

        }

    }
);


// ==========================================
// INICIAR
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
