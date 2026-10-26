let backgroundaxis = [1000, 700]
let backgroundPaths = ["Thousand_sunny_kitchen.png", "Thousand_sunny_sick_bay.png", "Thousand_sunny_maindeck.jpg", "Thousand_sunny_sick_bay_luffy.png"]
let backgroundImages = []
let luffyappearance = ["luffy idle.png", "Luffydead.png"]
let luffy;
let buttonfood;
let buttonsleep;
let buttonoutside;
let buttonluffysleep;
let luffyoutsidebed;
let currentbackground = 1
let luffyhealth;
let luffyenergy;
let luffyfood;
let luffyeating
let luffyhealthstatus = 5
let luffyenergystatus = 5
let luffyfoodstatus = 5;
let luffyhungerspeed = 0.1;
let luffyheatlhspeed = 0.1;
let luffyenergyspeed = 0.053;
let luffyhealthspeed = 0.7;
let luffyx = 250
let luffyinbed = false


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
  buttonluffysleep.position(850, 330);
  buttonluffysleep.size(100, 40);
  buttonluffysleep.mousePressed(luffysleep);
  luffyoutsidebed = createButton("exit bed");
  luffyoutsidebed.position(850, 330);
  luffyoutsidebed.size(100, 40);
  luffyoutsidebed.mousePressed(luffyexitbed);
  luffyeating = createButton("Eat");
  luffyeating.position(850, 330);
  luffyeating.size(100, 40);
  luffyeating.mousePressed(luffyeatingfood);
  buttonrespawn = createButton("respawn")
  buttonrespawn.position(460, 180);
  buttonrespawn.size(100, 40);
  buttonrespawn.mousePressed(reset)

}

function draw() {
  background(220);
 
  luffyfoodstatus = luffyfoodstatus - deltaTime * 0.001 * luffyhungerspeed;
  luffyenergystatus = luffyenergystatus - deltaTime * 0.001 * luffyenergyspeed;
  if (luffyhealthstatus <= 0) {
    buttonrespawn.show();
  }
  else {
    buttonrespawn.hide();
  }
  if (luffyfoodstatus <= 0) {
    luffyhealthstatus = luffyhealthstatus - deltaTime * 0.001 * luffyhealthspeed
  } // als luffy honger heeft gaat hij langzaam dood

  if (luffyenergystatus <= 0) { // als luffy moe is dan krijgt hij sneller honger
    luffyhungerspeed = 0.5
  }
  else {
    luffyhungerspeed = 0.1
  }
  if (luffyenergystatus >= 5) {
    luffyenergystatus = 5
  }
  if (luffyfoodstatus >= 5) {
    luffyfoodstatus = 5
  }
  if (currentbackground == 0) {
    luffyeating.show();
  }
  else {
    luffyeating.hide();
  }
  image(backgroundImages[currentbackground], 0, 0, backgroundaxis[0], backgroundaxis[1]);
  if (luffyhealthstatus <= 0) {
    image(luffydead, luffyx, 190, 500, 500)
  }
  else {
    image(luffy, luffyx, 190, 500, 500);
  }

  for (let i = 0; i < luffyhealthstatus; i++) {
    image(luffyhealth, 900 - (i * 40), 50, 85, 60);
  }
  for (let i = 0; i < luffyenergystatus; i++) {
    image(luffyenergy, 900 - (i * 40), 100, 85, 60);
  }
  for (let i = 0; i < luffyfoodstatus; i++) {
    image(luffyfood, 920 - (i * 40), 150, 45, 60)
  }
  if (currentbackground == 3) {
    luffyinbed = true
  }
  else {
    luffyinbed = false
  }

  if (currentbackground == 1) {
    buttonluffysleep.show();
  }
  else {
    buttonluffysleep.hide();

  }
  if (luffyinbed == true) {
    luffyenergystatus = luffyenergystatus + deltaTime * 0.01 * luffyenergyspeed;
    luffyoutsidebed.show()
  }
  else {
    luffyenergystatus = luffyenergystatus - deltaTime * 0.001 * luffyenergyspeed;
    luffyoutsidebed.hide()
  }
if(luffyhealthstatus <= 0){
  buttonluffysleep.hide();
 }
}
function preload() {
  for (let i = 0; i < backgroundPaths.length; i++) {
    let path = backgroundPaths[i];
    let backgroundImage = loadImage(path);
    backgroundImages.push(backgroundImage);
  }

  luffy = loadImage(luffyappearance[0]);
  luffydead = loadImage(luffyappearance[1]);
  luffyhealth = loadImage("luffyheart.png")
  luffyenergy = loadImage("energylogoluffy.png")
  luffyfood = loadImage("luffyfood.png")

}
function sleepbutton() {
  currentbackground = 1
  luffyx = 250
}
function foodbutton() {
  currentbackground = 0
  luffyx = 250
}
function outsidebutton() {
  currentbackground = 2
  luffyx = 250
}
function luffysleep() {
  currentbackground = 3
  luffyx = 5000
  luffyinbed = true

}
function luffyexitbed() {
  currentbackground = 1
  luffyx = 250
  luffyinbed = false
}
function luffyeatingfood() {
  luffyfoodstatus = luffyfoodstatus + 0.8;

}
function reset() {
  luffyfoodstatus = 5
  luffyenergystatus = 5
  luffyhealthstatus = 5

}