let walker;
function setup() {
  createCanvas(700, 400);
  imageMode(CENTER);
  angleMode(DEGREES);
  sloan = loadImage("assets/ExcitedSloan.png")
  walker = new Walker();
  background(220);
}

function draw() {
  
  walker.step();
  walker.show();


  
}


class Walker{
  //Constructor initializes
  constructor(){
    //data (variables) are created within the constructor
    this.x = width/2;
    this.y = height/2
  }
  
  //Methods for the contructor 
  show() {
    //stroke(0);
    //

    image(sloan, this.x,this.y,50,50);

  
  }
  
  step() {
    let choice = floor(random(4));
    if (choice == 0){
      this.x++;
    }else if(choice == 1){
      this.x--;
    }else if(choice == 2){
      this.y++;
    }else{
      this.y--;
    }
  }
}