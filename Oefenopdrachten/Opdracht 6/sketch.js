
function setup() {
  createCanvas(380, 350);
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
   if(numbers[i] < 300){
     text(numbers[i], 20, 260 + (teller * 10));
     teller++;
     
    }


   

   
    
  }

}
