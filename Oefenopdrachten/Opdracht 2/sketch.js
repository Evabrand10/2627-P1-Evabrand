let x = 100;
let greeting = "hello world";
let getal1 = 10;
let getal2 = 20







function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 fill (0);
 textSize(26);
 text(x, 20, 20);
 text(greeting, 20, 60);
 text("optellen:" + (getal1 + getal2), 20 ,100);
 text("aftrekken:" + (getal2 - getal1), 20 ,140);
 text("vermenigvuldigen:" + (getal1 * getal2),20 ,180);
 text("delen:" + (getal2 / getal1),20 ,220);
 textStyle(BOLD); 
}
