let startshow = 0
let rectstartcords = [345,260,100,50]
let starthover = false
let hovereffect = 255
let startpressed = 0

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  textSize(46);
  fill(hovereffect);
  rect((rectstartcords[0]),(rectstartcords[1]),100,50);
  fill(0)
  text("start",350,300);
  console.log(starthover);
  mouseHover();
 
}

function mouseHover(){
  if (mouseX > rectstartcords[0] && mouseX < rectstartcords[0] + rectstartcords[2] &&
    mouseY > rectstartcords[1] && mouseY < rectstartcords[1] + rectstartcords[3]){
    starthover = true 
    hovereffect = 220
    }
    else{
      starthover = false
      hovereffect = 255
    }
    
}
function mousePressed(){
if (starthover == true && mouseButton === "left"){
  startpressed += 1
  console.log(startpressed)
}
}
