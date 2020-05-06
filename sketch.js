const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,pig1,pig2,log1,log2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    
    box1 = new Box(800,355,70,70);
    box2 = new Box(960,355,70,70);
    pig1 = new Pig(880,365)
    log1 = new Log(880,310,260,PI/2)

    box3 = new Box(800,265,70,70);
    box4 = new Box(960,265,70,70);
    pig2 = new Pig(880,275)
    log2 = new Log(880,220,260,PI/2)
    
    box5 = new Box(880,175,70,70);
    log3 = new Log(800,175,120,PI/4)
    log4 = new Log(960,175,120,-PI/4);

    bird1 = new Bird(200,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}