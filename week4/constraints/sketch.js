// module aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var Runner = Matter.Runner;
var Bodies = Matter.Bodies;
var Composite = Matter.Composite;
var World = Matter.World;
var Constraint = Matter.Constraint;
var MouseContstraint = Matter.MouseConstraint;
var Mouse = Matter.Mouse;

var engine;
var ground;
var constraint1;
var poly1A;
var poly1B;

var poly2;
var constraint2;

var poly3;
var constraint3;

var canvas;



function setup() {
    var canvas = createCanvas(900, 600);
    
    //create an engine
    engine = Engine.create();
    
    poly1A = Bodies.polygon(700, 100, 6, 20);
    poly1B = Bodies.polygon(700, 250, 1, 20);
    constraint1 = Constraint.create({
        bodyA: poly1A,
        pointA: {x: 0, y: 0},
        bodyB: poly1B,
        pointB: {x: -10, y: -10},
        stiffness: 0.01
    });
    
    poly2 = Bodies.polygon(300, 200, 5, 40);
    
    constraint2 = Constraint.create({
        
        pointA: {x: 150, y: 120},
        bodyB: poly2,
        pointB: {x: -10, y: -10},
        stiffness: 0.001,
        damping: 0.05
    });
    
    poly3 = Bodies.polygon(400, 100, 4, 30);
    
    constraint3 = Constraint.create({
        
        pointA: {x: 400, y: 50},
        bodyB: poly3,
        pointB: {x: -10, y: -20},
        stiffness: 0.01
    });
  
    ground = Bodies.rectangle(width/2, height - 20, 800, 10, {isStatic: true, angle: Math.PI * 0.00});
    
    //add all of the bodies to the world
    World.add(engine.world, [ground, poly1A, poly1B, constraint1, poly2, constraint2, poly3, constraint3]);
    
    var mouse = Mouse.create(canvas.elt);
    var mouseParams = {
        mouse: mouse
            
    }
    
    var mouseConstraint = MouseContstraint.create(engine, mouseParams);
    
    // this line of code gets it to work on my high definitions screen
    mouseConstraint.mouse.pixelRatio = pixelDensity();
    World.add(engine.world, mouseConstraint);

}

function draw() {
    background(0);
    Engine.update(engine);
    
    fill(255);
    
    drawVertices(ground.vertices);
    drawVertices(poly1A.vertices);
    drawVertices(poly1B.vertices);
    drawVertices(poly2.vertices);
    drawVertices(poly3.vertices);
    
    stroke(128);
    strokeWeight(3);
    drawConstraint(constraint1);
    drawConstraint(constraint2);
    drawConstraint(constraint3);
    
  

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

// HELPER FUNCTIONS
function drawConstraint(constraint) {
  var offsetA = constraint.pointA;
  var posA = {x:0, y:0};
  if (constraint.bodyA) {
    posA = constraint.bodyA.position;
  }
  var offsetB = constraint.pointB;
  var posB = {x:0, y:0};
  if (constraint.bodyB) {
    posB = constraint.bodyB.position;
  }
  line(
    posA.x + offsetA.x,
    posA.y + offsetA.y,
    posB.x + offsetB.x,
    posB.y + offsetB.y
  );
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