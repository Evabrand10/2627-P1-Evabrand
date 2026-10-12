let imagbackground
let backgroundaxis = [1000,700]
let backgroundstatus  = ["Thousand_sunny_kitchen.png","Thousand_sunny_sick_bay.png","Thousand_sunny_maindeck.jpg"]

function setup() {
  createCanvas(backgroundaxis[0], backgroundaxis[1]);
}

function draw() {
  background(220);
  image (imagbackground,0,0,backgroundaxis[0], backgroundaxis[1])
}
function preload(){
  imagbackground = loadImage(backgroundstatus[2])
}