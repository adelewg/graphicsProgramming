function setup() {
    createCanvas(900, 600);
    background(0);
    randomSeed(0);
}

function draw() {
    var randX = random(width);
    var randY = random(height);
    
    noStroke()
    fill(random(255), 0, 0, random(255));
    size = random(0,15);
    ellipse(randX, randY, size, size);

}
