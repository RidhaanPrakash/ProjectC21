
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj, leftObj, rightObj;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	userEngine = Engine.create();
	userWorld = Engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}
	ball = Matter.Bodies.circle(50, 700, 5, ball_options, 1 );
    
	groundObj = new groundObj(width/2, 670, width, 20);
	leftObj = new ground(1100, 600, 20 , 120);
	rightObj = new ground(1000, 600, 20 , 120);

	groundObj.display;
	leftObj.display;
	rightObj.display;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keypressed(){

	if (keycode == UP_ARROW){
		Matter.Body.applyForce(ball,[ball.pos.x, ball.pos.y], 5)	;			
	}

}


