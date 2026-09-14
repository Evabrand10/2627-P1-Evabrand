
let Cloudx1 = 200;
let Cloudx2 = 600;
let Cloudx3 = 400;
let CLoudspeed1 = -2.3
let Cloudspeed2 = -2.1
let Cloudspeed3 = -2.5



function setup() {
  createCanvas(800, 600);
} 

function draw() {
 
 
  
  background(53, 182, 246);
  
  fill("yellow");
  circle(200,100,50);
  fill("gray");
  triangle(350,500,450,150,650,500);
  drawWolk(Cloudx1, 145);
  drawWolk(Cloudx2, 100); 
  drawWolk(Cloudx3,125);
  Cloudx1 = Cloudx1 + CLoudspeed1
  Cloudx2 = Cloudx2 + Cloudspeed2
  Cloudx3 = Cloudx3 + Cloudspeed3
  if (Cloudx1 <= -50){
    Cloudx1 = 850;
    
  }
if (Cloudx2 <= -50){
    Cloudx2 = 850;
    
  }
  if (Cloudx3 <= -50){
    Cloudx3 = 850;
    
  }
  //wolken
  fill(70);
  rect(0,500,800,100);
  
  fill(235);
  rect(75,545,75,10,10);
  rect(225,545,75,10,10);
  rect(375,545,75,10,10);
  rect(525,545,75,10,10);
  rect(675,545,75,10,10);
 

  
  fill(70);
  triangle(200,500,350,250,450,500);
  fill(110)
  triangle(550,500,650,350,950,500);
  drawStoplight(600,340,575,315); 
  
  
 

}
function drawStoplight(xPos, yPos, xposrect ,yposrect) {
  fill(100);
  rect(xposrect, yposrect, 50, 135);
  rect(xposrect+10, yposrect+135, 30, 50);
  stroke(0);
  strokeWeight(1);
  fill(0,55,0);
  circle(xPos, yPos+90, 35, 35);
  fill(80, 50, 0);
  circle(xPos, yPos+45, 35, 35);
  fill(80,0,0);
  circle(xPos, yPos, 35, 35);
}
//stopligt
function drawWolk(xPos , yPos) {
  fill(220);
  noStroke();
  circle(xPos, yPos, 45);
  circle(xPos + 20, yPos - 5, 55);
  circle(xPos + 50, yPos, 45);
  fill(255);
  circle(xPos, yPos + 5, 45);
  circle(xPos + 20, yPos, 55);
  circle(xPos + 50, yPos + 5, 45);
  //wolk
}

