let x1 = 0;
let y1 = 0;
let radius = 50;
let speed =2;

let x2 = 0;
let y2 = 0;


function setup(){
  const canvas = createCanvas(500,500);
  y1 = height / 2;
  x1= -radius;

  y2 = height/ 2
  x2 = -radius

  strokeWeight(5.5);
  fill("white");
}

function draw() {
  background(0, 30);
  fill(255, 30);


  circle(x1, y1, radius);
  x1 += speed;
  y1 -= 0.5;

  circle(x2, y2, radius);
  x2 += speed;
  y2 += 0.5;


  if (x1 >= width + radius) {
    x1 = -radius;
    y1 = 250;
  }

  if (x2 >= width + radius) {
    x2 = -radius;
    y2 = 250;
  }
}