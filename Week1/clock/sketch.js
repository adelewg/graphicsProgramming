//Global variables
var secLength = 160;
var secWidth = 1;
var minLength = 140;
var minWidth = 3;
var hourLength = 90;
var hourWidth = 5;

function setup() {
    createCanvas(900, 600);
    background(0);
}

function draw() {
    //redraw white background
    background(255);
    translate(width/2, height/2);
    ellipse(0,0,350,350);
    
    //second hand
    push();
    strokeWeight(secWidth);
    stroke(200,0,0);
    var secAngle = map(second(), 0, 60, 0, 360);
    rotate(radians(secAngle));
    line(0,0,0, -secLength);
    pop();
    
    //minute hand
    push();
    strokeWeight(minWidth);
    stroke(255);
    var minAngle = map(minute(), 0, 60, 0, 360);
    rotate(radians(minAngle));
    line(0,0,0, -minLength);
    pop();
    
    //hour hand
    push();
    strokeWeight(hourWidth);
    stroke(255);
    var hourAngle = map(hour(), 0, 12, 0, 360);
    rotate(radians(hourAngle));
    line(0,0,0, -hourLength);
        //the circle at the end of the hour hand
        push();
        translate(0, -hourLength + 8);
        ellipse(0,0,15,15);
        pop();
    
    pop();
    
    // Add the hour marks
    var hours = 12;
    var hourStep = 360 / hours;
    for(var i = 0; i < hours; i++)
        {
            push();
            stroke(255);
            rotate(radians(hourStep * i));
            translate(0, -155);
            line(0,0,0,10);
            
            pop();
        }
    
    

}
