function setup() {
  createCanvas(1400, 800);
}

function draw() {
  background(220);
  fill(0);
  rect(475,200,400,400,10);
  Drawchecker(500,225);
  Drawchecker(625,225);
  Drawchecker(750,225);
  Drawchecker(500,350);
}
function Drawchecker(Xpos,Ypos) {
  fill(255);
  rect(Xpos, Ypos, 100, 100, 10);
  //Xpos = 500 Ypos = 225
}

