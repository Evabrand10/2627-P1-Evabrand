let playersturnR = 0
let playersturnG = 100
let playersturnB = 255
let rectW = 100
let rectH = 100
let rectx1 = 500
let rectx2 = 625
let rectx3 = 750
let rectY1 = 225
let rectY2 = 350
let rectY3 = 475
let rectx4 = 500
let rectx5 = 625
let rectx6 = 750
let rectY4 = 225
let rectY5 = 350
let rectY6 = 475
let colorchecker1 = 255
let colorchecker2 = 255
let colorchecker3 = 255
let colorchecker4 = 255
let colorchecker5 = 255
let colorchecker6 = 255

function setup() {
  createCanvas(1400, 800);
}

function draw() {
  background(playersturnR, playersturnG, playersturnB);
  fill(0);
  rect(475, 200, 400, 400, 10);

  if (mouseX > rectx1 && mouseX < rectx1 + rectW &&
    mouseY > rectY1 && mouseY < rectY1 + rectH
  ) {
    colorchecker1 = 255;

  }
  else if (mouseX > rectx2 && mouseX < rectx2 + rectW &&
    mouseY > rectY2 && mouseY < rectY2 + rectH
  ) {
    colorchecker2 = 255;
  }
  else if (mouseX > rectx3 && mouseX < rectx3 + rectW &&
    mouseY > rectY3 && mouseY < rectY3 + rectH
  ) {
    colorchecker3 = 255;

  }
  else if (mouseX > rectx4 && mouseX < rectx4 + rectW &&
    mouseY > rectY4 && mouseY < rectY4 + rectH
  ) {
    colorchecker2 = 255;
  }
  else if (mouseX > rectx5 && mouseX < rectx5 + rectW &&
    mouseY > rectY5 && mouseY < rectY5 + rectH
  ) {
    colorchecker3 = 255;
  }
  else {
    colorchecker1 = 220;
    colorchecker2 = 220;
    colorchecker3 = 220;
  }

  fill(colorchecker1);
  rect(rectx1, rectY1, rectH, rectW, 10);
  fill(colorchecker1);
  rect(rectx2, rectY1, rectH, rectW, 10);
  fill(colorchecker1);
  rect(rectx3, rectY1, rectH, rectW, 10);
  fill(colorchecker2);
  rect(rectx1, rectY2, rectH, rectW, 10);
  fill(colorchecker2);
  rect(rectx2, rectY2, rectH, rectW, 10);
  fill(colorchecker2);
  rect(rectx3, rectY2, rectH, rectW, 10);
  fill(colorchecker3);
  rect(rectx1, rectY3, rectH, rectW, 10);
  fill(colorchecker3);
  rect(rectx2, rectY3, rectH, rectW, 10);
  fill(colorchecker3);
  rect(rectx3, rectY3, rectH, rectW, 10);



}

