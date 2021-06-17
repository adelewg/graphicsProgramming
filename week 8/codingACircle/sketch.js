function setup() {
    createCanvas(900, 600);
    background(0);
    angleMode(DEGREES);
}

function draw() {
    //background(0);
    translate(width/2, height/2);
    var radius = 200;
    fill(255);
    
    var theta = frameCount;
    radius = frameCount/10;
    
   
    var x = cos(theta) * radius;
    var y = sin(theta) * radius;
    noStroke();
    ellipse(x, y, 25, 25);
        
}
