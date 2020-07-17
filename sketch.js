//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var dust1,dust2,dust3;
var paper,slingshot;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,670,1200,20);
	dust1=new Dustbin(600,660,120,20);
	dust2=new Dustbin(550,630,20,120);
	dust3=new Dustbin(650,630,20,120);
	paper=new Paper(250,630,20,20);
	slingshot = new SlingShot(paper.body,{x:50, y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  dust1.display();
  dust2.display();
  dust3.display();
  paper.display();
  slingshot.display();    
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
