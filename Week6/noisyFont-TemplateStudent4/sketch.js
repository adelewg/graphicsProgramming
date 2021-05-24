var points;
var font;

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
    fill(0,5);
    rect(0,0,width,height);

    // **** Your code here ****
    // Bonus 3: Play with the size of the dots.
    let size = random(1, 7);
    // Bonus 1: Play with amt. Set it to be dependent on mouseX and have it range from 0 to 80. (Hint: use map() for that)
    var amt = map(mouseX, 0, width, 20, 80);
    // Bonus 4: Play with the trail the particles leave by modifying the fill of the rect in the draw function. Connect it with mouseY!
    var alpha = map(mouseY, 0, height, 0, 255);
    var time = frameCount / 50;
    noStroke();
    
    
    
    // Bonus 2: Play with different colors.
    // change color in every 200 frames
    var every200 = Math.floor(frameCount / 200);
    if (every200 % 3 == 0) {
        fill(255, 104, 204, alpha);
    } else if (every200 % 3 == 1) {
        fill(0, 255, 255, alpha);
    } else {
        fill(153, 255, 51, alpha);
    }
    
    // Step 2
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        // Step 3
        // Step 4
        var nX = noise(time + point.x + point.y);
        var locX = map(nX, 0, 1, -amt, amt);
        // Step 5
        var nY = noise(time + point.x + point.y + 100);
        var locY = map(nY, 0, 1, -amt, amt);
        circle(point.x + locX, point.y + locY, size);
    }
}
