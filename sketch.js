const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, box1, box2;
var pig1, log1;
var box3,box4, log2,pig2;
var backgroundImg;

var box5, log3,log4;
function preload(){
backgroundImg=loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);
    box1 = new Box(770,370,50,50);
    box2 = new Box(910,370, 50,50);
    pig1 = new Pig(840,370);
    log1 = new Log(840,350,210,PI/2);
    bird = new Bird(100,100);

    box3 = new Box(770,330,50,50);
    box4 = new Box(910,330, 50,50);
    pig2 = new Pig(840,330);
    log2 = new Log(840,320,210,PI/2);

    box5 = new Box(840,300, 50,50);
    log3 = new Log(770,280,150,PI/7);
    log4 = new Log(900,280,150,-PI/7);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();   
    box2.display(); 
    ground.display();
    pig1.display();
    log1.display();
    bird.display();

    box3.display();   
    box4.display(); 
    
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
}