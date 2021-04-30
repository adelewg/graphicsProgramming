//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
// Adapted from https://github.com/nature-of-code/
// released under MIT license

//var ball;
var balls = [];
///////////////////////////////////////////////
function setup() {
  createCanvas(900,600);
  ball = new Ball();
}
///////////////////////////////////////////////
function draw() {
  background(0);
    
    
    for(i=0; i < balls.length; i++)
        {
            var gravity = createVector(0, 0.1);
            balls[i].applyForce(gravity);
    
            //the friction acts in the opposite direction to the velocity
            var friction = balls[i].velocity.copy();
            friction.mult(-1);
            friction.normalize();
            friction.mult(0.01);
            balls[i].applyForce(friction);
    
            balls[i].run();
        }
    
  
}

function mouseDragged() {
    
    balls.push(new Ball(mouseX, mouseY));
}
///////////////////////////////////////////////
class Ball {

  constructor(x, y){
    this.velocity = new createVector(random(-3, 3), random(-3, 3));
    this.location = new createVector(x, y);
    this.acceleration = new createVector(0, 0);
    this.size = random(10,40);
  }

  run(){
    this.draw();
    this.move();
    this.bounce();
  }

  draw(){
    fill(125);
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }

  move(){
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
      this.acceleration.mult(0);
      //put a speed limit
      this.velocity.limit(3);
  }

  bounce(){
    if (this.location.x > width-this.size/2) {
          this.location.x = width-this.size/2;
          this.velocity.x *= -1;
    } else if (this.location.x < this.size/2) {
          this.velocity.x *= -1;
          this.location.x = this.size/2;
    }
    if (this.location.y > height-this.size/2) {
          this.velocity.y *= -1;
          this.location.y = height-this.size/2;
    }
  }
    
    applyForce(force){
        this.acceleration.add(force);
        
    }

}
