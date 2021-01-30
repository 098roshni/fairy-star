var fairy,fairyImg;



function preload()
{
   //preload the images here
   fairyImg = loadImage(fairy.png);
   fairy1 = loadImage(fairy1.png);
   fairy2 = loadImage(fairy2.png);
}

function setup() {
  createCanvas(800, 750);
  fairy = createSprite(700,300,100,50);
  fairy1 = createSprite(700,300,100,50);
  fairy2 = createSprite(700,300,100,50);
}


function draw() {
  background("black");
drawSprites();
}
