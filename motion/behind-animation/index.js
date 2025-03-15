let x1 = 0;
let y1 = 0;

let x2 = 0;
let y2 = 0;

let radius = 50;
let speed1 = 2;
let speed2 = 1.5;

function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");

  y1 = height / 2;
  x1 = -radius;

  y2= height / 2;
  x2= -radius;

  strokeWeight(3);
  fill(255,140);
}

function draw() {
background(0);

circle(x1, y1, radius);
circle(x2,y2,radius)
//speed *= 1.01;
x1 += speed1;
x2 += speed2;

if (x1 >= width + radius) {
  x1 = -radius;
}
if(x2 >= width + radius){
  x2 = -radius;
}
}
