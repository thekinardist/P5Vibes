function setup() {
  createCanvas(600, 400);
  background(220);
  head = loadImage("Me_Head.png");
}

function draw() {
  let x = 60 * randomGaussian() + 300;
  let y = 30 * randomGaussian() + 200
  noStroke();
  tint(255,40);
  image(head, x, 120, 60,60);
}
