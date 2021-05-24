var points;
var font;
var colourR = 255;
var colourG = 125;
var colourB = 255;
var size = 10;

function preload() {
  font = loadFont('assets/Calistoga-Regular.ttf');
}

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
    fill(255);
    text("Hold r, g, or b to change colours", 10, 15);
    text("and s to change the size", 10, 30);

    fill(0,5);
    rect(0,0,width,height);
    var amt = map(mouseX, 0, width, 0, 80);
    
    if(keyIsDown(82))
    {
        colourR = map(mouseY, 0, height, 0, 255);
    }
    if(keyIsDown(71))
    {
        colourG = map(mouseY, 0, height, 0, 255);
    }
    if(keyIsDown(66))
    {
        colourB = map(mouseY, 0, height, 0, 255);
    }
    if(keyIsDown(83))
    {
        size = map(mouseY, 0, height, 1, 20);
    }

    fill(colourR, colourG, colourB, 200);
    for(var i=0; i < points.length; i++)
    {
        var noiseValue = frameCount + points[i].x + points[i].y
        var nX = noise(noiseValue/25);
        var coordinateX = map(nX, 0, 1, -amt, amt);
        
        var nY = noise((noiseValue+100)/25);
        var coordinateY = map(nY, 0, 1, -amt, amt);
        
        ellipse(points[i].x + coordinateX, points[i].y + coordinateY, size);
    }
}