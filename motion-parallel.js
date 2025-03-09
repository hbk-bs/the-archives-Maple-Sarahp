let x1 = 0;
let y1 = 0;
let radius = 50;
let speed =0.2;

let x2 = 0;
let y2 = 0;


function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  y1 = height / 3;
  x1= -radius;

  y2 = 2*height/ 3
  x2 = -radius

  strokeWeight(5.5);
  fill("white");
}

function draw() {
background(0,10);

circle(x1, y1, radius);
//x = x + 10;
speed *= 1.02;
x1 += speed;
if (x1 >= width + radius) {
  x1 = -radius;
  speed = 1;
}

circle(x2, y2, radius);
//x = x + 10;
speed *= 1.01;
x2 += speed;
if (x2 >= width + radius) {
  x2 = -radius;
  speed = 1;
}
}