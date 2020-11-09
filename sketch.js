var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = 'purple'
  fixedRect.debug= true;
  fixedRect.velocityX=2

  movingRect= createSprite(600, 200, 50, 50);
  movingRect.shapeColor = 'purple'
  movingRect.debug= true;
  movingRect.velocityX=-2;

}

function draw() {
  background(110,200,10);
  
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
 fixedRect.velocityX= fixedRect.velocityX * (-1)
 movingRect.velocityX= movingRect.velocityX * (-1)
}

  drawSprites();
}