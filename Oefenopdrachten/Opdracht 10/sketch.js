let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let backgroundcolor = 220;
let bestanden = ["elephant", "giraffe", "hippo", "monkey",
  "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let colorButtons = [];

function setup() {
  createCanvas(800, 400);

  colorButtons = [];
  for (let i = 0; i < kleuren.length; i++) {
    let button = createButton(kleuren[i]);
    button.position(100 + (i * 70), 100);
    button.style('background-color', kleuren[i]);
    button.mousePressed(buttonclicked);
    colorButtons.push(button);
  }
}

function draw() {
  background(backgroundcolor);


}
function buttonclicked() {
  let buttonThatWasPressed = checkWhichButtonWasPressed();
  if (buttonThatWasPressed < 0) {
    console.log("Invalid button!")
  }
  else {
    backgroundcolor = kleuren[buttonThatWasPressed];
   for (let i = 0; i < kleuren.length; i++) {
    colorButtons.show();
   }
    colorButtons[buttonThatWasPressed].hide();
  }

}

function checkWhichButtonWasPressed() {
  for (let i = 0; i < colorButtons.length; i++) {
    let xPos = colorButtons[i].x;
    let yPos = colorButtons[i].y;
    if (mouseX >= xPos && mouseX <= xPos + colorButtons[i].width &&
      mouseY >= yPos && mouseY <= yPos + colorButtons[i].height) {
      return i;
    }
  }
  return -1;
}


