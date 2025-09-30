function setup() {
  createCanvas(600, 240);
  background(0);
  head = loadImage("Me_Head.png");
}

function draw() {
  if (keyIsDown(UP_ARROW) === true){
    let x = 65 * randomGaussian() + 300;
    let y = 30 * randomGaussian() + 200
    noStroke();
    tint(255,40);
    image(head, x, 80, 60,60);
  }

}


//clear the canvas
function keyPressed(){
  if(key === 'c'){
    clear();
    background(0);
  }
}
