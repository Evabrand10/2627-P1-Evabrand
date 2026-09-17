let framerate1
let light = 0
let teller = 0
let framerate

function setup() {
  createCanvas(800, 600);
}
function keyPressed() {
  if (keyCode === ENTER) {
    light = light + 1
  }
  if (light == 3) {
    light = 0
  }
}
function draw() {
  background(220);

  noStroke();
  fill(0);
  textSize(12);
  text("1.houd b ingedrukt en dan verschijnt er een kubus", 20, 20);
  text("3.stoplight veranderdt van kleur met enter", 40, 270);
  text("2.klick spatie getal gaat naar nul",40 , 150);
  text(teller,40,170);
  
  
  if (keyIsPressed === true) {
    if (keyCode === 66) { //b
      stroke(0);
      fill(255);
      rect(40, 40, 60, 60);

    }
  }


  noStroke();
  drawStoplight(40, 300, 15, 278);
if(teller >= 0){
  framerate === true 
}
if(framerate){
  teller += 1
}
}

function drawStoplight(xPos, yPos, xposrect, yposrect) {
  fill(100);
  rect(xposrect, yposrect, 50, 135);
  rect(xposrect + 10, yposrect + 135, 30, 50);
  stroke(0);
  strokeWeight(1);

  // Stoplight GROOEEEENNN
  if (light == 1) {
    fill(0, 255, 0);
  }
  else {
    fill(0, 55, 0);
  }
  //stoplight oranjuhhh
  circle(xPos, yPos + 90, 35, 35);
  if (light == 2) {
    fill(255, 165, 0);
  }
  else {
    fill(120, 50, 0);
  }
  //Stoplight ROOOODDDD
  circle(xPos, yPos + 45, 35, 35);
  if (light == 0) {
    fill(255, 0, 0);
  }
  else {
    fill(80, 0, 0);
  }
  circle(xPos, yPos, 35, 35);
}

