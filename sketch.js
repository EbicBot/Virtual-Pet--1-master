const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var dog1,happyDog
var database,foodS,foodStock


function preload()
{
  dog1= loadImage("images/dogImg.png")
  
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 700);
  


  dog1 = createSprite(200,200,30,30);
}


function draw() {  
  drawSprites();
  
  if (keyWentDown(UP_ARROW)){
    dog1.addImage(happyDog)
  }

}



