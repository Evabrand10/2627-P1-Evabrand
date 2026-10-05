function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220)
  drawhouse(450,200,0, 128, 0);
  drawhouse(400,200,255, 105, 180);
  drawhouse(500,200,0, 105, 148);
  drawcircle(200,200,50);
  drawrectangle(200,250,50,50);
 
}
function drawrectangle(xpos,ypos,W,H) {
  rect(xpos, ypos, W, H);
}

function drawcircle(xpos,ypos,diameter) {
  circle(xpos, ypos, diameter);
}

function drawhouse(xpos,ypos,housecolorR,housecolorG,housecolorB) {

  fill(255);
  fill(housecolorR, housecolorG, housecolorB);
  rect(xpos, ypos, 50, 50);
  fill("brown");
  triangle(xpos, ypos, xpos+25, ypos-25, xpos+50, ypos);
  rect(xpos+30, ypos+30, 10, 20);
  fill("yellow");
  circle(xpos+32.5, ypos+37.5, 2, 2);
  fill("lightblue");
  circle(xpos+25, ypos-10, 10);
  rect(xpos+10, ypos+10, 10, 10);
  rect(xpos+30, ypos+10, 10, 10);
  rect(xpos+10, ypos+30, 15, 10);
  line(xpos+25, ypos-15, xpos+25, ypos-5);
  line(xpos+20, ypos-10, xpos+30, ypos-10);
}
//xpos = 400 ypos = 200 housecolorR = 255 housecolorG = 255 housecolorB = 255
