let playersturnR = 255
let playersturnG = 0
let playersturnB = 0
let rectW1 = 100
let rectW2 = 100
let rectW3 = 100
let rectW4 = 100
let rectW5 = 100
let rectW6 = 100
let rectW7 = 100
let rectW8 = 100
let rectW9 = 100
let rectH1 = 100
let rectH2 = 100
let rectH3 = 100
let rectH4 = 100
let rectH5 = 100
let rectH6 = 100
let rectH7 = 100
let rectH8 = 100
let rectH9 = 100
let rectx1 = 500
let rectY1 = 225
let rectx2 = 625
let rectY2 = 225
let rectx3 = 750
let rectY3 = 225
let rectx4 = 500
let rectY4 = 350
let rectx5 = 625
let rectY5 = 350
let rectx6 = 750
let rectY6 = 350
let rectx7 = 500
let rectY7 = 475
let rectx8 = 625
let rectY8 = 475
let rectx9 = 750
let rectY9 = 475
let colorchecker1 = 255
let colorchecker2 = 255
let colorchecker3 = 255
let colorchecker4 = 255
let colorchecker5 = 255
let colorchecker6 = 255
let colorchecker7 = 255
let colorchecker8 = 255
let colorchecker9 = 255
let playerturn = 0
let playercolor = [playersturnR, playersturnG, playersturnB];
function setup() {
  createCanvas(1400, 800);

}

function draw() {
  background(playercolor);
  fill(0);
  rect(475, 200, 400, 400, 10);
  if (playerturn == 0) {
   playercolor = [255,0,0]
  }

  else if (playerturn == 1) {
    playercolor = [0,100,255]
  }


  

  fill(colorchecker1);
  rect(rectx1, rectY1, rectW1, rectH1, 10);//left top
  fill(colorchecker2);
  rect(rectx2, rectY2, rectW2, rectH2, 10);//middle top
  fill(colorchecker3);
  rect(rectx3, rectY3, rectW3, rectH3, 10);// right top
  fill(colorchecker4);
  rect(rectx4, rectY4, rectW4, rectH4, 10);//left middle
  fill(colorchecker5);
  rect(rectx5, rectY5, rectW5, rectH5, 10);//middle middle
  fill(colorchecker6);
  rect(rectx6, rectY6, rectW6, rectH6, 10);//right middle
  fill(colorchecker7);
  rect(rectx7, rectY7, rectW7, rectH7, 10);//left bottom
  fill(colorchecker8);
  rect(rectx8, rectY8, rectW8, rectH8, 10);//middle bottom
  fill(colorchecker9);
  rect(rectx9, rectY9, rectW9, rectH9, 10);//right bottom



}

function mousePressed(){
  if(mouseButton == "left"){
    handleClick();
    playerturn = (playerturn + 1) 
    if (playerturn == 2){
      playerturn = 0
    }
   

      
  }
}

function handleClick(){
  if (mouseX > rectx1 && mouseX < rectx1 + rectW1 &&
    mouseY > rectY1 && mouseY < rectY1 + rectH1
  ) {
    colorchecker1 = playercolor;
    rectH1 = 105
    rectW1 = 105


  }
  

  else if (mouseX > rectx2 && mouseX < rectx2 + rectW2 &&
    mouseY > rectY2 && mouseY < rectY2 + rectH2
  ) {
    colorchecker2 = playercolor;
    rectH2 = 105
    rectW2 = 105
  }
  else if (mouseX > rectx3 && mouseX < rectx3 + rectW3 &&
    mouseY > rectY3 && mouseY < rectY3 + rectH3
  ) {
    colorchecker3 = playercolor;
    rectH3 = 105
    rectW3 = 105

  }
  else if (mouseX > rectx4 && mouseX < rectx4 + rectW4 &&
    mouseY > rectY4 && mouseY < rectY4 + rectH4
  ) {
    colorchecker4 = playercolor;
    rectH4 = 105
    rectW4 = 105
  }
  else if (mouseX > rectx5 && mouseX < rectx5 + rectW5 &&
    mouseY > rectY5 && mouseY < rectY5 + rectH5
  ) {
    colorchecker5 = playercolor;
    rectH5 = 105
    rectW5 = 105
  }
  else if (mouseX > rectx6 && mouseX < rectx6 + rectW6 &&
    mouseY > rectY6 && mouseY < rectY6 + rectH6
  ) {
    colorchecker6 = playercolor;
    rectH6 = 105
    rectW6 = 105
  }
  else if (mouseX > rectx7 && mouseX < rectx7 + rectW7 &&
    mouseY > rectY7 && mouseY < rectY7 + rectH7
  ) {
    colorchecker7 = playercolor;
    rectH7 = 105
    rectW7 = 105
  }
  else if (mouseX > rectx8 && mouseX < rectx8 + rectW8 &&
    mouseY > rectY8 && mouseY < rectY8 + rectH8
  ) {
    colorchecker8 = playercolor;
    rectH8 = 105
    rectW8 = 105
  }
  else if (mouseX > rectx9 && mouseX < rectx9 + rectW9 &&
    mouseY > rectY9 && mouseY < rectY9 + rectH9
  ) {
    colorchecker9 = playercolor;
    rectH9 = 105
    rectW9 = 105
  }
  else {
    colorchecker1 = 255;
    colorchecker2 = 255;
    colorchecker3 = 255;
    colorchecker4 = 255;
    colorchecker5 = 255;
    colorchecker6 = 255;
    colorchecker7 = 255;
    colorchecker8 = 255;
    colorchecker9 = 255
    rectH1 = 100
    rectW1 = 100
    rectH2 = 100
    rectW2 = 100
    rectH3 = 100
    rectW3 = 100
    rectH4 = 100
    rectW4 = 100
    rectH5 = 100
    rectW5 = 100
    rectH6 = 100
    rectW6 = 100
    rectH7 = 100
    rectW7 = 100
    rectH8 = 100
    rectW8 = 100
    rectH9 = 100
    rectW9 = 100



  }
}
