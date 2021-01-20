var knife,knifeImage;
var play=1;
var end =0;
var gamestate=1;
var fruit,fruit1,fruit2,fruit3,fruit4,fruitGroup;
var monster,monsterImage,aaravGroup;
var score=0,gameover,gameoverImage;
function preload(){
  knifeImage=loadImage("sword.png")
 fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  monsterImage=loadImage("alien1.png")
  gameoverImage=loadImage("gameover.png")
}
function setup(){
  createCanvas(600,600);
  //create sprite hear
  gameover=createSprite(300,250,40,40);
  knife=createSprite(100,230,40,50)
  //addImage hear
  knife.addImage(knifeImage)
  gameover.addImage(gameoverImage)
  //scale the sprite hear
  knife.scale=0.5
  //create group
  fruitGroup=createGroup();
  aaravGroup=createGroup();
  //gduygfuyagfyuegyfugeuyfge
  
}
function draw(){
  background("yellow")
drawSprites(); 
 // call function
  fruite();
  aarav();
  //setting P
  knife.x = mouseX;
  knife.y = mouseY;
  if(fruitGroup.isTouching(knife)){
    fruitGroup.destroyEach();
    score=score+2
  }
  if(aaravGroup.isTouching(knife)){
    gamestate=0;
  }
  fill("black")
  textSize(20);
  text("score="+score,50,20);
 
  
  if(gamestate===1){
    gameover.visible=false;
  }
  if(gamestate===0){
    gameover.visible=true;
    fruit.visible=false;
    monster.visible=false;
    knife.visible=false;
    score=0
    monster.velocityX=0;
    fruit.velocityX=0;
  }
  
  
  
  
  
  
}
function fruite(){
  if(World.frameCount%40===0){
    fruit=createSprite(600,200,20,20);
    fruit.scale=0.2
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1);
    }else if(r==2){
      fruit.addImage(fruit2);
    }else if(r==3){
      fruit.addImage(fruit3);
    }else{
      fruit.addImage(fruit4);
    }
    fruit.y=Math.round(random(50,340));
    fruit.velocityX=-20;
    fruit.setlifetime=100;
    fruitGroup.add(fruit)
  }
  
}


function aarav(){
  if(frameCount%200===0){
    monster=createSprite(600,200,20,20);
    monster.addImage("moving",monsterImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-22;
    monster.setlifetime=50;
    
    aaravGroup.add(monster)
  }
  
}
  
