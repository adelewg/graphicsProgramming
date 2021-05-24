function setup() {
    createCanvas(200, 200);
    background(0);
    rectMode(CENTER);
}

function draw() {
   background(0);
    //randomGrid();
    noiseGrid();
    noLoop();

}

function randomGrid()
{
    for(var x = 0; x < width; x++)
        {
            for(var y = 0; y < height; y++)
                {
                    var c = random(0, 255);
                    stroke(c);
                    point(x, y);
                }
        }
}

function noiseGrid()
{
    for(var x = 0; x < width; x++)
        {
            for(var y = 0; y < height; y++)
                {
                    var n = noise(x/100, y/100);
                    var c = map(n, 0, 1, 0, 255);
                    stroke(c);
                    point(x, y);
                }
        }
}