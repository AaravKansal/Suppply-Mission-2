var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxLeftSprite,boxRightSprite,boxMiddleSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	boxLeftSprite=createSprite(width/2-100,610,20,100)
	boxLeftSprite.shapeColor="red";

	boxRightSprite=createSprite(width/2+200,610,20,100)
	boxRightSprite.shapeColor="red";
	
	boxMiddleSprite=createSprite(width/2+50,650,300,20)
	boxMiddleSprite.shapeColor="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	packageBody.visible=false;
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

   

	Engine.run(engine);


   
	
}


function draw() {
  rectMode(CENTER);
  background(0);

if (keyDown ("LEFT_ARROW")) {
	helicopterSprite.x=helicopterSprite.x-4;
}

if (keyDown ("RIGHT_ARROW")) {
	helicopterSprite.x=helicopterSprite.x+4;
}

  keyPressed();
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyDown ("DOWN_ARROW")) {
	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:false,restitution:0.6});
	packageBody.x=helicopterSprite.x;
	World.add(world, packageBody);
	packageBody.visible=true;
	return true;
  }
}



