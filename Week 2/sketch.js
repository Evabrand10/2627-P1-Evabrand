
let Cloudx1 = 200;
let Cloudx2 = 600;
let Cloudx3 = 400;
let CLoudspeed1 = +2.3
let Cloudspeed2 = +2.1
let Cloudspeed3 = +2.5


function setup() {
  createCanvas(800, 600);
} 

function draw() {
 background(53, 182, 246);
  drawWolk(Cloudx1, 145);
  drawWolk(Cloudx2, 100); 
  drawWolk(Cloudx3,125);
  Cloudx1 = Cloudx1 + CLoudspeed1
  Cloudx2 = Cloudx2 + Cloudspeed2
  Cloudx3 = Cloudx3 + Cloudspeed3
  if (Cloudx1 >= 850){
    Cloudx1 = -50;
    
  }
if (Cloudx2 >= 850){
    Cloudx2 = -50;
    
  }
  if (Cloudx3 >= 850){
    Cloudx3 = -50;
    
  }
   
  //wolken
  
  fill ("yellow")
  circle (200,100,50);

}
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

