var startSize;
var functionCalls = 0;

function setup() {
    createCanvas(900, 900);
    background(255);
    
    fill(0);
    noStroke;
    noSmooth();
    rectMode(CENTER);
    startSize = pow(3, 6);// 3*3*3*3*3*3
    
}

function draw() {
    translate(width/2, height/2);
  
    squareDraw(startSize);
    
    noLoop();

}



function squareDraw(side) {
    functionCalls += 1;
    side = side / 3;
    
    if(side>=1) {
        //keep going
        rect(0,0,side, side);
        
        push()
        translate(-side,0);
        squareDraw(side);
        pop()
        
        push()
        translate(-side,-side);
        squareDraw(side);
        pop()
        
        push();
        translate(0,-side);
        squareDraw(side);
        pop();
        
        push();
        translate(side,-side);
        squareDraw(side);
        pop();
        
        push();
        translate(side,0);
        squareDraw(side);
        pop();
        
        push();
        translate(side,side);
        squareDraw(side);
        pop();
        
        push();
        translate(0,side);
        squareDraw(side);
        pop();
        
        push();
        translate(-side,side);
        squareDraw(side);
        pop();
    }
}