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
let buttonsahur;
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
let spawnfood = false
let foodx = 0
let foody = 0
let grabfood = false
let luffytungsahur;
let sahur = false
let sahurpressed = 0
let TijdLevendS = 0
let TijdLevendM = 0
let TijdLevendH = 0
let Tijdstop = 1
let tijdX = 130
let tijdY = 50
let timedead = 5000
let rottonornot = 0
let meatrotten;
let plusfoodstatus = 1
let trashcan;



function setup() {
  DataLoad();
  createCanvas(backgroundaxis[0], backgroundaxis[1]);
  buttonsahur = createImg("Tungsahur.png");
  buttonsahur.position(190, 505);
  buttonsahur.size(20, 40);
  buttonsahur.mousePressed(luffytungtungsahur)
  buttonoutside = createButton("outside");
  buttonoutside.position(100, 100);
  buttonoutside.size(100, 40);
  buttonoutside.mousePressed(outsidebutton)
  buttonfood = createButton("Eat");
  buttonfood.position(100, 150);
  buttonfood.size(100, 40);
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
  buttonrespawn = createButton("respawn");
  buttonrespawn.position(460, 180);
  buttonrespawn.size(100, 40);
  buttonrespawn.mousePressed(reset);

}

function draw() {
  background(220);

  luffyfoodstatus = luffyfoodstatus - deltaTime * 0.001 * luffyhungerspeed;
  luffyenergystatus = luffyenergystatus - deltaTime * 0.001 * luffyenergyspeed;
  if (sahurpressed % 2 == 1) {
    sahur = true
  }
  else {
    sahur = false
  }
  if (currentbackground == 1) {
    buttonsahur.show();
  }
  else {
    buttonsahur.hide();
  }
  if (luffyhealthstatus <= 0) {
    buttonrespawn.show();

  }
  else {
    buttonrespawn.hide();
  }
  if (luffyhealthstatus <= 0 && currentbackground == 3) {
    currentbackground = 1
    luffyx = 250
  }
  if (luffyfoodstatus <= 0) {
    luffyhealthstatus = luffyhealthstatus - deltaTime * 0.001 * luffyhealthspeed
  } // als luffy honger heeft gaat hij langzaam dood

  if (luffyenergystatus <= 0) { // als luffy moe is dan krijgt hij sneller honger
    luffyhungerspeed = 0.2
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
  else if (sahur == true) {
    image(luffytungsahur, luffyx, 190, 500, 500)
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
  if (luffyhealthstatus <= 0) {
    buttonluffysleep.hide();
    luffyeating.hide();
    Tijdstop = 0
    tijdX = 490
    tijdY = 150




  }

  if (luffyfoodstatus >= 4 && luffyenergystatus >= 4) {
    luffyhealthstatus = luffyhealthstatus + deltaTime * 0.001 * luffyhealthspeed
  }
  if (luffyhealthstatus >= 5) {
    luffyhealthstatus = 5
  }
  if (foodx >= 450 && foodx <= 510 && foody >= 260 && foody <= 290) {
    spawnfood = false
    luffyfoodstatus = luffyfoodstatus + plusfoodstatus
    foodx = 1
    foody = 1

  }
  else if (currentbackground !== 0) {
    spawnfood = false
  }


  if (spawnfood == true) {
    if (grabfood == true) {
      foodx = mouseX - 11
      foody = mouseY - 10
    }
    if (rottonornot <80) {
      image(luffyfood, foodx, foody, 50, 50);
      plusfoodstatus = 1
    }
    else {
    image(meatrotten, foodx,foody,50, 50);
    plusfoodstatus = -3
    }
  }

  DataSave();
  Timer();
  loadtrashcan();


}
function preload() {
  for (let i = 0; i < backgroundPaths.length; i++) {
    let path = backgroundPaths[i];
    let backgroundImage = loadImage(path);
    backgroundImages.push(backgroundImage);
  }

  luffy = loadImage(luffyappearance[0]);
  luffydead = loadImage(luffyappearance[1]);
  luffyhealth = loadImage("luffyheart.png");
  luffyenergy = loadImage("energylogoluffy.png");
  luffyfood = loadImage("luffyfood.png");
  luffytungsahur = loadImage("Luffysahur.png");
  meatrotten = loadImage("meatrotten.png");
  trashcan = loadImage("trashcan.png");
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
  rottonornot = random(0, 100)
  spawnfood = true;
  foodx = random(200, 700)
  foody = random(200, 500)
}
function reset() {
  luffyfoodstatus = 5
  luffyenergystatus = 5
  luffyhealthstatus = 5
  tijdX = 130
  tijdY = 50
  TijdLevendS = 0
  TijdLevendM = 0
  TijdLevendH = 0
  Tijdstop = 1

}
function mousePressed() {
  let d = dist(foodx, foody, mouseX, mouseY);
  if (d <= 50) {
    grabfood = true
  }
}

function mouseReleased() {
  grabfood = false
}
function luffytungtungsahur() {
  sahurpressed += 1
}
function loadtrashcan(){
  if(currentbackground == 0){
    if(foodx >= 50&& foodx<=250&& foody >=450 &&foody <= 600){
      spawnfood = false
    }
    image(trashcan,0,450,300,300)
  }
}
function DataLoad() {
  luffyfoodstatus = getItem("food");
  if (luffyfoodstatus == null) {
    luffyfoodstatus = 5;
  }
  luffyhealthstatus = getItem("health");
  if (luffyhealthstatus == null) {
    luffyhealthstatus = 5;
  }
  luffyenergystatus = getItem("energy");
  if (luffyenergystatus == null) {
    luffyenergystatus = 5;
  }
  TijdLevendS = getItem("TijdLevendS");
  if (TijdLevendS == null) {
    TijdLevendS = 0;
  }
  TijdLevendM = getItem("TijdLevendM");
  if (TijdLevendM == null) {
    TijdLevendM = 0;
  }
  TijdLevendH = getItem("TijdLevendH");
  if (TijdLevendH == null) {
    TijdLevendH = 0;
  }
}
function DataSave() {
  storeItem("food", luffyfoodstatus);
  storeItem("health", luffyhealthstatus);
  storeItem("energy", luffyenergystatus);
  storeItem("TijdLevendS", TijdLevendS);
  storeItem("TijdLevendM", TijdLevendM);
  storeItem("TijdLevendH", TijdLevendH);
}
function Timer() {
  TijdLevendS = TijdLevendS + deltaTime * 0.001 * Tijdstop;
  if (TijdLevendS >= 60) {
    TijdLevendS = 0
    TijdLevendM += 1
  }
  if (TijdLevendM >= 60) {
    TijdLevendM = 0
    TijdLevendH += 1
  }

  fill(255)
  text("time:", 20, 50)
  text("S", tijdX - 10, tijdY)
  text(round(TijdLevendS), tijdX, tijdY)
  text("M", tijdX - 25, tijdY)
  text(TijdLevendM, tijdX - 40, tijdY)
  text("H", tijdX - 55, tijdY)
  text(TijdLevendH, tijdX - 70, tijdY)

}

