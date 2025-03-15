

const radius = 200;
let angle = 3;
function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent('sketch');
  background('black');
  angleMode(DEGREES);
}

function draw() {
  background(100, 10);
  strokeWeight(10);
  stroke(255);
  push();
  translate(width / 2, height / 2);
  const x = radius * cos(angle);
  const y = radius * sin(angle);
  console.log({ x, y });

  point(x, y);
  angle+= 4;
  pop();
}
