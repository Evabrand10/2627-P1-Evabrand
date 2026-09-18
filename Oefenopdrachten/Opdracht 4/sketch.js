
let light = 0;
let teller = 0;
let hooglaag = 0;
let leftright = 0;

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
  text("2.klik spatie getal gaat naar nul klik dan een andere knop om de teller weer te laten tellen", 40, 150);
  text("4.gebruik WASD om de 8Bal te bewegen", 500, 270);
  text(teller, 40, 170);
  if (teller >= 0) {
    teller = teller + 1
  }
  if (teller >= 500) {
    teller = 0
  }
  if (keyCode === 32) {
    teller = 0
  }







  if (keyIsPressed === true) {
    console.log(keyCode);

    if (keyCode === 66) { //b
      stroke(0);
      fill(255);
      rect(40, 40, 60, 60);

    }

    // checken voor WASD of pijltjes
    if (keyCode == LEFT_ARROW || keyCode == 65) {
      leftright -= 1

    }
    if (keyCode == RIGHT_ARROW || keyCode == 68) {
      leftright += 1
    }
    if (keyCode == UP_ARROW || keyCode == 87) {
      hooglaag -= 1
    }
    if (keyCode == DOWN_ARROW || keyCode == 83) {
      hooglaag += 1
    }


  }


  noStroke();
  drawStoplight(40, 300, 15, 278);

  Draw8Ball(600 + leftright, 350 + hooglaag);
}

function Draw8Ball(xpos, ypos) {
  fill(0);
  circle(xpos, ypos, 100);
  fill(255);
  circle(xpos, ypos, 60);
  fill(0);
  text("8", xpos - 4, ypos + 4);
  //ypos = 500 xpos = 400

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

