let startshow = 0
let rectstartcords = [345,260,100,50]

let hovereffect = 255


function setup() {
  createCanvas(800, 600);
  let button = createButton("Start");
  button.position (345,260)
  button.style(hovereffect);
  button.style(50)
  button.mousePressed(click)
}
function click(){
  console.log("toppie")
}

function draw() {
  background(220);

 
}

function mouseHover(){
  if (mouseX > rectstartcords[0] && mouseX < rectstartcords[0] + rectstartcords[2] &&
    mouseY > rectstartcords[1] && mouseY < rectstartcords[1] + rectstartcords[3]){

    hovereffect = 220
    }
    else{
      hovereffect = 255
    }
  }