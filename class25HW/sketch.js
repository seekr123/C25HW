
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box();
	ground=new Ground(800,480,1600,40);
	paper=new Paper(200,455,70);
	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  
  background('white');
  
  paper.display();
  box1.display();
  ground.display();  

   
}

function keyPressed(){
	
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-120})
	}


}



