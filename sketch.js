var start;
var gameState;
var START = 0;
var PLAY = 1;
var block = []

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup(){

  createCanvas(displayWidth,displayHeight);

  engine = Engine.create();
  world = engine.world;

  spawnCubes();

  start = createSprite(500,500,175,50);
  start.shapeColor = "Lime"

  barriers = new Barriers();

  gameState = START;
  
}

function draw(){

  Engine.update(engine);

//Background Coloring

  background("black"); 

  drawSprites();

//Start State

  if(gameState === START){

    //Title

      textSize(150);
      fill("White");
      text("T-Block",230,300);

    //Start Button

      textSize(50);
      fill("White");
      text("START",420,517.5)

  }

  if(gameState === PLAY){
    
    start.x = 10000;
    start.y = 10000;

    background("grey");

    for(r = 0; r < block.length; r++){

      block[r].display();
  
    }

  }

  if(mousePressedOver(start)){

    gameState = PLAY;

  }

}

function spawnCubes(){

  var r = (Math.round(random(10,20)));

  for(i = 0; i < r; i++){

    block.push(new Block(random(100,450),100));

  }

}