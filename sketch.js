
var movingRect,fixedRect;

function setup() {



  createCanvas(800,400);
   movingRect=createSprite(600, 400, 50, 80);
   movingRect.shapeColor="red";
   movingRect.debug=true;


   fixedRect=createSprite(400,200,80,30);
  fixedRect.shapeColor="red";
 // fixedRect.debug=true;
}

function draw() {
  background(255,255,255);  

movingRect.x=mouseX;

movingRect.y=mouseY;



if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x< fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y< fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y< fixedRect.height/2+movingRect.height/2)
{
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
}
else{
  movingRect.shapeColor="red"
  fixedRect.shapeColor="red"
}

  drawSprites();
}