var fixedRect, movingRect;
var go1,go2,go3,go4;
var obj1,obj2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1 = createSprite (100,100,50,50);
  go2 = createSprite (200,100,50,50);
  go3 = createSprite (300,100,50,50);
  go4 = createSprite (400,100,50,50);

go6 = createSprite(400, 100, 50, 80);
go6 .shapeColor = "green";
go6 .debug = true;
  go5 = createSprite(400, 800,80,30);
  go5.shapeColor = "green";
  go5.debug = true;

  go5.velocityY = -5;
  go6.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(go1,movingRect)){
  go1.shapeColor = "red";
  movingRect.shapeColor = "red";
}else{
  movingRect.shapeColor = "green";
  go1.shapeColor = "green";
}
 bounceOff(go5,go6);
  drawSprites();
}

