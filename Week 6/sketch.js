let backgroundaxis = [1000, 700]
let backgroundPaths = ["Thousand_sunny_kitchen.png", "Thousand_sunny_sick_bay.png", "Thousand_sunny_maindeck.jpg"]
let backgroundImages = []
let luffyappearance = ["luffy idle.png"]
let luffy;
let buttonfood;
let buttonsleep;
let buttonoutside;
let currentbackground = 1
let luffyhealth;
let luffyenergy;

function setup() {
  createCanvas(backgroundaxis[0], backgroundaxis[1]);
  buttonoutside = createButton("outside");
  buttonoutside.position(100, 100);
  buttonoutside.size(100, 40)
  buttonoutside.mousePressed(outsidebutton)
  buttonfood = createButton("Eat");
  buttonfood.position(100, 150);
  buttonfood.size(100, 40)
  buttonfood.mousePressed(foodbutton);
  buttonsleep = createButton("sleep");
  buttonsleep.position(100, 200);
  buttonsleep.size(100, 40);
  buttonsleep.mousePressed(sleepbutton);
}

function draw() {
  background(220);
  image(backgroundImages[currentbackground], 0, 0, backgroundaxis[0], backgroundaxis[1]);
  image(luffy, 250, 190, 500, 500)
 for (let i = 0; i < 5; i++) {
  image(luffyhealth,900 - (i*40),50,85,60);
  image(luffyenergy,900 - (i*40),100,85,60);
 }
}
function preload() {
  for (let i = 0; i < backgroundPaths.length; i++) {
    let path = backgroundPaths[i];
    let backgroundImage = loadImage(path);
    backgroundImages.push(backgroundImage);
  }

  luffy = loadImage(luffyappearance[0]);
  luffyhealth = loadImage("luffyheart.png")
  luffyenergy = loadImage("energylogoluffy.png")

}
function sleepbutton(){
 currentbackground = 1  
}
function foodbutton(){
 currentbackground = 0  
}
function outsidebutton(){
 currentbackground = 2  
}