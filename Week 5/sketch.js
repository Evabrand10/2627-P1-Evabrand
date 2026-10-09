let quizslide = 0
let startButton;
let quizquestion = "scooter / beun quiz!"
let questionx = 245
let questionsize = 46
let questions = [
  {
    Question: "wat moet je doen als je net een 2 tact hebt getankt",
    Answers: ["rustig rijden", "olie in de tank gooien", "even kicken zonder te starten", "motor koud laten"],
    correctAnswer: 1,
    imagePath: "",
    loadedImage: null,
  },
  {
    Question: "Hoe heet deze scooter",
    Answers: ["zip", "runner", "aerox", "mio"],
    correctAnswer: 2,
    imagePath: "Aerox.png",
    loadedImage: null
  },
  {
    Question: "hoe heet deze uitlaat",
    Answers: ["yasuni R", "yasuni c16", "yasuni Z", "yasuni c100"],
    correctAnswer: 0,
    imagePath: "Yasuni.png",
    loadedImage: null
  },
  {
    Question: "wat is een ander woord voor motor agent",
    Answers: ["twee wiel debiel", "motor muis", "wouter", "onze grote vriend"],
    correctAnswer: 1,
    imagePath: "",
    loadedImage: null
  },
  {
    Question: "welk scooterblox is het meest geproduceert wereld wijd",
    Answers: ["GY6", "Honda Super Cub ", "Hi-Per2", "AM6"],
    correctAnswer: 1,
    imagePath: "",
    loadedImage: null
  },
  {
    Question: "wat is de max snelheid wat je op de rollerbank gemeten mag worden brom plaatje",
    Answers: ["34", "49", "45", "54"],
    correctAnswer: 3,
    imagePath: "",
    loadedImage: null
  },
  {
    Question: "Wat is GEEN scooter blok",
    Answers: ["GY6", "Honda Super Cub ", "Hi-Per2", "AM6"],
    correctAnswer: 3,
    imagePath: "",
    loadedImage: null
  },
  {
    Question: "hoe heet dit onderdeel",
    Answers: ["cilinder", "bobine", "carberateur", "krukas"],
    correctAnswer: 2,
    imagePath: "onderdeel.png",
    loadedImage: null
  },
  {
    Question: "welke kleur is het logo van malossi",
    Answers: ["blau", "geel", "roze", "rood"],
    correctAnswer: 3,
    imagePath: "",
    loadedImage: null
  },
  {
    Question: "hoe heet dit onderdeel",
    Answers: ["cilinder", "multivar", "bobine", "Vsnaar"],
    correctAnswer: 1,
    imagePath: "onderdeel2.png",
    loadedImage: null
  },
  {
    Question: "",
    Answers: ["cilinder", "multivar", "bobine", "Vsnaar"],
    correctAnswer: 1,
    imagePath: "onderdeel2.png",
    loadedImage: null
  },

]
let currentQuestion = 0
let awnserButton1;
let awnserButton2;
let awnserButton3;
let awnserButton4;
let answerButtons = [];
let imageyasuni;
let startispressed = 0
let awnsertext = []
let awnsercolor = "white";
let loadimage = 0
let questionTimer = 0;
let points = 0



function setup() {
  awnserButton1 = createButton(questions[currentQuestion].Answers[0]);
  awnserButton1.position(125, 300);
  awnserButton1.size(100, 60);
  awnserButton1.mousePressed(clickA);
  awnserButton1.style("background-color", awnsercolor)
  awnserButton1.hide();
  answerButtons.push(awnserButton1);

  //awnserbutton left top
  awnserButton2 = createButton(questions[currentQuestion].Answers[1]);
  awnserButton2.position(525, 300);
  awnserButton2.size(100, 60);
  awnserButton2.mousePressed(clickB);
  awnserButton2.style("background-color", awnsercolor)
  awnserButton2.hide();
  answerButtons.push(awnserButton2);

  //awnserbutton right top
  awnserButton3 = createButton(questions[currentQuestion].Answers[2]);
  awnserButton3.position(125, 500);
  awnserButton3.size(100, 60);
  awnserButton3.mousePressed(clickC);
  awnserButton3.style("background-color", awnsercolor)
  awnserButton3.hide();
  answerButtons.push(awnserButton3);

  //awnserbutton left bottom
  awnserButton4 = createButton(questions[currentQuestion].Answers[3]);
  awnserButton4.position(525, 500);
  awnserButton4.size(100, 60);
  awnserButton4.mousePressed(clickD);
  awnserButton4.style("background-color", awnsercolor)
  awnserButton4.hide();
  answerButtons.push(awnserButton4);

  questions[0].Question;
  createCanvas(800, 600);

  startButton = createButton("Start");
  startButton.position(345, 300)
  startButton.size(100, 60);
  startButton.mousePressed(startClick)
  startButton.style("font-size", "40px")

}

function draw() {
  background(220);
  textSize(questionsize);
  text(quizquestion, questionx, 200)
  text(points,100,100)

  // Pak de image van de vraag en ALS ie bestaat, laat zien op het scherm
  let currentImage = questions[currentQuestion].imagePath;
  if (currentImage != "") {
    image(questions[currentQuestion].loadedImage, 300, 275, 200, 200);
  }

  awnserButton1.html(questions[currentQuestion].Answers[0]);
  awnserButton2.html(questions[currentQuestion].Answers[1]);
  awnserButton3.html(questions[currentQuestion].Answers[2]);
  awnserButton4.html(questions[currentQuestion].Answers[3]);
  if (quizslide == 1) {
    quizquestion = questions[currentQuestion].Question;
    questionx = 200
    questionsize = 20
  }
  if (loadimage == 2) {
    yasunix = 345
  }
  else {
    yasunix = 5000
  }
  if (questionTimer > 0) {
    questionTimer--;

    if (questionTimer <= 0) {
      currentQuestion += 1;
      resetAllButtonColors();

    }
  }

}

function resetAllButtonColors() {
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].style("background-color", "white");

  }
}

function clickA() {
  if (questionTimer > 0) {
    return;
  }


  loadimage += 1
  // Pak de vraag data object (waar dus de vraag, antwoorden en juist antwoord in zitten)
  let currentQuestionObject = questions[currentQuestion];

  for (let i = 0; i < answerButtons.length; i++) {

    answerButtons[i].style("background-color", "white");

  }

  // Pak de button die hoort bij het juiste antwoord, en verander de kleur
  answerButtons[currentQuestionObject.correctAnswer].style("background-color", "green");

  if (quizslide == 0) {
    quizslide += 1;
  }

  questionTimer = 100;
  if (correctAnswer == 0) {
   points = points + 1

  }

}
function clickB() {
  if (questionTimer > 0) {
    return;
  }

  if (quizslide == 0)
    quizslide += 1;

  let currentQuestionObject = questions[currentQuestion];

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].style("background-color", "white");

  }

  // Pak de button die hoort bij het juiste antwoord, en verander de kleur
  answerButtons[currentQuestionObject.correctAnswer].style("background-color", "green");
  if (quizslide == 0) {
    quizslide += 1;
  }

  questionTimer = 100;
  if (correctAnswer == 1) {
     points = points + 1
  }
 
}
function clickC() {
  if (questionTimer > 0) {
    return;
  }


  if (quizslide == 0)
    quizslide += 1;

  let currentQuestionObject = questions[currentQuestion];

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].style("background-color", "white");

  }

  // Pak de button die hoort bij het juiste antwoord, en verander de kleur
  answerButtons[currentQuestionObject.correctAnswer].style("background-color", "green");
  if (quizslide == 0) {
    quizslide += 1;
  }

  questionTimer = 100;
  if (correctAnswer == 2) {
    points = points + 1
  }
  console.log(points);
}
function clickD() {
  if (questionTimer > 0) {
    return;
  }

  if (quizslide == 0)
    quizslide += 1;

  let currentQuestionObject = questions[currentQuestion];

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].style("background-color", "white");

  }

  // Pak de button die hoort bij het juiste antwoord, en verander de kleur
  answerButtons[currentQuestionObject.correctAnswer].style("background-color", "green");
  if (quizslide == 0) {
    quizslide += 1;
  }

  questionTimer = 100;
  if (correctAnswer == 3) {
    points = points + 1
  }
  console.log(points);
}
function startClick() {
  //startButton.hide();

  if (quizslide == 0)
    quizslide += 1;
  else {
    currentQuestion += 1;
  }


  startispressed += 1


  startButton.hide();
  awnserButton1.show();
  awnserButton2.show();
  awnserButton3.show();
  awnserButton4.show();
}
function preload() {

  // Loop door alle questions en laad de images in (als die er is!)
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    let imagePath = question.imagePath;
    if (imagePath != "") {

      question.loadedImage = loadImage(imagePath);
    }
  }
}



