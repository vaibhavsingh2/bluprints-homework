const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var r1,r2,r3,r4,r5,r6,r7;
var t1,t2,t3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    var ground_options ={
        isStatic: true
    }
        
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    r1=Bodies.rectangle(50,309,10,150);
    r2=Bodies.rectangle(80,339,50,80);
    r3=Bodies.rectangle(120,349,30,50);
    r4=Bodies.rectangle(185,369,100,30);
    r5=Bodies.rectangle(248,349,30,50);
    r6=Bodies.rectangle(289,339,50,80);
    r7=Bodies.rectangle(315,309,10,150);
    World.add(world,ground);

}

function draw(){
    background(0);
    rectMode(CENTER);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(r1.position.x,r1.position.y,10,150);
    rect(r2.position.x,r2.position.y,50,80);
    rect(r3.position.x,r3.position.y,30,70);
    rect(r4.position.x,r4.position.y,100,30);
    rect(r5.position.x,r5.position.y,30,70);
    rect(r6.position.x,r6.position.y,50,80);
    rect(r7.position.x,r7.position.y,10,150);
    text("MY OWN CASTLE",160,200);
    circle(310,210,0);
    circle(50,210,0);    
}