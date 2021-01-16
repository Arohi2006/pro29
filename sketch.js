const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11,box12,box13,box14, box15, box16,
box17, box18, box19, box20, box21;
var ground1, ground2;
var polygon, polygonImage;
var slingShot;

function preload (){
  polygonImage = loadImage("polygon.png");
}
function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
    world = engine.world;

    // 1st Tower

    box1 = new Box(250,250,50,50);
    box2 = new Box(300,250,50,50);
    box3 = new Box(350,250,50,50);
    box4 = new Box(400,250,50,50);   
    box5 = new Box(280,200,50,50);
    box6 = new Box(330,200,50,50);
    box7 = new Box(380,200,50,50);
    box8 = new Box(310,150,50,50);
    box9 = new Box(360,150,50,50);
   box10 = new Box(340,100,50,50);

   // 2nd Tower

    box11 = new Box(550,400,50,50);
    box12 = new Box(600,400,50,50);
    box13 = new Box(650,400,50,50);
    box14 = new Box(700,400,50,50);
    box15 = new Box(580,350,50,50);
    box16 = new Box(630,350,50,50);
    box17 = new Box(680,350,50,50);
    box18 = new Box(610,300,50,50);
    box19 = new Box(660,300,50,50);
    box20 = new Box(640,250,50,50);

    ground1 = new Ground(320,550,250,10);
    ground2 = new Ground(620,450,255,10);

    polygon = Bodies.circle(50,200,20);
    World.add(world, polygon);
    slingShot = new SlingShot(this.polygon,{x:100,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();


  ground1.display();
  ground2.display();
image(polygonImage, polygon.position.x, polygon.position.y, 40, 40);
  slingShot.display();
 
}
function mouseDragged(){

      Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
      slingShot.fly();
   
  }
