

let quizslide = 0
let startButton;
let quizquestion = "scooter / beun quiz!"
let questionx = 245
let questionsize = 46
let questions = []
let currentQuestion = 0
let awnserButton1;
let awnserButton2;
let awnserButton3;
let awnserButton4;
let startispressed = 0
function setup() {

  questions.push({
    Question: "wat moet je doen als je net een 2 tact hebt getankt",
    Answers: ["rustig rijden", "olie in de tank gooien", "even kicken zonder te starten", "motor koud laten"],
    correctAnswer: 0
  },
    {
      Question: "Hoe heet deze scooter",
      Answers: ["zip", "runner", "aerox", "mio"],
      correctAnswer: 0
    },
    {
      Question: "hoe heet deze uitlaat",
      Answers: ["yasuni R", "yasuni c16", "yasuni Z", "yasuni c100"],
      correctAnswer: 0
    }
  )

  questions[0].Question;
  createCanvas(800, 600);

  startButton = createButton("Start");
  startButton.position(345, 300)
  startButton.size(100, 60);
  startButton.mousePressed(startClick)
  startButton.style("font-size", "40px")
  frameRate(5);
}

function draw() {
  background(220);
  textSize(questionsize);
  text(quizquestion, questionx, 200)
  if (quizslide == 1) {
    quizquestion = questions[currentQuestion].Question;
    questionx = 200
    questionsize = 20

  }
  awnserButton1 = createButton(questions[currentQuestion].Answers[0]);
  awnserButton1.position(125, 300);
  awnserButton1.size(100, 60);
  awnserButton1.mousePressed(clickA);
 
  //awnserbutton left top
  awnserButton2 = createButton(questions[currentQuestion].Answers[1]);
  awnserButton2.position(525, 300);
  awnserButton2.size(100, 60);
  awnserButton2.mousePressed(clickB);
  
  //awnserbutton right top
  awnserButton3 = createButton(questions[currentQuestion].Answers[2]);
  awnserButton3.position(125, 500);
  awnserButton3.size(100, 60);
  awnserButton3.mousePressed(clickC);
 
  //awnserbutton left bottom
  awnserButton4 = createButton(questions[currentQuestion].Answers[3]);
  awnserButton4.position(525, 500);
  awnserButton4.size(100, 60);
  awnserButton4.mousePressed(clickD);
  

}

function clickA() {
  if (quizslide == 0)
    quizslide += 1;
  else {
    currentQuestion += 1;
  }

}
function clickB() {
  if (quizslide == 0)
    quizslide += 1;
  else {
    currentQuestion += 1;
  }
}
function clickC() {
  if (quizslide == 0)
    quizslide += 1;
  else {
    currentQuestion += 1;
  }

}
function clickD() {

  if (quizslide == 0)
    quizslide += 1;
  else {
    currentQuestion += 1;
  }
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
}




