
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Ball(100, 200, 20);
	bobObject2 = new Ball(140, 200, 20)
	bobObject3 = new Ball(180, 200, 20)
	bobObject4 = new Ball(220, 200, 20)
	bobObject5 = new Ball(260, 200, 20)

	
	roof = new Roof(400, 100, 200, 20);

	bobDiameter1 = 30;

	rope1 = new Rope(bobObject1.body, roof.body,-80, 0);
	rope2 = new Rope(bobObject2.body, roof.body,-40, 0);
	rope3 = new Rope(bobObject3.body, roof.body,0, 0);
	rope4 = new Rope(bobObject4.body, roof.body,40, 0);
	rope5 = new Rope(bobObject5.body, roof.body,80, 0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -30, y: -45});
		//Matter.Body.applyForce(bobObject2.body, bobObject2.body.position, {x: -54, y: -54});
	}
}


