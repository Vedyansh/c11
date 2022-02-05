
var trex ,trex_running,ground
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")


}

function setup(){
  createCanvas(600,200)
  //create a trex sprite
 trex = createSprite(50,150,50,50)
 trex.scale = 0.75
 trex.addAnimation("runing",trex_running)
 ground = createSprite(300,200,600,20)
 
}

function draw(){
  background("white")
 
if (keyDown("space")) {
trex.velocityY=-15
}
trex.velocityY=trex.velocity=+1
trex.collide(ground)
drawSprites()
}
