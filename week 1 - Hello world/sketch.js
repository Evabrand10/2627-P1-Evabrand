
function setup() {
 createCanvas(1960, 800);

}
 

function draw() {
  background (367);
 
  fill ("pink");
 textSize(26);
 text('Eva Lamberts', 50, 50);
 textStyle(BOLD); 
 //makes my name appear on the canvas
 stroke(0)
 strokeWeight(1);
 fill(0, 0, 255);//shows the color blue 
  rect(50, 150, 200, 110);
  fill(255, 0, 0); //shows the color red
  rect(50, 110, 200, 50);
  fill(255);// shows the color white
  rect(50, 160, 200, 50); 
  //makes the dutch flag    
  stroke(0);
  strokeWeight(4);
  fill(0);
  rect (50,300, 300,300); 
  noStroke();
  fill(255);
  rect (50, 300, 37.5, 37.5);
  rect (125, 300, 37.5, 37.5);
  rect (200, 300, 37.5, 37.5);
  rect (275, 300, 37.5, 37.5);
  rect (87.5, 337.5, 37.5, 37.5);
  rect (162.5, 337.5, 37.5, 37.5);
  rect (237.5, 337.5, 37.5, 37.5);
  rect (312.5, 337.5, 37.5, 37.5);
  rect (50, 375, 37.5, 37.5);
  rect (125, 375, 37.5, 37.5);
  rect (200, 375, 37.5, 37.5);
  rect (275, 375, 37.5, 37.5);
  rect (87.5, 412.5, 37.5, 37.5);
  rect (162.5, 412.5, 37.5, 37.5);
  rect (237.5, 412.5, 37.5, 37.5);
  rect (312.5, 412.5, 37.5, 37.5);
  rect (50, 450, 37.5, 37.5);
  rect (125, 450, 37.5, 37.5);
  rect (200, 450, 37.5, 37.5);
  rect (275, 450, 37.5, 37.5);
  rect (87.5, 487.5, 37.5, 37.5);
  rect (162.5, 487.5, 37.5, 37.5);
  rect (237.5, 487.5, 37.5, 37.5);
  rect (312.5, 487.5, 37.5, 37.5);
  rect (50, 525, 37.5, 37.5);
  rect (125, 525, 37.5, 37.5);
  rect (200, 525, 37.5, 37.5);
  rect (275, 525, 37.5, 37.5);
  rect (87.5, 562.5, 37.5, 37.5);
  rect (162.5, 562.5, 37.5, 37.5);
  rect (237.5, 562.5, 37.5, 37.5);
  rect (312.5, 562.5, 37.5, 37.5);
 //chessboard
  stroke(0);
  strokeWeight(2);
  rect(300,100,60,60);
  triangle(300,100,330,50,360,100);
  //osso
  
  noStroke(); 
  fill(100);
  rect(500,90,50,135);
  rect(510,225,30,50);
  stroke(0);
  strokeWeight(1);
  fill("green");
  circle(525,205.5,35,35);
  fill("orange");
  circle(525,160.5,35,35);
  fill("red");
  circle(525,115.5,35,35);
  // Traffic lights
  strokeWeight(3);
  fill("white");
 rect(525,400,100,100,10);
 fill(0);
 circle(550,425,20,20,);
 circle(575,450,20,20,);
 circle(600,475,20,20,);
 //dobbelsteen
 noStroke();
 
 fill(255,215,174);
 rect(740,290,235,20);
 rect(740,310,235,20);
 rect(740,330,235,20);
 
 fill("red");
 rect(800,90,100,20);
 rect(780,110,175,20);
 rect(780,230,135,20);
 rect(760,250,195,20);
 rect(740,270,235,20);
 rect(780,290,155,20);
 
 fill(255,215,174);
 rect(780,130,120,20);
 rect(760,150,195,20);
 rect(760,170,215,20);
 rect(760,190,195,20);
 rect(800,210,135,20);
 
 fill("brown");
 rect(780,130,60,20);
 rect(760,150,20,20); rect(800,150,20,20);
 rect(760,170,20,20); rect(800,170,40,20); 
 rect(760,190,40 ,20);
 rect(760,370,60,20);  rect(900,370,55,20); 
 rect(740,390,80,20);  rect(900,390,75,20); 
 
 fill(0);
 rect(880,190,75,20);
 rect(900,170,20,20);
 rect(880,130,20,40);
 
 fill(0,0,255);
 rect(820,250,20,20);
 rect(820,230,20,20);
 rect(820,270,80,20);
 rect(880,250,20,20);
 rect(800,290,115,20);
 rect(800,310,115,20);
 rect(780,330,155,20); 
 rect(780,350,60,20); rect(880,350,55,20); 

 fill("yellow");
 rect(820,290,20,20);
 rect(880,290,20,20);
 
 image(img,900,350,100,100);
 

}


 