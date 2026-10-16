let backgroundaxis = [1000, 700]
let backgroundPaths = ["Thousand_sunny_kitchen.png", "Thousand_sunny_sick_bay.png", "Thousand_sunny_maindeck.jpg","Thousand_sunny_sick_bay_luffy.png"]
let backgroundImages = []
let luffyappearance = ["luffy idle.png"]
let luffy;
let buttonfood;
let buttonsleep;
let buttonoutside;
let buttonluffysleep;
let currentbackground = 1
let luffyhealth;
let luffyenergy;
let luffyfood;
let luffyhealthstatus = 5
let luffyenergystatus = 5
let luffyfoodstatus = 5;
let luffyhungerspeed = 0.1;
let luffyheatlhspeed = 0.1;
let luffyenergyspeed = 0.053;
let luffyhealthspeed = 0.7;
let luffyx


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
  buttonluffysleep = createButton("enter bed");
  buttonluffysleep.position(900, 400);
  buttonluffysleep.size(100, 40);
  buttonluffysleep.mousePressed(luffysleep);
}

function draw() {
  background(220);

  luffyfoodstatus = luffyfoodstatus - deltaTime * 0.001 * luffyhungerspeed;
  luffyenergystatus = luffyenergystatus - deltaTime * 0.001 * luffyenergyspeed;
  if (luffyfoodstatus <= 0) {
    luffyhealthstatus = luffyhealthstatus - deltaTime * 0.001 * luffyhealthspeed
  } // als luffy honger heeft gaat hij langzaam dood

  if (luffyenergystatus <= 0) { // als luffy moe is dan krijgt hij sneller honger
    luffyhungerspeed = 0.5
  }
  else {
    luffyhungerspeed = 0,1
  }
  if (luffyenergystatus >= 5){
    luffyenergystatus = 5
  }
  image(backgroundImages[currentbackground], 0, 0, backgroundaxis[0], backgroundaxis[1]);
  image(luffy, 250, 190, 500, 500)
  for (let i = 0; i < luffyhealthstatus; i++) {
    image(luffyhealth, 900 - (i * 40), 50, 85, 60);
  }
  for (let i = 0; i < luffyenergystatus; i++) {
    image(luffyenergy, 900 - (i * 40), 100, 85, 60);
  }
  for (let i = 0; i < luffyfoodstatus; i++) {
    image(luffyfood, 920 - (i * 40), 150, 45, 60)
  }
  if(currentbackground == 3){

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
  luffyfood = loadImage("luffyfood.png")

}
function sleepbutton() {
  currentbackground = 1
}
function foodbutton() {
  currentbackground = 0
}
function outsidebutton() {
  currentbackground = 2
}
function luffysleep(){
  currentbackground = 3
  luffyenergystatus = luffyenergystatus + deltaTime * 0.01 
}