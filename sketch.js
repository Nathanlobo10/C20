
var car 
var bike
var bat,ball




function setup() {
  createCanvas(800,400);
car = createSprite(200, 200, 60, 50);
car.shapeColor = "blue" 
bike = createSprite(400,200,30,40);
bike.shapeColor = "green"
bat = createSprite (100,100,10,20)
bat.shapeColor = "white"
bat.velocityX = 2
ball = createSprite(400,100,10,10)
ball.shapeColor = "white"
ball.velocityX = -2

}


function draw() {
  background("purple");
  bike.x = mouseX
  bike.y = mouseY
console.log(bike.x - car.x)

// the condistion for detecting collision
if(bike.x - car.x < bike.width/2 + car.width/2  && car.x - bike.x < bike.width/2 + car.width/2 
  && bike.y - car.y < bike.width/2 + car.width/2 && car.y - bike.y <bike.width/2 + car.width/2  ){
bike.shapeColor = "red"
car.shapeColor = "red"  
}
else{
  car.shapeColor = "blue" 
  bike.shapeColor = "green"
   
}  
if(ball.x - bat.x < ball.width/2 + bat.width/2  && bat.x - ball.x < ball.width/2 + bat.width/2 
  && ball.y - bat.y < ball.width/2 + bat.width/2 && bat.y - ball.y <ball.width/2 + bat.width/2  ){
ball.velocityX = ball.velocityX * -1 
bat.velocityX = bat.velocityX * -1
  }

  drawSprites();
}