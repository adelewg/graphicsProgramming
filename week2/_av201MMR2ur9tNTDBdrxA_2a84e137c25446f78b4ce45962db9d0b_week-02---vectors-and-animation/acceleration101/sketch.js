
var ball;
////////////////////////////////////////////////
function setup() {
  createCanvas(900,600);
  //ball = new Ball();
  balls = [];
  for(i = 0; i < 100; i++)
      {
          balls.push(new Ball());
      }
  background(0);
}
////////////////////////////////////////////////
function draw() {
  //background(0);
  //ball.run();
  for(i = 0; i < 100; i++)
      {
          balls[i].run();
      }
}
////////////////////////////////////////////////
class Ball {

  constructor(){
    this.velocity = new createVector(0, 0);
    this.location = new createVector(randomX, randomX);
   
      
    var randomX = width/2+random(-100,100);
    var randomY = height/2+random(-100,100);
    this.prevLocation = new createVector(randomX, randomY);
      
    this.acceleration = new createVector(0.0, 0);
    //legal speed limit
    this.maxVelocity = 5;
  }

  run(){
    this.draw();
    this.move();
    
  }

  draw(){
    //fill(125);
    stroke(random(100,255));
    strokeWeight(1);
    line(this.location.x, this.location.y, this.prevLocation.x, this.prevLocation.y);
    this.prevLocation = this.location.copy();
    //ellipse(this.location.x, this.location.y, 40, 40);
  }

  move(){
      
    var mouse = createVector(mouseX, mouseY);
    var dir = p5.Vector.sub(mouse, this.location);
    
    //we normalise the vector and make it of size 1
    dir.normalize();
    dir.mult(0.3);
    this.acceleration = dir;
      
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxVelocity);
    this.location.add(this.velocity);
  }

 
}
