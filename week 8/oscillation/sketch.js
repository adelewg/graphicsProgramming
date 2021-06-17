function setup() {
    createCanvas(900, 600);
    background(0);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    var amp = width / 2;
    var period = 360;
    var phase = 0;
    
    fill(255);
    var locX = sin(360 * frameCount/period + phase) * amp;
    
    translate(width / 2, height / 2);
    ellipse(locX, 0, 30, 30)

}
