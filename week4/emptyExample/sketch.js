// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;
    World = Matter.World;

var engine;
var box1;
var ground1, ground2;
var circle, polygon;
var boxes = [];


function setup() {
    createCanvas(900, 600);
    
    //create an engine
    engine = Engine.create();
    
    box1 = Bodies.rectangle(200, 200, 80, 80, {restitution: .8, friction: 0.01});
    
    
   
    ground1 = Bodies.rectangle(100, 200, 500, 10, {isStatic: true, angle: Math.PI * 0.06});
    ground2 = Bodies.rectangle(400, 500, 500, 10, {isStatic: true, angle: Math.PI * -0.06});
    
    //add all of the bodies to the world
    World.add(engine.world, [box1, ground1, ground2]);

}

function draw() {
    background(0);
    Engine.update(engine);
    
    fill(255);
    drawVertices(box1.vertices);
    
    generateObjects(width/2, 0);
    
    for(var i = 0; i < boxes.length; i++)
        {
            drawVertices(boxes[i].vertices);
        }
   
    
    fill(125);
    drawVertices(ground1.vertices);
    drawVertices(ground2.vertices);
  

}

function generateObjects(x, y) {
    var b = Bodies.rectangle(x, y, random(10,30), random(10,30), {restitution: 0.8, friction: 0.5});
    boxes.push(b);
    World.add(engine.world, [b]);
}

function drawVertices(vertices)
{
    beginShape();
    for(var i = 0; i < vertices.length; i++)
        {
            vertex(vertices[i].x, vertices[i].y);
        }
    endShape(CLOSE);
}