let cubes = [];
let cubeamount = 0
let circles = [];
let circleamount = 0
console.log(circles);
console.log(cubes);

function setup() {
  createCanvas(800, 600);
  circleamount = random(40, 150);
  cubeamount = random(40, 150);
  for (let x = 0; x < cubeamount; x++) {
    let c = color(random(0, 256), random(0, 256), random(0, 256), random(50, 256));
    cubes.push([random(0, 550), random(0, 550), random(20, 80), c]);
  }
  for (let x = 0; x < circleamount; x++) {
    let c = color(random(0, 256), random(0, 256), random(0, 256), random(50, 256));
    circles.push([random(0, 550), random(0, 550), random(20, 80), c]);
  } // pusht alles in de array en maakt alles random

  console.log(circleamount)
  console.log(cubeamount)

}

function draw() {
  background(220);
  for (let x = 0; x < cubes.length; x++) {
    fill(cubes[x][3]);
    rect(cubes[x][0], cubes[x][1], cubes[x][2], cubes[x][2]);
  }
  for (let x = 0; x < circles.length; x++) {
    fill(circles[x][3]);
    circle(circles[x][0], circles[x][1], circles[x][2]);
    // tekent de circels en cubes
  }



}

