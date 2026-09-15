
let Cloudx1 = 200;
let Cloudx2 = 600;
let Cloudx3 = 400;
let CLoudspeed1 = -2.3
let Cloudspeed2 = -2.1
let Cloudspeed3 = -2.5
let sunspeed = 1.3
let sunx = 200;
let light = 0;
let carx = 170;
let carspeed = 2.5;  
let carcolorR = 81
let carcolorG = 95
let carcolorB = 80
let carx1 = 170;
let carspeed1 = 2.5;  
let carcolorR1 = 255
let carcolorG1 = 164
let carcolorB1 = 40
let carx2 = 100;
let carspeed2 = 3;  
let carcolorR2= 80
let carcolorG2= 153
let carcolorB2= 123


function keyPressed(){
  if (keyCode === ENTER) {
   light = light + 1;
  }
 if (light >= 3){
  light = 0
 }

 
  
}
function setup() {
  createCanvas(800, 600);
} 

function draw() {
 
 
  
  background(53, 182, 246);
  stroke("orange");
  strokeWeight(3);
  fill("yellow");
  circle(sunx,100,75);
  sunx = sunx + sunspeed;
  
 if (sunx >= 850){
  sunx = -50;
 }
 

 noStroke();
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
  
  Drawtree(100,400,75,400);
  Drawtree(400,400,375,400);
  Drawtree(200,400,175,400);
  Drawtree(300,400,275,400);
  
  fill("darkgreen");
  rect(0,500,800,20);
  
   DrawCar(carx,425);
  carx = carx + carspeed
  if(carx >= 1400) {
    carx = -100;
  }
   if (carx == 475 && light == 0){
    carspeed = 0;
   }
   
    if (carx < 470 && light == 0){
      carspeed = 1.25;
    }
   if (light == 1 || carx >= 500){
     carspeed = 2.5;
   }
   if (light == 2 && carx <= 475){
    carspeed = 1.25;
   }
   if (carx >= 867){
    carcolorR = 255;
    carcolorG = 255;
    carcolorB = 255;
   }
    DrawCar2(carx2 ,425);
   
 carx2 = carx2 +carspeed2
   if (carx2 >= 870){
    carx2 = -70;
   } 
  if(carx2 == 473 && light == 0){
    carspeed2 = 0;
    }  
    if (carx2 < 465 && light == 0){
      carspeed = 1.5;
    }
  if(light == 1|| carx2 >= 500){
    carspeed2 = 3;
  }
  if (light == 2 && carx2 <= 470) {
    carspeed2 = 1.5;
  }
  if(carx2 >= 868){
    carcolorR2 = random(0,255);
    carcolorG2 = random(0,255);
    carcolorB2 = random(0,255);
  }

   DrawCar1(carx1 ,475);{
   carx1 = carx1 +carspeed1
   }
   if (carx1 >= 870){
    carx1 = -70;
   }
   if (carx1 < 470 && light == 0 ){
    carspeed1 = 1.25;
   }
  if(carx1 == 475 && light == 0){
    carspeed1 = 0;
    }  
  if(light == 1|| carx1 >= 500){
    carspeed1 = 2.5;
  }
  if (light == 2 && carx1 <= 472) {
    carspeed1 = 1.25;
  }
  if(carx1 >= 868){
    carcolorR1 = random(0,255);
    carcolorG1 = random(0,255);
    carcolorB1 = random(0,255);
  }
  if (carx >= carx2 - 160 && carx2 >= carx){
    carx = carx2 - 160;
  }
  if (carx2 >= carx - 160 && carx >= carx2){
    carx2 = carx - 160;
  }
     
     
  Drawtree(500,500,475,500);
 
}
function DrawCar(Xpos, Ypos) {
  fill("lightblue");
  rect(Xpos, Ypos, 50, 60, 10);
  fill(carcolorR,carcolorG,carcolorB);
  rect(Xpos-70, Ypos+44, 150, 50, 10);
  rect(Xpos-70, Ypos+1, 90, 70, 10);
  fill(0);
  circle(Xpos-44, Ypos+99, 50);
  circle(Xpos+30, Ypos+99, 50);
}
  function DrawCar2(Xpos, Ypos) {
  fill("lightblue");
  rect(Xpos, Ypos, 50, 60, 10);
  fill(carcolorR2,carcolorG2,carcolorB2);
  rect(Xpos-70, Ypos+44, 150, 50, 10);
  rect(Xpos-70, Ypos+1, 90, 70, 10);
  fill(0);
  circle(Xpos-44, Ypos+99, 50);
  circle(Xpos+30, Ypos+99, 50);
}//Xpos=170 Ypos= 451
function DrawCar1(Xpos, Ypos) {
  fill("lightblue");
  rect(Xpos, Ypos, 50, 60, 10);
  fill(carcolorR1,carcolorG1,carcolorB1);
  rect(Xpos-70, Ypos+44, 150, 50, 10);
  rect(Xpos-70, Ypos+1, 90, 70, 10);
  fill(0);
  circle(Xpos-44, Ypos+99, 50);
  circle(Xpos+30, Ypos+99, 50);
}

function Drawtree(xPosleaf,yPosleaf,xPoswood,yPoswood) {
  let leafmovementleftright = xPosleaf + Math.sin(frameCount * 0.04) * 3;

  let leafmovementrightleft = xPosleaf + Math.sin(frameCount * -0.04) * 3;
 
  noStroke();
  fill(150, 75, 0);
  rect(xPoswood, yPoswood, 40, 110);
  fill("green");
  circle(leafmovementleftright , yPosleaf, 75);
  fill("darkgreen");
  circle(leafmovementrightleft - 10, yPosleaf, 75);
  
}

function drawStoplight(xPos, yPos, xposrect ,yposrect) {
  fill(100);
  rect(xposrect, yposrect, 50, 135);
  rect(xposrect+10, yposrect+135, 30, 50);
  stroke(0);
  strokeWeight(1);

  // Stoplight GROOEEEENNN
  if (light == 1){
    fill(0, 255, 0);
  }
  else{
    fill(0,55,0);
  }
  //stoplight oranjuhhh
  circle(xPos, yPos+90, 35, 35);
   if (light == 2){
    fill(255, 165, 0);
  }
  else{
   fill(120, 50, 0);  }
   //Stoplight ROOOODDDD
  circle(xPos, yPos+45, 35, 35);
    if (light == 0){
    fill(255, 0, 0);
  }
  else{
   fill(80, 0, 0);  }
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

