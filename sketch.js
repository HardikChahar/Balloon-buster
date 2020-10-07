var background;
var testingBackground;
var blueBalloon,blueBalloonImg;
var greenBalloon,greenBalloonImg;
var redBalloon,redBalloonImg; 
var pinkBalloon,pinkBalloonImg;
var bow,bowImage;
var arrow,arrowImg; 
var num;


function preload(){
  testingBackground=loadImage("background0.png");
  
  blueBalloonImg = loadImage("blue_balloon0.png");
  greenBalloonImg = loadImage("green_balloon0.png");
  redBalloonImg = loadImage("red_balloon0.png");
  bowImage=loadImage("bow0.png"); 
  arrowImg=loadImage("arrow0.png");
  pinkBalloonImg=loadImage("pink_balloon0.png")
}

function setup() {
  background("red");
  background = createSprite(200,200,30,30);
  background.addImage("a",testingBackground);
  
background.x = background.width /1.95;
 
  
  bow = createSprite(350,mouseY,10,100)
  bow.addImage("a",bowImage);
  
  //add code here
   
  background.velocityX=-4;
  background.scale=3;

  
arrow=createSprite(360,bow.y,10,10);
arrow.velocityX=-8;   
}

function draw() {
  //add code here
  if (background.x < 0) {
  background.x = background.width / 1.9;
}bow.y=mouseY;

  drawSprites();
  

  if(keyDown("space")&&arrow.x<200){
  bow.y=mouseY;
    arrow=createSprite(360,bow.y,10,10);
  arrow.addImage("a",arrowImg); 
    arrow.scale=0.35;
    arrow.velocityX=-8;
    arrow.lifetime=30;

}

 if(frameCount%40==0){
   num=Math.round(random(1,4));
   switch(num){
     case 1:blueBalloon=createSprite(Math.round(random(100,200)),390,10,10);
   blueBalloon.addImage("a",blueBalloonImg);
   blueBalloon.scale=0.1;
   blueBalloon.velocityY=-4;
   blueBalloon.lifetime=100;
       break;
           case 2:redBalloon=createSprite(Math.round(random(100,200)),390,10,10);
   redBalloon.addImage("a",redBalloonImg);
   redBalloon.scale=0.1;
   redBalloon.velocityY=-4;
   redBalloon.lifetime=100;
       break;   
       case 3:greenBalloon=createSprite(Math.round(random(100,200)),390,10,10);
   greenBalloon.addImage("a",greenBalloonImg);
   greenBalloon.scale=0.1;
   greenBalloon.velocityY=-4;
   greenBalloon.lifetime=100;
       break;
              case 4:pinkBalloon=createSprite(Math.round(random(100,200)),390,10,10);
   pinkBalloon.addImage("a",pinkBalloonImg);
   pinkBalloon.scale=1.4;
   pinkBalloon.velocityY=-4;
   pinkBalloon.lifetime=100;
       break;
       
   }

  }
 
}