
let lootboxanimation = 0
let lootboxstatus = ("closed.png");
let image1
let image2
let image3
let frameRate1
let frameRate2 = 0
let lootboxdown = 0
function setup() {
  createCanvas(800, 600);
  //makes the canvas 1920 pixels wide and 700 pixels high
}


function draw() {
  background(255);


  
  if (frameRate1) {
    lootboxanimation += 1;
  }

  if (lootboxanimation <= 33) {
    image(image1, 400, 200, 400, 400);

  }
  else if (lootboxanimation <= 66) {
    image(image2, 400, 200, 400, 400);
  }
  else if (lootboxanimation <= 99) {
    image(image3, 400, 200, 400, 400);
  }
  
  if (lootboxdown >= 125){
    lootboxdown = 125;
    
  }

  if (lootboxanimation >= 99) {
    lootboxdown += 1;
    console.log(lootboxdown);
    image(image3, 400, 200 + lootboxdown, 400 - lootboxdown, 400 - lootboxdown)
  }
 
}
function preload() {
  image1 = loadImage("closed.png");
  image2 = loadImage("opening.png");
  image3 = loadImage("open.png");
}
function keyPressed() {
  if (keyCode === 32) {
    frameRate1 = true;
  }

}
