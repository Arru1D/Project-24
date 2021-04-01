var paperBall;
var line1, line2, line3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,height,1200,30);
    paperBall = new Paper(50, 600, 10);

	line1 = new Box(650, 675, 190, 20);
	line2 = new Box(550, 635, 20, 100);
	line3 = new Box(750, 635, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  //dustbin.display();
  line1.display();
  line2.display();
  line3.display();
  paperBall.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:15,y:-15});
	}
}

