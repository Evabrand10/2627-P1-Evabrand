

let quizslide = 0
let startButton;
let quizquestion = "scooter / beun quiz!"
let questionx = 245
let questionsize = 46
let questions = []
let currentQuestion = 0
let awnserButton;
let awnserButton2;
function setup() {

  questions.push({
    Question: "wat moet je doen als je net een 2 tact hebt getankt",
    Answers: ["antwoord 1", "antwoord 2", "antwoord 3", "antwoord 4"],
    correctAnswer: 0
  },
    {
      Question: "Hoe heet deze scooter",
      Answers: ["antwoord 1", "antwoord 2", "antwoord 3", "antwoord 4"],
      correctAnswer: 0
    },
    {
      Question: "hoe heet deze uitlaat",
      Answers: ["yasuni R", "yasuni c16", "yasuni Z", "yasuni c100"],
      correctAnswer: 0
    })

  questions[0].Question;
  createCanvas(800, 600);
  for (let i = 0; i < 4; i += 2) {
    awnserButton = createButton(questions[currentQuestion].Answers[i]);
    awnserButton.position(125 + (200 * i), 300);
    awnserButton.size(100, 60)
    awnserButton2 = createButton(questions[currentQuestion].Answers[i]);
    awnserButton2.position(125 + (200 * i), 500);
    awnserButton2.size(100, 60)
  }

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
  if (quizslide == 1) {
    quizquestion = questions[currentQuestion].Question;
    questionx = 200
    questionsize = 20
    if (quizslide == 2) {
      quizquestion = questions[currentQuestion].Question;
      questionx = 200
      questionsize = 20
    }
  }
}
function clickA(){

}
function clickB(){

}
function clickC(){

}
function clickD(){

}
function startClick() {
  //startButton.hide();

  if (quizslide == 0)
    quizslide += 1;
  else {
    currentQuestion += 1;
  }
}




