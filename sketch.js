
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint 

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	roof= new Roof (400,40,600,50);

	bob1= new Bob(160,500,60);	
	bob2 = new Bob (280,500,60);
	bob3 = new Bob (401,500,60);
	bob4 = new Bob (522,500,60);
	bob5 = new Bob (642,500,60);

chain = new Chain(bob1.body,roof.body,-240,0);
chain2 = new Chain(bob2.body,roof.body,-120,0);
chain3 = new Chain(bob3.body,roof.body,0,0);
chain4 = new Chain(bob4.body,roof.body,120,0);
chain5 = new Chain(bob5.body,roof.body,240,0);

	
}


function draw() {
  Engine.run(engine);
  
  background("skyblue");
 

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  keyPressed();
//bob1.body.position.x = mouseX;
//bob1.body.position.y = mouseY;
  drawSprites();


 
}




/*function keyPressed (){

	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position, {x:-500 ,y:500});
	}
  }
	*/
  function keyPressed() { 
    if (keyCode === UP_ARROW) 
    { Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:-150}); } 
  } 
  

