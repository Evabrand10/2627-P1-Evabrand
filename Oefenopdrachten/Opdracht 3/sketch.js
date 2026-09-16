let cijfer = 30
let uitslag = "uitstekent"

function setup() {
  createCanvas(400, 400);
}




  
 
function draw() {
  background(220);
  fill (0);
  textSize(26);
  text(uitslag,200,200);
  }
  if(cijfer <= 50){
    uitslag = "hij werkt niet:("
    console.log("je bent tering dom");
  }
  else if(cijfer <= 69){
    uitslag = "Voldoende!"
    console.log("kan makkelijk havo swa");
  } 
  else if(cijfer <= 89){
    uitslag = "Goed gedaan!"
    console.log("DE REST IS TERING DOM SWA");
  }
  else if(cijfer <= 100){
    uitslag = "HIJ WERKT!!!:)"
    console.log("school is te makkelijk man geef dat diploma maar");
  }

 
function keyPressed(){

if(keyCode === 13){
  cijfer = random(100);
  console.log("enter is ingedrukt")}
}


