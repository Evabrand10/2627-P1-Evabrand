let startx = 345
let rectstartcords = [345, 260, 100, 50]
let quizslide = 0


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  let startButton = createButton("Start");
  startButton.position(startx, 300)
  startButton.size(100, 60);
  startButton.mousePressed(click)
  startButton.style("font-size", "40px")
  



  if (quizslide == 1) {
    startx = 5000
  }

}

function click() {
  quizslide += 1
  startButton.hide();
}




