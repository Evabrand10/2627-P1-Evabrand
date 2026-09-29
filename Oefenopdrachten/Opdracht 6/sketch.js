let randomKleuren = []


function setup() {
  createCanvas(380, 380);
  for (let i = 0; i < 5; i++) {
    randomKleuren.push([random(255), random(255), random(255)])
    
  }
}

function draw() {
  background(220);
  fill(0);
  text("1", 20, 15);
  text("2", 20, 100);
  text("3", 20, 190);
  text("4", 20, 250);
  text("5", 120, 15);
  text("6", 120, 100);
  text("7", 120, 190);
  text("8", 120, 280);
  text("9", 240, 15);


  let kleuren = ["red", "green", "blue", "purple", "yellow"];
  for (let i = 0; i < kleuren.length; i++) {
    fill(kleuren[i]);
    text(kleuren[i], 20, 25 + (i * 10));
  }


  kleuren.push(kleuren.shift());
  for (let i = 0; i < kleuren.length; i++) {
    fill(kleuren[i]);
    text(kleuren[i], 20, 110 + (i * 10));

  }

  kleuren.splice(1, 2);
  for (let i = 0; i < kleuren.length; i++) {
    fill(kleuren[i]);
    text(kleuren[i], 20, 200 + (i * 10));

  }
  let numbers = ["400", "240", "10", "490", "30", "60", "244", "500", "301", "300"];

  let teller = 0;
  for (let i = 0; i < numbers.length; i++) {
    fill(0);
    if (numbers[i] < 300) {
      text(numbers[i], 20, 260 + (teller * 10));
      teller++;
    }

  }
  let optellen1 = [3, 55, 93, 20, 102, 6];
  let optellen2 = [14, 22, 80, 5];
  let uitkomst1 = 0;
  for (let i = 0; i < 6; i++) {
    uitkomst1 += optellen1[i];

    if (i < optellen2.length) {
      uitkomst1 += optellen2[i];
    }
  }

  text(uitkomst1, 120, 25);
  let Overheidsfinancieringstekort = "Overheidsfinancieringstekort"
  let Ecounter = 0;
  for (let i = 0; i < Overheidsfinancieringstekort.length; i++) {
    if (Overheidsfinancieringstekort[i] == "e") {
      Ecounter += 1
    }

  }
  text(Ecounter, 120, 110);
  kleuren = ["red", "green", "blue", "purple", "yellow"];
  sort(kleuren)
  for (let i = 0; i < kleuren.length; i++) {
    fill(kleuren[i]);
    text(kleuren[i], 120, 200 + (i * 10));
  }
   
   for(let i =0; i< randomKleuren.length; i++){
   fill(randomKleuren[i])
    rect(130+ (i*15) , 280,15,15)
  }
}
