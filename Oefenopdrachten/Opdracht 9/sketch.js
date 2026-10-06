let cirkels = [];
let punten = 0
function setup() {
  createCanvas(1200, 700);
  for (let i = 0; i < 100; i++) {
    let c = {
      xpos: random(50, 600),
      ypos: random(50, 300),
      radius: random(10, 50),
      kleur: [random(255), random(255),random(255)],
      snelheidx: random(-5, 5),
      snelheidy: random(-5, 5),
      kleurverandering: random(1,5)
    }
    cirkels.push(c);
  }
}

function draw() {
  background(220);
  fill(0)
  textSize(100);
  text(punten,400,300);
  for (let i = 0; i < cirkels.length; i++) {
    let cirkel = cirkels[i];
    fill(cirkel.kleur);
    circle(cirkel.xpos, cirkel.ypos, cirkel.radius);
    cirkel.xpos = cirkel.xpos + cirkel.snelheidx;
    cirkel.ypos = cirkel.ypos + cirkel.snelheidy;
    cirkel.kleur[0] += cirkel.kleurverandering;
    cirkel.kleur[1] += cirkel.kleurverandering;
    cirkel.kleur[2] += cirkel.kleurverandering;
    if(cirkel.kleur[0] >= 255||cirkel.kleur[0] <= 70 ){
      cirkel.kleurverandering *= -1.0
    }
    if (cirkel.xpos < 0) {
      cirkel.snelheidx *= -1.0;
    }
    if (cirkel.xpos > width) {
      cirkel.snelheidx *= -1.0;
    }
    if (cirkel.ypos < 0) {
      cirkel.snelheidy *= -1.0
    }
    if (cirkel.ypos > height) {
      cirkel.snelheidy *= -1.0
    }
    
  }
}
function mousePressed() {
  for (let i = 0; i < cirkels.length; i++) {

    let cirkel = cirkels[i];
    let afstandmuis = dist(mouseX, mouseY, cirkel.xpos, cirkel.ypos)
    if (afstandmuis <= cirkel.radius) {
      punten += 1
    }
    console.log(punten)
  }
}
