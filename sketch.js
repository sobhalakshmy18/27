
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof = new Roof(800, 50, 700, 50);
	bob1 = new bob(560, 600, 120);
	bob2 = new bob(680, 600, 120);
	bob3 = new bob(800, 600, 120);
	bob4 = new bob(920, 600, 120);
	bob5 = new bob(1040, 600, 120);

	rope1 = new rope(bob1.body, roof.body, -240, 0);
	rope2 = new rope(bob2.body, roof.body, -120, 0);
	rope3 = new rope(bob3.body, roof.body, 0, 0);
	rope4 = new rope(bob4.body, roof.body, 120, 0);
	rope5 = new rope(bob5.body, roof.body, 240, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("snow");
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1200,y:1200});
	}

	if (keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:1200,y:-1200});
	}
}

