// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    World = Matter.World,
    Body = Matter.Body;

var engine;
var box1;
var ground1, ground2;
var circle, polygon;
var boxes = [];
var propeller;
var angle = 0;
var angleSpeed = 0.1;


function setup() {
    createCanvas(900, 600);
    
    //create an engine
    engine = Engine.create();
    
    box1 = Bodies.rectangle(200, 200, 80, 80, {restitution: .8, friction: 0.01});
    
    
   
    ground = Bodies.rectangle(400, 500, 500, 10, {isStatic: true, angle: Math.PI * -0.06});
    //ground2 = Bodies.rectangle(400, 500, 500, 10, {isStatic: true, angle: Math.PI * -0.06});
    propeller = Bodies.rectangle(width/2, height/2, 300, 15, {isStatic: true, angle: angle});
    //add all of the bodies to the world
    World.add(engine.world, [box1, ground, propeller]);

}

function draw() {
    background(0);
    Engine.update(engine);
    
    fill(255);
    drawVertices(box1.vertices);
    drawVertices(propeller.vertices);
    
    Body.setAngle(propeller, angle);
    Body.setAngularVelocity(propeller, angleSpeed);
    angle += angleSpeed;
    
    if (random(1) < 0.2) generateObjects(width/2, 0);
    
    for(var i = 0; i < boxes.length; i++)
        {
            drawVertices(boxes[i].vertices);
            if(isOffScreen(boxes[i]))
                {
                    World.remove(engine.world, boxes[i]);
                    boxes.splice(i, 1);
                    //the reason we go back and index is because of the way that the splice function works - it will skip an index if we do not check that index number again
                    i--;
                }
        }
   
    
    fill(125);
    drawVertices(ground.vertices);
    //drawVertices(ground2.vertices);
  

}

function generateObjects(x, y) {
    var b = Bodies.rectangle(x, y, random(10,30), random(10,30), {restitution: 0.8, friction: 0.5});
    boxes.push(b);
    World.add(engine.world, [b]);
}


//we need this function so that we can remove bodies that are not in the screen so that our graphics are fast and crisp
function isOffScreen(body){
    var pos = body.position;
    return(pos.y > height || pos.x < 0 || pos.x > width);
    
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