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
let rectx10 = 1000
let rectY10 = 650
let rectW10 = 50
let rectH10 = 50
let eigenaar1 = 0 // 0 = niemand, 1 = player 1, 2 = player 2
let eigenaar2 = 0
let eigenaar3 = 0
let eigenaar4 = 0
let eigenaar5 = 0
let eigenaar6 = 0
let eigenaar7 = 0
let eigenaar8 = 0
let eigenaar9 = 0
let playerturn = 1 // 0 = player 1 aan de beurt, 1 = player 2 is aan de beurt
let playercolor = [0, 100, 255]
let reset = 0
let win_top_left_right_blue = 5000
let win_middle_left_right_blue = 5000
let win_bottom_left_right_blue = 5000
let win_left_bottom_top_blue = 5000
let win_middle_bottom_top_blue = 5000
let win_right_bottom_top_blue = 5000
let win_diagonal_left_right_blue = 5000
let win_diagonal_right_left_blue = 5000
let win_top_left_right_red = 5000
let win_middle_left_right_red = 5000
let win_bottom_left_right_red = 5000
let win_left_bottom_top_red = 5000
let win_middle_bottom_top_red = 5000
let win_right_bottom_top_red = 5000
let win_diagonal_left_right_red1 = 5000
let win_diagonal_left_right_red2 = 5000
let win_diagonal_right_left_red1 = 5000
let win_diagonal_right_left_red2 = 5000


let start = 0
let press_start = "press start"



function setup() {
  createCanvas(1400, 700);

}

function draw() {
  background(playercolor);
  fill(0);
  noStroke();
  rect(475, 200, 400, 400, 10);
  if (playerturn == 2) {
    playercolor = [255, 0, 0]
  }

  else if (playerturn == 1) {
    playercolor = [0, 100, 255]
  }

  if (eigenaar1 == 2 && eigenaar2 == 2 && eigenaar3 == 2) {
    win_top_left_right_red = 275
  }
  else {
    win_top_left_right_red = 5000
  }
  if (eigenaar4 == 2 && eigenaar5 == 2 && eigenaar6 == 2) {
    win_middle_left_right_red = 400
  }
  else {
    win_middle_left_right_red = 5000
  }
  if (eigenaar7 == 2 && eigenaar8 == 2 && eigenaar9 == 2) {
    win_bottom_left_right_red = 525
  }
  else {
    win_bottom_left_right_red = 5000
  }
  if (eigenaar1 == 2 && eigenaar4 == 2 && eigenaar7 == 2) {
    win_left_bottom_top_red = 550
  }
  else {
    win_left_bottom_top_red = 5000
  }
  if (eigenaar2 == 2 && eigenaar5 == 2 && eigenaar8 == 2) {
    win_middle_bottom_top_red = 670
  }
  else {
    win_middle_bottom_top_red = 5000
  }
  if (eigenaar3 == 2 && eigenaar6 == 2 && eigenaar9 == 2) {
    win_right_bottom_top_red = 795
  }
  else {
    win_right_bottom_top_red = 5000
  }
  if (eigenaar1 == 2 && eigenaar5 == 2 && eigenaar9 == 2) {
    win_diagonal_left_right_red1 = 500
    win_diagonal_left_right_red2 = 850
  }
  else {
    win_diagonal_left_right_red1 = 5000
    win_diagonal_left_right_red2 = 5000
  }
  if (eigenaar3 == 2 && eigenaar5 == 2 && eigenaar7 == 2) {
    win_diagonal_left_right_red1 = 850
    win_diagonal_left_right_red2 = 500
  }
  else {
    win_diagonal_right_left_red1 = 5000
    win_diagonal_right_left_red2 = 5000
  }

  if (eigenaar1 == 0) {
    fill(255)
  }
  else if (eigenaar1 == 1) {
    fill("blue")
  }
  else if (eigenaar1 == 2) {
    fill("red");
  }
  rect(rectx1, rectY1, rectW1, rectH1, 10);//left top



  if (eigenaar2 == 0) {
    fill(255)
  }
  else if (eigenaar2 == 1) {
    fill("blue")
  }
  else if (eigenaar2 == 2) {
    fill("red");
  }
  rect(rectx2, rectY2, rectW2, rectH2, 10);//middle top
  if (eigenaar3 == 0) {
    fill(255)
  }
  else if (eigenaar3 == 1) {
    fill("blue")
  }
  else if (eigenaar3 == 2) {
    fill("red");
  }

  rect(rectx3, rectY3, rectW3, rectH3, 10);// right top
  if (eigenaar4 == 0) {
    fill(255)
  }
  else if (eigenaar4 == 1) {
    fill("blue")
  }
  else if (eigenaar4 == 2) {
    fill("red");
  }
  rect(rectx4, rectY4, rectW4, rectH4, 10);//left middle
  if (eigenaar5 == 0) {
    fill(255)
  }
  else if (eigenaar5 == 1) {
    fill("blue")
  }
  else if (eigenaar5 == 2) {
    fill("red");
  }
  rect(rectx5, rectY5, rectW5, rectH5, 10);//middle middle
  if (eigenaar6 == 0) {
    fill(255)
  }
  else if (eigenaar6 == 1) {
    fill("blue")
  }
  else if (eigenaar6 == 2) {
    fill("red");
  }
  rect(rectx6, rectY6, rectW6, rectH6, 10);//right middle
  if (eigenaar7 == 0) {
    fill(255)
  }
  else if (eigenaar7 == 1) {
    fill("blue")
  }
  else if (eigenaar7 == 2) {
    fill("red")
  }
  rect(rectx7, rectY7, rectW7, rectH7, 10);//left bottom
  if (eigenaar8 == 0) {
    fill(255)
  }
  else if (eigenaar8 == 1) {
    fill("blue")
  }
  else if (eigenaar8 == 2) {
    fill("red");
  }
  rect(rectx8, rectY8, rectW8, rectH8, 10);//middle bottom
  if (eigenaar9 == 0) {
    fill(255)
  }
  else if (eigenaar9 == 1) {
    fill("blue")
  }
  else if (eigenaar9 == 2) {
    fill("red");
  }
  rect(rectx9, rectY9, rectW9, rectH9, 10);//right bottom
  fill("yellow");
  rect(rectx10, rectY10, rectW10, rectH10, 10);//reset button


  fill(0)
  textSize(26)
  text(press_start, 1000, 635)
  if (start == 0) {
    press_start = "press start"
  }
  else if (start >= 1) {
    press_start = "reset"
  }
  stroke(255);
  strokeWeight(10)
  line(400, win_top_left_right_red, 950, win_top_left_right_red);
  line(400, win_top_left_right_blue, 950, win_top_left_right_blue);
  line(400, win_middle_left_right_red, 950, win_middle_left_right_red);
  line(400, win_bottom_left_right_red, 950, win_bottom_left_right_red);
  line(win_left_bottom_top_red, 200, win_left_bottom_top_red, 600);
  line(win_middle_bottom_top_red, 200, win_middle_bottom_top_red, 600);
  line(win_right_bottom_top_red, 200, win_right_bottom_top_red, 600);
  line(win_diagonal_left_right_red1, 225, win_diagonal_left_right_red2, 575)
  line(win_diagonal_right_left_red1, 225, win_diagonal_right_left_red2, 575)
}




function mousePressed() {
  if (mouseButton == "left" && mouseX > rectx1 && mouseX < rectx1 + rectW1 &&
    mouseY > rectY1 && mouseY < rectY1 + rectH1 && eigenaar1 == 0 && start >= 1) {
    handleClick();
  }
  if (mouseButton == "left" && mouseX > rectx2 && mouseX < rectx2 + rectW2 &&
    mouseY > rectY2 && mouseY < rectY2 + rectH2 && eigenaar2 == 0 && start >= 1) {
    handleClick();

  }


  if (mouseButton == "left" && mouseX > rectx3 && mouseX < rectx3 + rectW3 &&
    mouseY > rectY3 && mouseY < rectY3 + rectH3 && eigenaar3 == 0 && start >= 1) {
    handleClick();

  }
  if (mouseButton == "left" && mouseX > rectx4 && mouseX < rectx4 + rectW4 &&
    mouseY > rectY4 && mouseY < rectY4 + rectH4 && eigenaar4 == 0 && start >= 1) {
    handleClick();

  }
  if (mouseButton == "left" && mouseX > rectx5 && mouseX < rectx5 + rectW5 &&
    mouseY > rectY5 && mouseY < rectY5 + rectH5 && eigenaar5 == 0 && start >= 1) {
    handleClick();

  }
  if (mouseButton == "left" && mouseX > rectx6 && mouseX < rectx6 + rectW6 &&
    mouseY > rectY6 && mouseY < rectY6 + rectH6 && eigenaar6 == 0 && start >= 1) {
    handleClick();

  }
  if (mouseButton == "left" && mouseX > rectx7 && mouseX < rectx7 + rectW7 &&
    mouseY > rectY7 && mouseY < rectY7 + rectH7 && eigenaar7 == 0 && start >= 1) {
    handleClick();

  }
  if (mouseButton == "left" && mouseX > rectx8 && mouseX < rectx8 + rectW8 &&
    mouseY > rectY8 && mouseY < rectY8 + rectH8 && eigenaar8 == 0 && start >= 1) {
    handleClick();

  }
  if (mouseButton == "left" && mouseX > rectx9 && mouseX < rectx9 + rectW9 &&
    mouseY > rectY9 && mouseY < rectY9 + rectH9 && eigenaar9 == 0 && start >= 1) {
    handleClick();
  }
  if (mouseButton == "left" && mouseX > rectx10 && mouseX < rectx10 + rectW10 &&
    mouseY > rectY10 && mouseY < rectY10 + rectH10) {
    reset = reset + 1
    if (reset == 2) {
      reset = 0
    }
    eigenaar1 = 0;
    eigenaar2 = 0;
    eigenaar3 = 0;
    eigenaar4 = 0;
    eigenaar5 = 0;
    eigenaar6 = 0;
    eigenaar7 = 0;
    eigenaar8 = 0;
    eigenaar9 = 0;
    start = start + 1
  }
}



function handleClick() {



  if (mouseX > rectx1 && mouseX < rectx1 + rectW1 &&
    mouseY > rectY1 && mouseY < rectY1 + rectH1
  ) {
    eigenaar1 = playerturn;
  }


  else if (mouseX > rectx2 && mouseX < rectx2 + rectW2 &&
    mouseY > rectY2 && mouseY < rectY2 + rectH2
  ) {
    eigenaar2 = playerturn;

  }
  else if (mouseX > rectx3 && mouseX < rectx3 + rectW3 &&
    mouseY > rectY3 && mouseY < rectY3 + rectH3
  ) {
    eigenaar3 = playerturn;


  }
  else if (mouseX > rectx4 && mouseX < rectx4 + rectW4 &&
    mouseY > rectY4 && mouseY < rectY4 + rectH4
  ) {
    eigenaar4 = playerturn;

  }
  else if (mouseX > rectx5 && mouseX < rectx5 + rectW5 &&
    mouseY > rectY5 && mouseY < rectY5 + rectH5
  ) {
    eigenaar5 = playerturn;

  }
  else if (mouseX > rectx6 && mouseX < rectx6 + rectW6 &&
    mouseY > rectY6 && mouseY < rectY6 + rectH6
  ) {
    eigenaar6 = playerturn;

  }
  else if (mouseX > rectx7 && mouseX < rectx7 + rectW7 &&
    mouseY > rectY7 && mouseY < rectY7 + rectH7
  ) {
    eigenaar7 = playerturn;

  }
  else if (mouseX > rectx8 && mouseX < rectx8 + rectW8 &&
    mouseY > rectY8 && mouseY < rectY8 + rectH8
  ) {
    eigenaar8 = playerturn;

  }
  else if (mouseX > rectx9 && mouseX < rectx9 + rectW9 &&
    mouseY > rectY9 && mouseY < rectY9 + rectH9
  ) {
    eigenaar9 = playerturn;

  }

  // Beurt naar andere speler.
  playerturn = (playerturn + 1)
  if (playerturn == 3) {
    playerturn = 1
  }
}
