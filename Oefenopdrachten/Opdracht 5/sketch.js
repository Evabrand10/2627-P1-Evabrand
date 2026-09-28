function setup() {
  createCanvas(1200, 600);
}

function draw() {
  background(220);
  strokeWeight(1)
  fill(0);
  text("1.", 20, 15)
  text("2.", 20, 105)
  text("3.", 80, 105)
  text("4.", 80, 205)
  text("5.", 540, 20)
  text("6.", 350, 105)
  text("7.", 625, 105)
  for (let i = 0; i < 10; i++) {
    if (i == 7) {
      fill("blue")
    }
    else {
      fill(255);
    }

    rect(20 + (i * 50), 20, 50, 50);
  }
  for (let i = 0; i < 5; i++) {
    fill(i * 60)
    rect(20, 110 + (i * 50), 50, 50);
  }
  for (let i = 0; i < 4; i++) {
    let W = i * 10
    fill(0, 0 + (i * 60), 0)
    rect(90 + (i * W), 105, 25 + (i * W), 50);
  }
  for (let i = 0; i < 4; i++) {
    fill(0, 0, 255 - (i * 70))
    let WH = i * 13
    rect(90 + (i * WH), 205, 25 + (i * WH), 50 + (i * WH))
  }
  for (let i = 0; i < 6; i++) {
    strokeWeight(i * 3);
    fill(255);
    circle(570 + (i * 70), 50, 50);
  }
  for (let i = 0; i < 10; i++) {
    strokeWeight(1);

    if (i % 2 == 1

    ) {
      fill("red")
    }
    else {
      fill("white")
    }

    circle(530, 210, 200 - (i * 20));

  }
  for (let i = 0; i < 21; i++) {
   let size = 0
    if (i % 2 == 0) {
      fill(200);
    }
    else{
      fill(255)
    }
   if (i >= 10){
     size = 50;
   }
    rect(645, 105 + (i * 15), 35 + (i*25) - ((i - 10) * size), 15)
  }
}
