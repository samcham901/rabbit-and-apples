var garden,rabbit;
var gardenImg, rabbitImg;
var appleImg, apple;
var leafImg, leaf;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating bunny

  rabbit = createSprite(mouseX,340,30,30);
rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if (keyDown("up"))
  {
    rabbit.y=rabbit.y-5
  }
  if (keyDown("down"))
  {
    rabbit.y=rabbit.y+5
  }
  if (keyDown("left"))
  {
    rabbit.x=rabbit.x-5
  }
  if (keyDown("right"))
  {
    rabbit.x=rabbit.x+5
  }
  
appleMaker()
leafMaker()
  drawSprites();
}
function appleMaker() {
  if (frameCount % 60 == 0) {
    apple = createSprite(random(10,390), 0)
    apple.addImage(appleImg)
    apple.scale = 0.1
    apple.velocityY = 3
    apple.lifetime=130
  }
}

function leafMaker() {
  if (frameCount % 50 == 0) {
    leaf = createSprite(random(10,390), 350)
    leaf.addImage(leafImg)
    leaf.scale = 0.1
    leaf.lifetime=34
  }
}