const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,550,70,70);
    box2 = new Box(900,550,70,70);
    pig1= new Pig(800,550);
    log1=new Log(800,505,300,PI/2 )

    box3 = new Box(700,460,70,70);
    box4 = new Box(900,460,70,70);
    pig2= new Pig(800,460);
    log2=new Log(800,415,300,PI/2 );

    box5=new Box(800,370,70,70);
    log3=new Log(850,370,150,PI/-4);
    log4=new Log(750,370,150,PI/4);

    bird = new Bird(40,80)

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(200);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();  
    log4.display(); 

    bird.display();

    ground.display();
}