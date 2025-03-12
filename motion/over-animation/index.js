let x = 0;
let y = 0;
let radius = 50;
let speed = 1;

let isJumping = false;
let jumpProgress = 0;

const x3 = (n) => width * n;
const y3 = (n) => height * n;
const s3 = (n) => width * n;

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  y = height / 2;
  x = -radius;
  strokeWeight(0.5);
  fill(0);
}

function draw() {
  background(0);

  fill(100);
  rect(x3(0.5), y3(0.5), s3(0.1));

  if (x >= 200 && x <= 300) {
    y = height / 2 - 100;
  } else {
    y = height / 2;
  }

  fill("white");
  circle(x, y, radius);

  speed *= 1.01;
  x += speed;

  if (x >= width + radius) {
    x = -radius;
    speed = 1;
  }
}
