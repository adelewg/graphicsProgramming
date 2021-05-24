    var points;
var font;
function preload() {
  font = loadFont('assets/Calistoga-Regular.ttf');
}
var amt;

//////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(900, 400);
  background(0);

  points = font.textToPoints('c o d e', 50, 300, 300, {
    sampleFactor: .3,
    simplifyThreshold: 0
  });
}

//////////////////////////////////////////////////////////////////////
function draw() {
    var trail = map(mouseY,0,height,0,42);
    noStroke();
    fill(0,trail);
    rect(0,0,width,height);
    amt = map(mouseX,0,width,0,80);

    for (let i = 0; i < points.length; i++) {
        const point = points[i];

        let nX = map(noise((frameCount+point.x+point.y)*0.1),0,1,-amt,amt);
        let nY = map(noise((frameCount+point.x+point.y+26)*0.1),0,1,-amt,amt);

        let size = map(nY,-amt,amt,3,5);
        
        push();
            colorMode(HSB);

            fill(map(noise(frameCount*0.001),0,1,0,359),100,100);

            ellipse(point.x+nX,point.y+nY,size);
        pop();
    }
}
