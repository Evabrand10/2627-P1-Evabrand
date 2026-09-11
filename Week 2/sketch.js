



function setup() {
  createCanvas(800, 600);
} 

function draw() {
 background(53, 182, 246);
  drawWolk(200, 145);
  drawWolk(600, 100);
  drawWolk(400,125);
  
  fill ("yellow")
  circle (200 + 1,100,50);

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
}

