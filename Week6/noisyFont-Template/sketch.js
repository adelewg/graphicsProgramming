var points;
var font;
function preload() {
  font = loadFont('assets/Calistoga-Regular.ttf');
}

//////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(900, 400);
  //background(100);

  points = font.textToPoints('c o d e', 50, 300, 300, {
    sampleFactor: .3,
    simplifyThreshold: 0
  });
}

//////////////////////////////////////////////////////////////////////
function draw() {
    //fill(0,5);
    var trail = map(mouseY,0,height,0,42);
    noStroke();
    fill(0,trail);
    rect(0,0,width,height);
    

    // **** Your code here ****
    for(var i = 0; i < points.length; i++)
        {
            var nX = noise(frameCount + points[i].x + points[i].y);
            var mX = mouseX;
            var amt = map(mX, 0, width, 0, 80);
            //var amt = 20;
            var locX = map(nX, 0, 1, -amt, amt);
            
            var nY = noise(frameCount + points[i].x + points[i].y + 5);
            var locY = map(nY, 0, 1, -amt, amt); 
            
            var blue = map(nX, 0, 1, 10, 255);
            fill(0, 0, blue);
            ellipse(points[i].x + locX, points[i].y + locY, 5, 5);
        }
}
