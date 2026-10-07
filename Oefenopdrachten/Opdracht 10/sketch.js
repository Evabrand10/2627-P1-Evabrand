let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let backgroundcolor = 220;
let bestanden = ["elephant.png", "giraffe.png", "hippo.png", "monkey.png",
  "panda.png", "parrot.png", "penguin.png", "pig.png", "rabbit.png", "snake.png"];
  let dieren = ["elephant", "giraffe", "hippo ", "monkey.",
  "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let colorButtons = [];
let afbeeldingen = [];


function setup() {
  createCanvas(800, 400);
 for (let i = 0; i < dieren.length; i++) {
   let button = createButton(dieren[i]);
    button.position(100 + (i * 50),  200);
    button.style('background-color', );
    button.mousePressed(buttonclicked);
   
  
 }
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
  for (let i = 0; i < afbeeldingen.length; i += 2) {
    let afbeelding = afbeeldingen[i];
    image(afbeelding, 100+(i*50), 200, 50, 50);
    let afbeelding2 = afbeeldingen[i + 1];
    image(afbeelding2, 100+(i*50), 325, 50, 50);
   
  }

}
function buttonclicked() {
  let buttonThatWasPressed = checkWhichButtonWasPressed();
  if (buttonThatWasPressed >= 0) {
    backgroundcolor = kleuren[buttonThatWasPressed];

    // Alle buttons weer laten zien.
    for (let i = 0; i < colorButtons.length; i++) {
      let button = colorButtons[i];
      button.show();
    }

    // Alleen de button die geklikt was opnieuw hiden
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
function preload() {
  for (let i = 0; i < bestanden.length; i++) {
    let bestandsNaam = bestanden[i];
    let afbeelding = loadImage(bestandsNaam);
    afbeeldingen.push(afbeelding);

  }
}

