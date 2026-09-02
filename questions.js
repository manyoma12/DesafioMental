const questions = [

  // =========================
  // CULTURA GENERAL
  // =========================

  {
    category: "general",
    question: "¿Cuál es la capital de Francia?",
    answers: ["Madrid", "París", "Roma", "Lisboa"],
    correct: 1
  },
  {
    category: "general",
    question: "¿Cuántos lados tiene un hexágono?",
    answers: ["5", "6", "7", "8"],
    correct: 1
  },
  {
    category: "general",
    question: "¿Cuál es el planeta más grande del sistema solar?",
    answers: ["Marte", "Saturno", "Júpiter", "Neptuno"],
    correct: 2
  },
  {
    category: "general",
    question: "¿Cuántos días tiene un año normal?",
    answers: ["360", "365", "366", "370"],
    correct: 1
  },
  {
    category: "general",
    question: "¿Cuál es el océano más grande del mundo?",
    answers: ["Atlántico", "Índico", "Pacífico", "Ártico"],
    correct: 2
  },
  {
    category: "general",
    question: "¿Cuántos continentes se consideran habitualmente?",
    answers: ["5", "6", "7", "8"],
    correct: 2
  },
  {
    category: "general",
    question: "¿Cuál es el idioma más hablado del mundo por número de hablantes nativos?",
    answers: ["Inglés", "Español", "Chino mandarín", "Francés"],
    correct: 2
  },
  {
    category: "general",
    question: "¿Qué instrumento tiene teclas, cuerdas y martillos?",
    answers: ["Guitarra", "Piano", "Violín", "Flauta"],
    correct: 1
  },
  {
    category: "general",
    question: "¿Cuántos minutos tiene una hora?",
    answers: ["30", "45", "60", "90"],
    correct: 2
  },

  // =========================
  // COLOMBIA
  // =========================

  {
    category: "colombia",
    question: "¿Cuál es la capital de Colombia?",
    answers: ["Medellín", "Bogotá", "Cali", "Barranquilla"],
    correct: 1
  },
  {
    category: "colombia",
    question: "¿Cuál es la moneda oficial de Colombia?",
    answers: ["Dólar", "Peso colombiano", "Euro", "Sol"],
    correct: 1
  },
  {
    category: "colombia",
    question: "¿Cuál es el río más importante de Colombia por su longitud y extensión?",
    answers: ["Río Cauca", "Río Magdalena", "Río Atrato", "Río Meta"],
    correct: 1
  },
  {
    category: "colombia",
    question: "¿En qué ciudad se encuentra la Torre Colpatria?",
    answers: ["Cali", "Cartagena", "Bogotá", "Manizales"],
    correct: 2
  },
  {
    category: "colombia",
    question: "¿Cuál es la ciudad conocida como la 'Ciudad de la Eterna Primavera'?",
    answers: ["Cali", "Medellín", "Pereira", "Ibagué"],
    correct: 1
  },
  {
    category: "colombia",
    question: "¿Cuál es la flor nacional de Colombia?",
    answers: ["Rosa", "Girasol", "Orquídea", "Tulipán"],
    correct: 2
  },
  {
    category: "colombia",
    question: "¿Cuál es el ave nacional de Colombia?",
    answers: ["Cóndor de los Andes", "Águila", "Guacamaya", "Colibrí"],
    correct: 0
  },
  {
    category: "colombia",
    question: "¿En qué ciudad se celebra una de las ferias más importantes del país dedicada a las flores?",
    answers: ["Medellín", "Cali", "Santa Marta", "Cúcuta"],
    correct: 0
  },
  {
    category: "colombia",
    question: "¿Qué mar baña la costa norte de Colombia?",
    answers: ["Mar Mediterráneo", "Mar Caribe", "Mar Rojo", "Mar Negro"],
    correct: 1
  },

  // =========================
  // CIENCIA
  // =========================

  {
    category: "science",
    question: "¿Cuál es el planeta más cercano al Sol?",
    answers: ["Venus", "Mercurio", "Marte", "Tierra"],
    correct: 1
  },
  {
    category: "science",
    question: "¿Qué gas necesitan los seres humanos para respirar?",
    answers: ["Oxígeno", "Helio", "Hidrógeno", "Neón"],
    correct: 0
  },
  {
    category: "science",
    question: "¿Cuál es la unidad básica de los seres vivos?",
    answers: ["Átomo", "Molécula", "Célula", "Tejido"],
    correct: 2
  },
  {
    category: "science",
    question: "¿Qué órgano bombea la sangre por el cuerpo?",
    answers: ["Pulmón", "Cerebro", "Corazón", "Hígado"],
    correct: 2
  },
  {
    category: "science",
    question: "¿Cuántos huesos tiene aproximadamente un adulto?",
    answers: ["106", "206", "306", "406"],
    correct: 1
  },
  {
    category: "science",
    question: "¿Qué fuerza nos mantiene sobre la superficie de la Tierra?",
    answers: ["Electricidad", "Gravedad", "Fricción", "Magnetismo"],
    correct: 1
  },
  {
    category: "science",
    question: "¿Cuál es el símbolo químico del oro?",
    answers: ["Ag", "Fe", "Au", "O"],
    correct: 2
  },
  {
    category: "science",
    question: "¿Qué parte de la planta realiza principalmente la fotosíntesis?",
    answers: ["Raíz", "Tallo", "Hoja", "Semilla"],
    correct: 2
  },
  {
    category: "science",
    question: "¿A qué temperatura hierve el agua aproximadamente al nivel del mar?",
    answers: ["50 °C", "75 °C", "100 °C", "150 °C"],
    correct: 2
  },

  // =========================
  // HISTORIA
  // =========================

  {
    category: "history",
    question: "¿En qué año llegó Cristóbal Colón a América?",
    answers: ["1492", "1500", "1520", "1450"],
    correct: 0
  },
  {
    category: "history",
    question: "¿Quién fue conocido como el Libertador?",
    answers: ["Simón Bolívar", "Napoleón Bonaparte", "Julio César", "Miguel Hidalgo"],
    correct: 0
  },
  {
    category: "history",
    question: "¿En qué año se produjo la Revolución Francesa?",
    answers: ["1689", "1776", "1789", "1810"],
    correct: 2
  },
  {
    category: "history",
    question: "¿Qué civilización construyó Machu Picchu?",
    answers: ["Maya", "Azteca", "Inca", "Egipcia"],
    correct: 2
  },
  {
    category: "history",
    question: "¿Qué batalla fue decisiva para la independencia de Colombia?",
    answers: ["Batalla de Boyacá", "Batalla de Waterloo", "Batalla de Trafalgar", "Batalla de Maratón"],
    correct: 0
  },
  {
    category: "history",
    question: "¿En qué año ocurrió la Batalla de Boyacá?",
    answers: ["1810", "1819", "1825", "1830"],
    correct: 1
  },
  {
    category: "history",
    question: "¿Qué famoso barco se hundió en 1912?",
    answers: ["Titanic", "Mayflower", "Santa María", "Victoria"],
    correct: 0
  },
  {
    category: "history",
    question: "¿Quién fue el primer hombre en pisar la Luna?",
    answers: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    correct: 1
  },
  {
    category: "history",
    question: "¿Qué antiguo pueblo construyó las pirámides de Guiza?",
    answers: ["Romanos", "Griegos", "Egipcios", "Persas"],
    correct: 2
  },

  // =========================
  // DEPORTES
  // =========================

  {
    category: "sports",
    question: "¿Cuántos jugadores tiene un equipo de fútbol en el campo?",
    answers: ["9", "10", "11", "12"],
    correct: 2
  },
  {
    category: "sports",
    question: "¿Cuánto dura normalmente un partido de fútbol profesional?",
    answers: ["60 minutos", "75 minutos", "90 minutos", "120 minutos"],
    correct: 2
  },
  {
    category: "sports",
    question: "¿Qué deporte utiliza una raqueta y una pelota amarilla?",
    answers: ["Béisbol", "Tenis", "Baloncesto", "Golf"],
    correct: 1
  },
  {
    category: "sports",
    question: "¿Cuántos anillos tiene el símbolo olímpico?",
    answers: ["4", "5", "6", "7"],
    correct: 1
  },
  {
    category: "sports",
    question: "¿En qué deporte se utiliza un aro y un balón naranja?",
    answers: ["Fútbol", "Baloncesto", "Voleibol", "Rugby"],
    correct: 1
  },
  {
    category: "sports",
    question: "¿Qué país ganó el Mundial de fútbol de 2022?",
    answers: ["Francia", "Brasil", "Argentina", "España"],
    correct: 2
  },
  {
    category: "sports",
    question: "¿Qué deporte practica un piloto en una pista con monoplazas?",
    answers: ["Fórmula 1", "Boxeo", "Ciclismo", "Natación"],
    correct: 0
  },
  {
    category: "sports",
    question: "¿En qué deporte se consigue un 'home run'?",
    answers: ["Béisbol", "Tenis", "Golf", "Hockey"],
    correct: 0
  },

  // =========================
  // TECNOLOGÍA
  // =========================

  {
    category: "technology",
    question: "¿Qué significa HTML?",
    answers: [
      "HyperText Markup Language",
      "High Technology Modern Language",
      "Home Tool Markup Language",
      "Hyperlink Text Machine Language"
    ],
    correct: 0
  },
  {
    category: "technology",
    question: "¿Qué dispositivo se utiliza principalmente para mover el cursor en un ordenador?",
    answers: ["Monitor", "Ratón", "Impresora", "Altavoz"],
    correct: 1
  },
  {
    category: "technology",
    question: "¿Qué empresa desarrolla Android?",
    answers: ["Apple", "Google", "Microsoft", "Sony"],
    correct: 1
  },
  {
    category: "technology",
    question: "¿Qué significa Wi-Fi?",
    answers: [
      "Una tecnología de conexión inalámbrica",
      "Un tipo de batería",
      "Un sistema operativo",
      "Un lenguaje de programación"
    ],
    correct: 0
  },
  {
    category: "technology",
    question: "¿Cuál de estos es un sistema operativo?",
    answers: ["Windows", "Chrome", "Google", "YouTube"],
    correct: 0
  },
  {
    category: "technology",
    question: "¿Qué componente se considera el 'cerebro' del ordenador?",
    answers: ["CPU", "Monitor", "Teclado", "Disco"],
    correct: 0
  },
  {
    category: "technology",
    question: "¿Qué lenguaje se utiliza principalmente para dar estilo a una página web?",
    answers: ["HTML", "CSS", "SQL", "Python"],
    correct: 1
  },
  {
    category: "technology",
    question: "¿Qué lenguaje se utiliza para añadir interactividad a muchas páginas web?",
    answers: ["JavaScript", "HTML", "CSS", "XML"],
    correct: 0
  },

  // =========================
  // GEOGRAFÍA
  // =========================

  {
    category: "geography",
    question: "¿Cuál es el país más grande del mundo por superficie?",
    answers: ["China", "Canadá", "Rusia", "Estados Unidos"],
    correct: 2
  },
  {
    category: "geography",
    question: "¿Cuál es la capital de España?",
    answers: ["Barcelona", "Sevilla", "Madrid", "Valencia"],
    correct: 2
  },
  {
    category: "geography",
    question: "¿En qué continente está Egipto?",
    answers: ["Asia", "Europa", "África", "Oceanía"],
    correct: 2
  },
  {
    category: "geography",
    question: "¿Cuál es el río más largo de Sudamérica?",
    answers: ["Amazonas", "Nilo", "Danubio", "Mississippi"],
    correct: 0
  },
  {
    category: "geography",
    question: "¿Cuál es la capital de Japón?",
    answers: ["Kioto", "Osaka", "Tokio", "Hiroshima"],
    correct: 2
  },
  {
    category: "geography",
    question: "¿Qué país tiene forma aproximada de bota?",
    answers: ["Italia", "Grecia", "Portugal", "Chile"],
    correct: 0
  },
  {
    category: "geography",
    question: "¿Cuál es el continente más grande?",
    answers: ["África", "Europa", "Asia", "América"],
    correct: 2
  },
  {
    category: "geography",
    question: "¿Cuál es la capital de Argentina?",
    answers: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
    correct: 0
  },

  // =========================
  // ENTRETENIMIENTO
  // =========================

  {
    category: "entertainment",
    question: "¿Cómo se llama el mago protagonista de una famosa saga creada por J. K. Rowling?",
    answers: ["Harry Potter", "Frodo", "Peter Pan", "Percy Jackson"],
    correct: 0
  },
  {
    category: "entertainment",
    question: "¿Cuál de estos personajes pertenece a Disney?",
    answers: ["Mickey Mouse", "Naruto", "Goku", "Pikachu"],
    correct: 0
  },
  {
    category: "entertainment",
    question: "¿Cómo se llama el vaquero de Toy Story?",
    answers: ["Buzz", "Woody", "Andy", "Rex"],
    correct: 1
  },
  {
    category: "entertainment",
    question: "¿Qué superhéroe utiliza un escudo con una estrella?",
    answers: ["Iron Man", "Thor", "Capitán América", "Hulk"],
    correct: 2
  },
  {
    category: "entertainment",
    question: "¿Cómo se llama el reino de Elsa y Anna en Frozen?",
    answers: ["Arendelle", "Narnia", "Wakanda", "Genovia"],
    correct: 0
  },
  {
    category: "entertainment",
    question: "¿Cuál de estos personajes es amarillo y vive en Fondo de Bikini?",
    answers: ["Shrek", "Bob Esponja", "Garfield", "Scooby-Doo"],
    correct: 1
  },
  {
    category: "entertainment",
    question: "¿Qué personaje de Pokémon es conocido por ser amarillo?",
    answers: ["Charmander", "Squirtle", "Pikachu", "Bulbasaur"],
    correct: 2
  },
  {
    category: "entertainment",
    question: "¿Qué superhéroe es conocido como el Hombre Araña?",
    answers: ["Superman", "Batman", "Spider-Man", "Flash"],
    correct: 2
  }
];

// Disponible para el resto del juego
window.questionBank = questions;
