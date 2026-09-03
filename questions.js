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

    // =========================
    // 🧠 CULTURA GENERAL — FÁCIL
    // =========================

    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuántos meses tiene un año?",
        answers: ["10", "11", "12", "13"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuántas horas tiene un día?",
        answers: ["12", "18", "24", "30"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuántos minutos tiene una hora?",
        answers: ["30", "45", "60", "90"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuántos segundos tiene un minuto?",
        answers: ["30", "45", "60", "100"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál es el satélite natural de la Tierra?",
        answers: ["El Sol", "La Luna", "Marte", "Venus"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué estrella se encuentra en el centro del sistema solar?",
        answers: ["Sirio", "Polaris", "El Sol", "Vega"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuántos continentes se consideran habitualmente en el modelo de siete continentes?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué color se obtiene al mezclar azul y amarillo?",
        answers: ["Verde", "Naranja", "Morado", "Rosa"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué color se obtiene al mezclar rojo y blanco?",
        answers: ["Verde", "Rosa", "Azul", "Marrón"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuántos lados tiene un triángulo?",
        answers: ["2", "3", "4", "5"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuántos lados tiene un cuadrado?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué forma tiene una pelota de fútbol tradicionalmente?",
        answers: ["Cúbica", "Esférica", "Triangular", "Cilíndrica"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuánto es 5 + 7?",
        answers: ["10", "11", "12", "13"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuánto es 10 - 4?",
        answers: ["4", "5", "6", "7"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuánto es 6 × 3?",
        answers: ["12", "15", "18", "21"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuánto es 20 ÷ 4?",
        answers: ["4", "5", "6", "8"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál es el número que viene después del 99?",
        answers: ["98", "100", "101", "110"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál es el número que viene antes del 50?",
        answers: ["48", "49", "51", "52"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué instrumento se utiliza para medir la temperatura?",
        answers: ["Barómetro", "Termómetro", "Regla", "Balanza"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué instrumento se utiliza para medir el tiempo?",
        answers: ["Reloj", "Microscopio", "Telescopio", "Brújula"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué instrumento sirve para orientarse mediante los puntos cardinales?",
        answers: ["Brújula", "Termómetro", "Cronómetro", "Balanza"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué sentido utilizamos principalmente para percibir los sonidos?",
        answers: ["Vista", "Oído", "Olfato", "Tacto"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué sentido utilizamos para percibir los olores?",
        answers: ["Gusto", "Tacto", "Olfato", "Vista"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué sentido utilizamos principalmente para ver?",
        answers: ["Vista", "Oído", "Olfato", "Gusto"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué sentido permite percibir sabores?",
        answers: ["Oído", "Gusto", "Vista", "Tacto"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué órgano utilizamos principalmente para pensar?",
        answers: ["Corazón", "Pulmón", "Cerebro", "Estómago"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál es el órgano externo más grande del cuerpo humano?",
        answers: ["Corazón", "Piel", "Pulmón", "Hígado"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuántos dientes tiene normalmente un adulto, incluyendo las muelas del juicio?",
        answers: ["24", "28", "32", "36"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué líquido circula por las venas y arterias?",
        answers: ["Agua", "Sangre", "Saliva", "Lágrimas"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué animal es conocido por producir lana?",
        answers: ["Oveja", "Caballo", "Perro", "Gallina"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué animal doméstico suele decir 'miau'?",
        answers: ["Perro", "Gato", "Vaca", "Caballo"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué animal doméstico suele decir 'guau'?",
        answers: ["Gato", "Perro", "Pato", "Cerdo"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué animal produce leche que consumen habitualmente las personas?",
        answers: ["Vaca", "Águila", "Tigre", "Serpiente"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué animal es conocido por tener una trompa larga?",
        answers: ["Elefante", "Jirafa", "Cebra", "León"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué animal es conocido por tener un cuello muy largo?",
        answers: ["Jirafa", "Rinoceronte", "Oso", "Lobo"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estos animales es un ave?",
        answers: ["Delfín", "Águila", "Tiburón", "Caballo"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estos animales vive principalmente en el agua?",
        answers: ["Delfín", "León", "Elefante", "Jirafa"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estos animales es un reptil?",
        answers: ["Tortuga", "Perro", "Águila", "Delfín"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estos animales es un insecto?",
        answers: ["Mariposa", "Rana", "Lagarto", "Ratón"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué animal es famoso por cambiar de color para camuflarse?",
        answers: ["Camaleón", "Elefante", "Caballo", "Pingüino"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estos animales es conocido por vivir en zonas muy frías y tener plumaje?",
        answers: ["Pingüino", "Mono", "Jirafa", "Leopardo"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué fruta suele ser amarilla y alargada?",
        answers: ["Manzana", "Banano", "Uva", "Fresa"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué fruta suele ser roja y tiene pequeñas semillas en su superficie?",
        answers: ["Fresa", "Piña", "Mango", "Banano"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué fruta tiene normalmente una cáscara verde o amarilla y una pulpa dulce de color naranja?",
        answers: ["Mango", "Uva", "Coco", "Limón"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué fruta es conocida por tener una cáscara dura y pulpa blanca en su interior?",
        answers: ["Coco", "Fresa", "Sandía", "Uva"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué fruta suele tener muchas semillas pequeñas en su interior y pulpa roja?",
        answers: ["Sandía", "Banano", "Pera", "Coco"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estos alimentos se obtiene principalmente de la leche?",
        answers: ["Queso", "Arroz", "Pan", "Pasta"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estos alimentos se prepara normalmente con harina y se hornea?",
        answers: ["Pan", "Arroz", "Ensalada", "Sopa"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estos alimentos es un cereal?",
        answers: ["Arroz", "Queso", "Pollo", "Lechuga"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estos alimentos es una verdura de hojas verdes?",
        answers: ["Lechuga", "Banano", "Queso", "Arroz"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estas bebidas se prepara normalmente con granos de café?",
        answers: ["Café", "Agua", "Limonada", "Leche"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué bebida se obtiene al exprimir limones y mezclar su jugo con agua?",
        answers: ["Limonada", "Chocolate", "Café", "Té"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál es el ingrediente principal de una tortilla francesa?",
        answers: ["Huevos", "Arroz", "Harina", "Papas"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto utilizamos normalmente para escribir con tinta?",
        answers: ["Cuchara", "Bolígrafo", "Tenedor", "Vaso"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto utilizamos para borrar lo escrito con lápiz?",
        answers: ["Regla", "Goma de borrar", "Tijeras", "Pegamento"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto sirve para medir longitudes pequeñas?",
        answers: ["Regla", "Vaso", "Plato", "Almohada"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto se utiliza para cortar papel?",
        answers: ["Tijeras", "Regla", "Borrador", "Cuaderno"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto se utiliza para pegar papel?",
        answers: ["Pegamento", "Lápiz", "Regla", "Sacapuntas"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto utilizamos para afilar un lápiz?",
        answers: ["Sacapuntas", "Tijeras", "Goma", "Regla"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto se utiliza normalmente para protegerse de la lluvia?",
        answers: ["Paraguas", "Gafas de sol", "Bufanda", "Guantes"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué prenda se utiliza normalmente en los pies?",
        answers: ["Camisa", "Zapatos", "Gorra", "Bufanda"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué prenda se usa normalmente en la cabeza?",
        answers: ["Pantalón", "Gorra", "Calcetín", "Camisa"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué prenda se usa normalmente para cubrir las manos del frío?",
        answers: ["Guantes", "Sandalias", "Sombrero", "Cinturón"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué mueble se utiliza principalmente para dormir?",
        answers: ["Mesa", "Cama", "Silla", "Armario"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué mueble se utiliza normalmente para sentarse?",
        answers: ["Silla", "Cama", "Armario", "Estante"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué mueble se utiliza para guardar ropa?",
        answers: ["Armario", "Mesa", "Silla", "Sofá"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué aparato se utiliza para conservar los alimentos fríos?",
        answers: ["Horno", "Nevera", "Televisor", "Ventilador"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué aparato se utiliza para cocinar alimentos mediante calor?",
        answers: ["Horno", "Radio", "Teléfono", "Reloj"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué aparato sirve principalmente para iluminar una habitación?",
        answers: ["Lámpara", "Nevera", "Lavadora", "Radio"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué aparato se utiliza para lavar ropa?",
        answers: ["Lavadora", "Nevera", "Televisor", "Horno"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué aparato se utiliza para escuchar emisoras de audio?",
        answers: ["Radio", "Horno", "Nevera", "Licuadora"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué aparato permite ver programas y películas en una pantalla?",
        answers: ["Televisor", "Tostadora", "Balanza", "Ventilador"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué medio de transporte circula sobre rieles?",
        answers: ["Tren", "Avión", "Barco", "Bicicleta"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué medio de transporte viaja por el aire?",
        answers: ["Avión", "Tren", "Barco", "Autobús"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué medio de transporte navega por el agua?",
        answers: ["Barco", "Avión", "Motocicleta", "Tren"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué vehículo tiene normalmente dos ruedas y se impulsa con pedales?",
        answers: ["Bicicleta", "Autobús", "Camión", "Tren"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué vehículo tiene normalmente dos ruedas y un motor?",
        answers: ["Motocicleta", "Bicicleta", "Barco", "Avión"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué vehículo se utiliza habitualmente para transportar pasajeros en una ciudad siguiendo rutas establecidas?",
        answers: ["Autobús", "Avión", "Tractor", "Barco"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué lugar se utiliza normalmente para comprar medicamentos?",
        answers: ["Farmacia", "Biblioteca", "Estadio", "Museo"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué lugar está destinado principalmente a prestar libros?",
        answers: ["Biblioteca", "Hospital", "Restaurante", "Aeropuerto"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué lugar se utiliza principalmente para atender a personas enfermas?",
        answers: ["Hospital", "Estadio", "Biblioteca", "Cine"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Dónde se proyectan normalmente películas para el público?",
        answers: ["Cine", "Hospital", "Farmacia", "Biblioteca"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Dónde se disputan normalmente partidos de fútbol?",
        answers: ["Estadio", "Biblioteca", "Museo", "Farmacia"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué lugar conserva y exhibe objetos de interés histórico o artístico?",
        answers: ["Museo", "Hospital", "Aeropuerto", "Supermercado"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué lugar se utiliza para que despeguen y aterricen aviones?",
        answers: ["Aeropuerto", "Estación de tren", "Puerto", "Estadio"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué lugar recibe y despacha barcos?",
        answers: ["Puerto", "Aeropuerto", "Biblioteca", "Estadio"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué punto cardinal indica aproximadamente la dirección por donde sale el Sol?",
        answers: ["Norte", "Sur", "Este", "Oeste"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué punto cardinal indica aproximadamente la dirección por donde se pone el Sol?",
        answers: ["Este", "Oeste", "Norte", "Sur"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuántas letras tiene el alfabeto español?",
        answers: ["26", "27", "28", "29"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál es la primera letra del alfabeto español?",
        answers: ["A", "B", "C", "D"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál es la última letra del alfabeto español?",
        answers: ["X", "Y", "Z", "W"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué signo se coloca normalmente al final de una pregunta en español?",
        answers: ["¿", "¡", ".", "?"],
        correct: 3
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué signo se utiliza para expresar sorpresa o exclamación?",
        answers: ["Coma", "Signo de exclamación", "Dos puntos", "Punto y coma"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estas palabras es un color?",
        answers: ["Azul", "Mesa", "Correr", "Rápido"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estas palabras es un número?",
        answers: ["Siete", "Azul", "Perro", "Grande"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estas palabras es un animal?",
        answers: ["Gato", "Mesa", "Azul", "Rápido"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estas palabras describe un tamaño?",
        answers: ["Grande", "Martes", "Perro", "Azul"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué día viene después del lunes?",
        answers: ["Domingo", "Martes", "Miércoles", "Viernes"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué día viene antes del viernes?",
        answers: ["Martes", "Miércoles", "Jueves", "Sábado"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué mes viene después de enero?",
        answers: ["Marzo", "Febrero", "Abril", "Diciembre"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué mes viene antes de diciembre?",
        answers: ["Octubre", "Noviembre", "Septiembre", "Enero"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estos meses tiene normalmente 28 días?",
        answers: ["Febrero", "Abril", "Junio", "Septiembre"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué estación del año suele asociarse con temperaturas más bajas en las zonas templadas?",
        answers: ["Verano", "Primavera", "Invierno", "Otoño"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué estación suele asociarse con temperaturas más altas en las zonas templadas?",
        answers: ["Invierno", "Verano", "Otoño", "Primavera"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué fenómeno atmosférico consiste en gotas de agua que caen de las nubes?",
        answers: ["Lluvia", "Arcoíris", "Niebla", "Viento"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué fenómeno aparece a menudo en el cielo cuando la luz solar atraviesa gotas de agua?",
        answers: ["Arcoíris", "Terremoto", "Volcán", "Marea"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué fenómeno natural consiste en un movimiento brusco de la corteza terrestre?",
        answers: ["Terremoto", "Arcoíris", "Lluvia", "Nieve"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto se utiliza normalmente para abrir una cerradura?",
        answers: ["Llave", "Cuchara", "Regla", "Vela"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto se utiliza para beber líquidos?",
        answers: ["Vaso", "Plato", "Tenedor", "Almohada"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué utensilio se utiliza normalmente para llevar alimentos líquidos a la boca?",
        answers: ["Cuchara", "Martillo", "Regla", "Tijeras"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué utensilio tiene dientes y se utiliza para comer?",
        answers: ["Tenedor", "Vaso", "Cuchillo", "Plato"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué utensilio se utiliza normalmente para cortar alimentos?",
        answers: ["Cuchillo", "Vaso", "Cuchara", "Plato"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto sirve para cubrirse mientras se duerme?",
        answers: ["Manta", "Espejo", "Lámpara", "Cortina"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto refleja normalmente nuestra imagen?",
        answers: ["Espejo", "Almohada", "Manta", "Mesa"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto se utiliza normalmente para apoyar la cabeza al dormir?",
        answers: ["Almohada", "Cuchara", "Vaso", "Lámpara"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué animal aparece en el escudo de Australia junto al emú?",
        answers: ["Canguro", "Koala", "Cocodrilo", "Dingo"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué animal es conocido por dormir colgado boca abajo?",
        answers: ["Murciélago", "Jirafa", "Cebra", "Pingüino"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué animal produce miel?",
        answers: ["Abeja", "Hormiga", "Mariposa", "Mosca"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué insecto pasa por una transformación de oruga a adulto?",
        answers: ["Mariposa", "Hormiga", "Mosquito", "Abeja"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Cuál de estos objetos se utiliza para llamar a otra persona a distancia?",
        answers: ["Teléfono", "Plato", "Zapato", "Cuchara"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto se utiliza para tomar fotografías?",
        answers: ["Cámara", "Brújula", "Balanza", "Termómetro"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué objeto permite escuchar música de forma individual colocándolo en los oídos?",
        answers: ["Auriculares", "Gafas", "Guantes", "Zapatos"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "easy",
        question: "¿Qué aparato se utiliza para hacer llamadas y acceder a aplicaciones móviles?",
        answers: ["Teléfono inteligente", "Tostadora", "Lámpara", "Ventilador"],
        correct: 0
    },
    
    // ==========================================
    // 🧠 CULTURA GENERAL — MEDIO — 100 PREGUNTAS
    // ==========================================

    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué científico formuló las tres leyes del movimiento?",
        answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la moneda oficial de Japón?",
        answers: ["Won", "Yuan", "Yen", "Ringgit"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué órgano del cuerpo humano produce la insulina?",
        answers: ["Hígado", "Páncreas", "Riñón", "Bazo"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Canadá?",
        answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        correct: 3
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Quién escribió la novela 'Cien años de soledad'?",
        answers: ["Mario Vargas Llosa", "Gabriel García Márquez", "Julio Cortázar", "Jorge Luis Borges"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué instrumento se utiliza para medir la presión atmosférica?",
        answers: ["Termómetro", "Barómetro", "Higrómetro", "Anemómetro"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el símbolo químico de la plata?",
        answers: ["Pt", "Ag", "Au", "Fe"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿En qué continente se encuentra la cordillera de los Alpes?",
        answers: ["Asia", "África", "Europa", "Oceanía"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué pintor español creó 'Guernica'?",
        answers: ["Salvador Dalí", "Pablo Picasso", "Joan Miró", "Diego Velázquez"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el hueso más largo del cuerpo humano?",
        answers: ["Tibia", "Húmero", "Fémur", "Radio"],
        correct: 2
    },

    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país tiene como capital a Lisboa?",
        answers: ["España", "Portugal", "Italia", "Grecia"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué escritor creó al detective Sherlock Holmes?",
        answers: ["Agatha Christie", "Arthur Conan Doyle", "Charles Dickens", "H. G. Wells"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué planeta tiene los anillos más visibles del sistema solar?",
        answers: ["Urano", "Júpiter", "Saturno", "Neptuno"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el idioma oficial de Brasil?",
        answers: ["Español", "Portugués", "Francés", "Inglés"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué compositor creó la Novena Sinfonía?",
        answers: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Frédéric Chopin"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el proceso mediante el cual las plantas producen su alimento usando luz?",
        answers: ["Respiración", "Fotosíntesis", "Fermentación", "Digestión"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Noruega?",
        answers: ["Oslo", "Estocolmo", "Helsinki", "Copenhague"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país regaló la Estatua de la Libertad a Estados Unidos?",
        answers: ["Reino Unido", "Francia", "Italia", "España"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué científico propuso la teoría de la evolución por selección natural?",
        answers: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Robert Hooke"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Marruecos?",
        answers: ["Casablanca", "Rabat", "Fez", "Marrakech"],
        correct: 1
    },

    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué metal es líquido a temperatura ambiente?",
        answers: ["Mercurio", "Aluminio", "Plomo", "Zinc"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el océano que separa África de Australia?",
        answers: ["Atlántico", "Pacífico", "Índico", "Ártico"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Quién escribió 'Don Quijote de la Mancha'?",
        answers: ["Miguel de Cervantes", "Lope de Vega", "Federico García Lorca", "Benito Pérez Galdós"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué vitamina se obtiene principalmente mediante la exposición de la piel al sol?",
        answers: ["Vitamina A", "Vitamina B12", "Vitamina C", "Vitamina D"],
        correct: 3
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Turquía?",
        answers: ["Estambul", "Ankara", "Esmirna", "Bursa"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué científico descubrió la penicilina?",
        answers: ["Alexander Fleming", "Marie Curie", "Dmitri Mendeléyev", "James Watson"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el órgano responsable principalmente del intercambio de oxígeno y dióxido de carbono?",
        answers: ["Corazón", "Pulmones", "Estómago", "Páncreas"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Austria?",
        answers: ["Viena", "Praga", "Budapest", "Zúrich"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué famoso físico desarrolló la teoría de la relatividad?",
        answers: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el principal componente del aire en la atmósfera terrestre?",
        answers: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Argón"],
        correct: 1
    },

    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país es conocido por tener forma de bota en los mapas?",
        answers: ["Grecia", "Italia", "Croacia", "Portugal"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el nombre del satélite natural de la Tierra?",
        answers: ["Europa", "Titán", "La Luna", "Fobos"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué escritor británico creó la saga de Harry Potter?",
        answers: ["J. K. Rowling", "J. R. R. Tolkien", "C. S. Lewis", "George Orwell"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué gas es más abundante en la atmósfera terrestre?",
        answers: ["Nitrógeno", "Oxígeno", "Helio", "Hidrógeno"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Grecia?",
        answers: ["Atenas", "Roma", "Sofía", "Belgrado"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué órgano filtra principalmente la sangre y produce orina?",
        answers: ["Pulmón", "Riñón", "Hígado", "Corazón"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Quién compuso la obra 'Las cuatro estaciones'?",
        answers: ["Antonio Vivaldi", "Mozart", "Beethoven", "Bach"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país tiene como capital a Budapest?",
        answers: ["Rumanía", "Hungría", "Serbia", "Eslovaquia"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la unidad básica de la herencia biológica?",
        answers: ["Cromosoma", "Gen", "Proteína", "Tejido"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué científico formuló las leyes de la herencia a partir de experimentos con guisantes?",
        answers: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Antonie van Leeuwenhoek"],
        correct: 0
    },

    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Irlanda?",
        answers: ["Belfast", "Dublín", "Cardiff", "Edimburgo"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué parte de la célula contiene normalmente el material genético?",
        answers: ["Membrana", "Citoplasma", "Núcleo", "Ribosoma"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el símbolo químico del sodio?",
        answers: ["So", "Na", "S", "Sd"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país fue la cuna de los Juegos Olímpicos antiguos?",
        answers: ["Italia", "Grecia", "Egipto", "Turquía"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Finlandia?",
        answers: ["Helsinki", "Oslo", "Tallin", "Riga"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué tipo de sangre se conoce habitualmente como donante universal de glóbulos rojos?",
        answers: ["AB positivo", "O negativo", "A positivo", "B negativo"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué continente tiene mayor número de países?",
        answers: ["Asia", "África", "Europa", "América"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué famoso naturalista aparece asociado a la teoría de la selección natural junto con Darwin?",
        answers: ["Alfred Russel Wallace", "Gregor Mendel", "Carl Linnaeus", "James Hutton"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país utiliza el franco suizo como moneda?",
        answers: ["Suiza", "Suecia", "Dinamarca", "Noruega"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Bélgica?",
        answers: ["Bruselas", "Amberes", "Brujas", "Gante"],
        correct: 0
    },

    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué científico desarrolló una clasificación moderna de los elementos químicos basada en la tabla periódica?",
        answers: ["Dmitri Mendeléyev", "Michael Faraday", "Erwin Schrödinger", "Robert Boyle"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el nombre del proceso por el que un líquido pasa a estado gaseoso?",
        answers: ["Condensación", "Solidificación", "Evaporación", "Fusión"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país tiene como capital a Varsovia?",
        answers: ["Polonia", "Ucrania", "Lituania", "Bielorrusia"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué filósofo fue maestro de Alejandro Magno?",
        answers: ["Platón", "Aristóteles", "Sócrates", "Epicuro"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el símbolo químico del potasio?",
        answers: ["P", "Po", "K", "Pt"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país tiene como capital a Seúl?",
        answers: ["China", "Japón", "Corea del Sur", "Vietnam"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el nombre del instrumento que mide la velocidad del viento?",
        answers: ["Barómetro", "Anemómetro", "Pluviómetro", "Sismógrafo"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué escritor escribió 'La metamorfosis'?",
        answers: ["Franz Kafka", "Fiódor Dostoyevski", "León Tolstói", "Ernest Hemingway"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Nueva Zelanda?",
        answers: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué planeta es conocido por girar prácticamente de lado debido a su gran inclinación axial?",
        answers: ["Marte", "Urano", "Mercurio", "Venus"],
        correct: 1
    },

    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué científico es conocido por sus trabajos sobre la radiactividad y recibió dos premios Nobel?",
        answers: ["Marie Curie", "Ada Lovelace", "Rosalind Franklin", "Lise Meitner"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Dinamarca?",
        answers: ["Copenhague", "Estocolmo", "Oslo", "Reikiavik"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué tipo de animal es una ballena desde el punto de vista biológico?",
        answers: ["Pez", "Anfibio", "Mamífero", "Reptil"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el principal órgano del sistema nervioso central?",
        answers: ["Cerebro", "Hígado", "Pulmón", "Páncreas"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país tiene como capital a Praga?",
        answers: ["Austria", "República Checa", "Eslovenia", "Croacia"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué escritor creó al personaje de Drácula en su famosa novela de 1897?",
        answers: ["Bram Stoker", "Mary Shelley", "Oscar Wilde", "Robert Louis Stevenson"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el nombre del cambio de estado de sólido a líquido?",
        answers: ["Fusión", "Condensación", "Sublimación", "Evaporación"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país tiene como capital a Reikiavik?",
        answers: ["Islandia", "Finlandia", "Estonia", "Letonia"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué parte del ojo regula la cantidad de luz que entra?",
        answers: ["Córnea", "Iris", "Retina", "Cristalino"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el símbolo químico del hierro?",
        answers: ["Ir", "Fe", "Hi", "H"],
        correct: 1
    },

    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Países Bajos?",
        answers: ["Ámsterdam", "Róterdam", "La Haya", "Utrecht"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué escritor británico escribió '1984'?",
        answers: ["George Orwell", "Aldous Huxley", "J. R. R. Tolkien", "Ian Fleming"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el órgano más grande del cuerpo humano?",
        answers: ["Hígado", "Piel", "Pulmón", "Cerebro"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país tiene como capital a Bucarest?",
        answers: ["Bulgaria", "Rumanía", "Moldavia", "Serbia"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué fenómeno natural se mide habitualmente con la escala de Richter?",
        answers: ["Huracanes", "Terremotos", "Tornados", "Inundaciones"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el símbolo químico del calcio?",
        answers: ["Cl", "Ca", "C", "Co"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué filósofo griego fue condenado a muerte y bebió cicuta?",
        answers: ["Sócrates", "Aristóteles", "Platón", "Heráclito"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país tiene como capital a Zagreb?",
        answers: ["Croacia", "Eslovenia", "Bosnia y Herzegovina", "Montenegro"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué instrumento se utiliza para detectar y registrar ondas sísmicas?",
        answers: ["Sismógrafo", "Telescopio", "Microscopio", "Espectrómetro"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Vietnam?",
        answers: ["Ho Chi Minh", "Hanói", "Da Nang", "Hue"],
        correct: 1
    },

    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué proceso convierte el azúcar en alcohol mediante la acción de microorganismos?",
        answers: ["Oxidación", "Fermentación", "Destilación", "Combustión"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país tiene como capital a Manila?",
        answers: ["Indonesia", "Filipinas", "Malasia", "Tailandia"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el nombre de la capa de la atmósfera donde se encuentra la mayor parte del ozono?",
        answers: ["Troposfera", "Estratosfera", "Mesosfera", "Termosfera"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué científico descubrió la circulación de la sangre por el cuerpo humano?",
        answers: ["William Harvey", "Andreas Vesalio", "Hipócrates", "Galeno"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Tailandia?",
        answers: ["Bangkok", "Hanói", "Phnom Penh", "Yangón"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué número representa la letra X en los números romanos?",
        answers: ["5", "10", "50", "100"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué rama de la ciencia estudia los seres vivos?",
        answers: ["Geología", "Biología", "Astronomía", "Meteorología"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país tiene como capital a Lima?",
        answers: ["Perú", "Ecuador", "Bolivia", "Chile"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el nombre de la ciencia que estudia los astros y el universo?",
        answers: ["Geología", "Astronomía", "Ecología", "Anatomía"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué elemento químico tiene como símbolo Na?",
        answers: ["Nitrógeno", "Sodio", "Neón", "Níquel"],
        correct: 1
    },

    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de Chile?",
        answers: ["Valparaíso", "Santiago", "Concepción", "Antofagasta"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué escritor colombiano recibió el Premio Nobel de Literatura en 1982?",
        answers: ["Álvaro Mutis", "Gabriel García Márquez", "Héctor Abad Faciolince", "Fernando Vallejo"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el número atómico del carbono?",
        answers: ["4", "6", "8", "12"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué país tiene como capital a Buenos Aires?",
        answers: ["Uruguay", "Argentina", "Paraguay", "Chile"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el nombre del proceso mediante el cual el vapor de agua se transforma en líquido?",
        answers: ["Fusión", "Condensación", "Sublimación", "Evaporación"],
        correct: 1
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué famoso científico italiano realizó importantes observaciones astronómicas con telescopio a comienzos del siglo XVII?",
        answers: ["Galileo Galilei", "Isaac Newton", "Johannes Kepler", "Tycho Brahe"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es la capital de México?",
        answers: ["Guadalajara", "Monterrey", "Ciudad de México", "Puebla"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Qué disciplina estudia la composición y estructura de la materia?",
        answers: ["Química", "Sociología", "Historia", "Economía"],
        correct: 0
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuál es el resultado de 12 × 12?",
        answers: ["124", "132", "144", "154"],
        correct: 2
    },
    {
        category: "general",
        difficulty: "medium",
        question: "¿Cuántos grados tiene un ángulo recto?",
        answers: ["45", "60", "90", "180"],
        correct: 2
    }  ];

window.questionBank = questions;
