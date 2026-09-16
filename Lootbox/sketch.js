
let  lootboxanimation = 0
let lootboxstatus = ("closed.png");
let image1
let image2
let image3
let frameRate1
function setup() {
  createCanvas(1920, 700);
 //makes the canvas 1920 pixels wide and 700 pixels high
}


function draw() {
  background (255);
 if(frameRate1){
  lootboxanimation += 1;
 }

 if  (lootboxanimation <= 33){
    lootboxstatus = image(image1,400,200,400,400);

}
else if(lootboxanimation <= 66){
  lootboxstatus = image(image2,400,200,400,400);
}
else if(lootboxanimation <= 99 || lootboxanimation >= 99){
  lootboxstatus = image(image3,400,200,400,400);
}
}
function preload(){
  image1 = loadImage("closed.png");
  image2 = loadImage("opening.png");
  image3 = loadImage("open.png");
}
function keyPressed(){
 if(keyCode === 32){;
  frameRate1 = true
 }

}
