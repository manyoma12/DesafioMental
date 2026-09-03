const questions = [

    // =========================
    // 🧠 CULTURA GENERAL
    // =========================

    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál es el planeta más grande del sistema solar?",
        answers: ["Júpiter", "Marte", "Venus", "Mercurio"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuántos días tiene una semana?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál es el océano más grande del mundo?",
        answers: ["Atlántico", "Índico", "Pacífico", "Ártico"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el idioma más hablado del mundo por número de hablantes nativos?",
        answers: ["Inglés", "Español", "Chino mandarín", "Francés"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Quién pintó la Mona Lisa?",
        answers: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Miguel Ángel"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el metal cuyo símbolo químico es Au?",
        answers: ["Plata", "Hierro", "Oro", "Cobre"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "hard",
        question: "¿Cuál es la capital de Kazajistán?",
        answers: ["Taskent", "Astaná", "Biskek", "Dusambé"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "hard",
        question: "¿Qué filósofo escribió 'La República'?",
        answers: ["Aristóteles", "Sócrates", "Platón", "Descartes"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "god",
        question: "¿Qué elemento químico tiene el número atómico 74?",
        answers: ["Tungsteno", "Renio", "Osmio", "Tantalio"],
        correct: 0
    },

    // =========================
    // 🇨🇴 COLOMBIA
    // =========================

    {
        category: "colombia",
        difficulty: "easy",
        question: "¿Cuál es la capital de Colombia?",
        answers: ["Cali", "Bogotá", "Medellín", "Cartagena"],
        correct: 1
    },
    {
        category: "colombia",
        difficulty: "easy",
        question: "¿Cuál es el río más importante de Colombia?",
        answers: ["Amazonas", "Magdalena", "Cauca", "Orinoco"],
        correct: 1
    },
    {
        category: "colombia",
        difficulty: "easy",
        question: "¿En qué ciudad se encuentra la Torre del Reloj?",
        answers: ["Cartagena", "Cali", "Pereira", "Manizales"],
        correct: 0
    },
    {
        category: "colombia",
        difficulty: "medium",
        question: "¿En qué año se declaró la independencia de Colombia?",
        answers: ["1810", "1819", "1821", "1830"],
        correct: 0
    },
    {
        category: "colombia",
        difficulty: "medium",
        question: "¿Quién fue conocido como 'El Libertador'?",
        answers: ["Francisco de Paula Santander", "Simón Bolívar", "Antonio Nariño", "José María Córdova"],
        correct: 1
    },
    {
        category: "colombia",
        difficulty: "medium",
        question: "¿Cuál es el departamento cuya capital es Cali?",
        answers: ["Cauca", "Valle del Cauca", "Nariño", "Risaralda"],
        correct: 1
    },
    {
        category: "colombia",
        difficulty: "hard",
        question: "¿En qué batalla fue derrotado el ejército español que permitió consolidar la independencia de Nueva Granada?",
        answers: ["Batalla de Boyacá", "Batalla de Carabobo", "Batalla de Pichincha", "Batalla de Ayacucho"],
        correct: 0
    },
    {
        category: "colombia",
        difficulty: "hard",
        question: "¿Quién escribió 'El olvido que seremos'?",
        answers: ["Gabriel García Márquez", "Héctor Abad Faciolince", "Álvaro Mutis", "Jorge Isaacs"],
        correct: 1
    },
    {
        category: "colombia",
        difficulty: "god",
        question: "¿Cuál fue el nombre original de Bogotá durante el periodo colonial?",
        answers: ["Santa Fe de Bogotá", "Nueva Granada", "Santa Marta", "Villa de Leyva"],
        correct: 0
    },

    // =========================
    // 🔬 CIENCIA
    // =========================

    {
        category: "science",
        difficulty: "easy",
        question: "¿Cuál es el planeta conocido como el planeta rojo?",
        answers: ["Venus", "Marte", "Saturno", "Neptuno"],
        correct: 1
    },
    {
        category: "science",
        difficulty: "easy",
        question: "¿Qué órgano bombea la sangre por el cuerpo?",
        answers: ["Pulmón", "Cerebro", "Corazón", "Hígado"],
        correct: 2
    },
    {
        category: "science",
        difficulty: "easy",
        question: "¿Qué gas necesitan los seres humanos para respirar?",
        answers: ["Oxígeno", "Helio", "Hidrógeno", "Nitrógeno"],
        correct: 0
    },
    {
        category: "science",
        difficulty: "medium",
        question: "¿Cuál es la unidad básica de la vida?",
        answers: ["Átomo", "Célula", "Molécula", "Tejido"],
        correct: 1
    },
    {
        category: "science",
        difficulty: "medium",
        question: "¿Qué fuerza mantiene a los planetas en órbita alrededor del Sol?",
        answers: ["Magnetismo", "Fricción", "Gravedad", "Electricidad"],
        correct: 2
    },
    {
        category: "science",
        difficulty: "medium",
        question: "¿Cuál es la fórmula química del agua?",
        answers: ["CO2", "H2O", "O2", "NaCl"],
        correct: 1
    },
    {
        category: "science",
        difficulty: "hard",
        question: "¿Cuál es la velocidad aproximada de la luz en el vacío?",
        answers: ["300.000 km/s", "150.000 km/s", "30.000 km/s", "3.000 km/s"],
        correct: 0
    },
    {
        category: "science",
        difficulty: "hard",
        question: "¿Qué partícula subatómica posee carga negativa?",
        answers: ["Protón", "Neutrón", "Electrón", "Fotón"],
        correct: 2
    },
    {
        category: "science",
        difficulty: "god",
        question: "¿Qué principio establece que no se pueden conocer simultáneamente con precisión arbitraria la posición y el momento de una partícula?",
        answers: ["Principio de exclusión", "Principio de incertidumbre", "Principio de relatividad", "Principio de superposición"],
        correct: 1
    },

    // =========================
    // 📜 HISTORIA
    // =========================

    {
        category: "history",
        difficulty: "easy",
        question: "¿En qué año llegó Cristóbal Colón a América?",
        answers: ["1492", "1500", "1453", "1519"],
        correct: 0
    },
    {
        category: "history",
        difficulty: "easy",
        question: "¿Quién fue el primer emperador romano?",
        answers: ["Julio César", "Nerón", "Augusto", "Trajano"],
        correct: 2
    },
    {
        category: "history",
        difficulty: "easy",
        question: "¿Dónde se construyeron las pirámides de Guiza?",
        answers: ["México", "Egipto", "Grecia", "Italia"],
        correct: 1
    },
    {
        category: "history",
        difficulty: "medium",
        question: "¿En qué año comenzó la Segunda Guerra Mundial?",
        answers: ["1935", "1939", "1941", "1945"],
        correct: 1
    },
    {
        category: "history",
        difficulty: "medium",
        question: "¿Qué muro cayó en 1989?",
        answers: ["Muro de Roma", "Muro de Berlín", "Muro de París", "Muro de Londres"],
        correct: 1
    },
    {
        category: "history",
        difficulty: "medium",
        question: "¿Quién fue conocido como el Rey Sol?",
        answers: ["Luis XIV", "Carlos V", "Napoleón", "Luis XVI"],
        correct: 0
    },
    {
        category: "history",
        difficulty: "hard",
        question: "¿Qué tratado puso fin oficialmente a la Primera Guerra Mundial con Alemania?",
        answers: ["Tratado de París", "Tratado de Versalles", "Tratado de Roma", "Tratado de Viena"],
        correct: 1
    },
    {
        category: "history",
        difficulty: "hard",
        question: "¿Qué civilización desarrolló la escritura cuneiforme?",
        answers: ["Egipcia", "Romana", "Sumeria", "Maya"],
        correct: 2
    },
    {
        category: "history",
        difficulty: "god",
        question: "¿Qué emperador bizantino ordenó recopilar el Corpus Juris Civilis?",
        answers: ["Constantino", "Justiniano I", "Teodosio", "Basilio II"],
        correct: 1
    },

    // =========================
    // ⚽ DEPORTES
    // =========================

    {
        category: "sports",
        difficulty: "easy",
        question: "¿Cuántos jugadores tiene un equipo de fútbol en el campo?",
        answers: ["9", "10", "11", "12"],
        correct: 2
    },
    {
        category: "sports",
        difficulty: "easy",
        question: "¿Cuántos puntos vale un triple en baloncesto?",
        answers: ["1", "2", "3", "4"],
        correct: 2
    },
    {
        category: "sports",
        difficulty: "medium",
        question: "¿Cuánto dura normalmente un partido de fútbol?",
        answers: ["60 minutos", "80 minutos", "90 minutos", "120 minutos"],
        correct: 2
    },
    {
        category: "sports",
        difficulty: "medium",
        question: "¿En qué deporte se utiliza un 'birdie'?",
        answers: ["Tenis", "Golf", "Boxeo", "Natación"],
        correct: 1
    },
    {
        category: "sports",
        difficulty: "medium",
        question: "¿Cuántos anillos tiene el símbolo olímpico?",
        answers: ["4", "5", "6", "7"],
        correct: 1
    },
    {
        category: "sports",
        difficulty: "hard",
        question: "¿Qué país ganó el Mundial de fútbol de 2014?",
        answers: ["Argentina", "Alemania", "Brasil", "España"],
        correct: 1
    },
    {
        category: "sports",
        difficulty: "hard",
        question: "¿En qué deporte destacó Michael Phelps?",
        answers: ["Atletismo", "Natación", "Ciclismo", "Remo"],
        correct: 1
    },
    {
        category: "sports",
        difficulty: "god",
        question: "¿Qué atleta posee el récord mundial masculino de los 100 metros lisos?",
        answers: ["Tyson Gay", "Yohan Blake", "Usain Bolt", "Asafa Powell"],
        correct: 2
    },

    // =========================
    // 💻 TECNOLOGÍA
    // =========================

    {
        category: "technology",
        difficulty: "easy",
        question: "¿Qué significa HTML?",
        answers: [
            "HyperText Markup Language",
            "High Technology Machine Language",
            "Hyperlink Text Machine Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        category: "technology",
        difficulty: "easy",
        question: "¿Qué dispositivo utilizamos normalmente para mover el cursor?",
        answers: ["Router", "Ratón", "Monitor", "Impresora"],
        correct: 1
    },
    {
        category: "technology",
        difficulty: "medium",
        question: "¿Qué lenguaje se utiliza principalmente para dar interactividad a una página web?",
        answers: ["JavaScript", "HTML", "SQL", "XML"],
        correct: 0
    },
    {
        category: "technology",
        difficulty: "medium",
        question: "¿Qué significa CPU?",
        answers: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Computer Processing User"
        ],
        correct: 0
    },
    {
        category: "technology",
        difficulty: "medium",
        question: "¿Qué empresa desarrolla Android?",
        answers: ["Apple", "Google", "Microsoft", "Sony"],
        correct: 1
    },
    {
        category: "technology",
        difficulty: "hard",
        question: "¿Qué protocolo se utiliza para transferir páginas web de forma segura?",
        answers: ["HTTP", "FTP", "HTTPS", "SMTP"],
        correct: 2
    },
    {
        category: "technology",
        difficulty: "hard",
        question: "¿Qué estructura de datos funciona bajo el principio LIFO?",
        answers: ["Cola", "Pila", "Árbol", "Grafo"],
        correct: 1
    },
    {
        category: "technology",
        difficulty: "god",
        question: "¿Qué algoritmo de cifrado es un estándar ampliamente utilizado para cifrado simétrico?",
        answers: ["AES", "RSA", "SHA-256", "DSA"],
        correct: 0
    },

    // =========================
    // 🌎 GEOGRAFÍA
    // =========================

    {
        category: "geography",
        difficulty: "easy",
        question: "¿Cuál es el continente más grande?",
        answers: ["África", "Europa", "Asia", "América"],
        correct: 2
    },
    {
        category: "geography",
        difficulty: "easy",
        question: "¿Cuál es el país más grande del mundo por superficie?",
        answers: ["China", "Estados Unidos", "Canadá", "Rusia"],
        correct: 3
    },
    {
        category: "geography",
        difficulty: "medium",
        question: "¿Cuál es la capital de Australia?",
        answers: ["Sídney", "Melbourne", "Canberra", "Perth"],
        correct: 2
    },
    {
        category: "geography",
        difficulty: "medium",
        question: "¿Qué río atraviesa Egipto?",
        answers: ["Amazonas", "Nilo", "Danubio", "Yangtsé"],
        correct: 1
    },
    {
        category: "geography",
        difficulty: "medium",
        question: "¿Cuál es el desierto cálido más grande del mundo?",
        answers: ["Gobi", "Sahara", "Atacama", "Kalahari"],
        correct: 1
    },
    {
        category: "geography",
        difficulty: "hard",
        question: "¿Cuál es el país más pequeño del mundo?",
        answers: ["Mónaco", "Vaticano", "San Marino", "Liechtenstein"],
        correct: 1
    },
    {
        category: "geography",
        difficulty: "hard",
        question: "¿Qué país tiene más husos horarios oficiales?",
        answers: ["Rusia", "Estados Unidos", "Francia", "China"],
        correct: 2
    },
    {
        category: "geography",
        difficulty: "god",
        question: "¿Cuál es el lago más profundo del mundo?",
        answers: ["Lago Superior", "Lago Victoria", "Lago Baikal", "Lago Titicaca"],
        correct: 2
    },

    // =========================
    // 🎬 ENTRETENIMIENTO
    // =========================

    {
        category: "entertainment",
        difficulty: "easy",
        question: "¿Cómo se llama el personaje principal de la saga Harry Potter?",
        answers: ["Ron Weasley", "Harry Potter", "Draco Malfoy", "Neville Longbottom"],
        correct: 1
    },
    {
        category: "entertainment",
        difficulty: "easy",
        question: "¿Qué personaje vive en una piña debajo del mar?",
        answers: ["Bob Esponja", "Patricio", "Calamardo", "Arenita"],
        correct: 0
    },
    {
        category: "entertainment",
        difficulty: "medium",
        question: "¿Cómo se llama el reino de Frozen?",
        answers: ["Arendelle", "Narnia", "Wakanda", "Genovia"],
        correct: 0
    },
    {
        category: "entertainment",
        difficulty: "medium",
        question: "¿Quién dirigió la película Titanic de 1997?",
        answers: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "George Lucas"],
        correct: 1
    },
    {
        category: "entertainment",
        difficulty: "medium",
        question: "¿Qué instrumento toca principalmente el personaje de Jack en Titanic?",
        answers: ["Violín", "Piano", "Ninguno", "Guitarra"],
        correct: 2
    },
    {
        category: "entertainment",
        difficulty: "hard",
        question: "¿Cuál fue la primera película de Toy Story?",
        answers: ["Toy Story", "Toy Story 2", "Toy Story 3", "Toy Story 4"],
        correct: 0
    },
    {
        category: "entertainment",
        difficulty: "hard",
        question: "¿Qué actor interpretó a Iron Man en el Universo Cinematográfico de Marvel?",
        answers: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
        correct: 1
    },
    {
        category: "entertainment",
        difficulty: "god",
        question: "¿Qué película ganó el Óscar a mejor película en 2020?",
        answers: ["1917", "Joker", "Parásitos", "Ford v Ferrari"],
        correct: 2
    },

    // =========================
    // 🎲 DESAFÍO MIXTO
    // =========================
    // No necesita preguntas propias.
    // El código mezcla todas las categorías.

    // =========================
    // ➕ PREGUNTAS EXTRA
    // =========================

    {
        category: "general",
        difficulty: "god",
        question: "¿Cuál es el número primo más pequeño mayor que 100?",
        answers: ["101", "103", "107", "109"],
        correct: 0
    },

    {
        category: "colombia",
        difficulty: "god",
        question: "¿Cuál es el pico más alto de Colombia?",
        answers: [
            "Nevado del Ruiz",
            "Pico Cristóbal Colón",
            "Nevado del Tolima",
            "Sierra Nevada del Cocuy"
        ],
        correct: 1
    }

];

window.questionBank = questions;
