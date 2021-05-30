var knife, knifeImg;

var vegetable, vegetablesGroup, randomVegetable, carrotImg,
broccoliImg, cucumberImg, lettuceImg, gingerImg,
corainderImg, basilImg, squashImg;

var position;

var PLAY = 1;
var END = 0;
var gameState = 1;

var score = 0;

function preload(){
  carrotImg = loadImage("images/carrot1.png")
  broccoliImg = loadImage("images/broccoli1.png")
  cucumberImg = loadImage("images/cucumber1.png")
  //zucchiniImg = loadImage("images/zucchini1.png")
  lettuceImg = loadImage("images/lettuce1.png")
  gingerImg = loadImage("images/ginger1.png")
  corianderImg = loadImage("images/coriander1.PNG")
  basilImg = loadImage("images/basil1.png")
  squashImg = loadImage("images/squash1.png")
  
  knifeImg = loadImage("images/knife1.PNG")
}

function setup(){
  createCanvas(1500, 600);

  knife = createSprite(50, 50, 50, 50);
  knife.addImage("knife", knifeImg);
  knife.scale = 0.35
  knife.setCollider("rectangle", 0, 0, 40, 40)

  vegetableGroup = createGroup()
}

function draw(){
  background("lightblue");

  if(gameState === PLAY){
    vegetables();

    knife.x = mouseX;
    knife.y = mouseY;

    if (vegetableGroup.isTouching(knife)){
      vegetableGroup.destroyEach();

      score += 2;
    }
  }
  drawSprites();

  textSize(25);
  text("Score: " + score, 700, 50);
}

function vegetables(){
  if (World.frameCount % 80 === 0){
    position = Math.round(random(1, 2));
    console.log(position);

    vegetable = createSprite(400, 200, 20, 20);

    if (position === 1){
      vegetable.x = 1500;
      vegetable.velocityX = -(15 + (score/4));
    } else {
        if (position === 2){
          vegetable.x = 0;
          vegetable.velocityX = 15 + (score/4);
        }
    }

    vegetable.scale = 0.2;
    r = Math.round(random(1, 8));

    if (r === 1){
      vegetable.addImage(carrotImg);
    } else if(r === 2){
      vegetable.addImage(broccoliImg);
    } else if (r === 3){
      vegetable.addImage(cucumberImg);
    } else if (r === 4){
      vegetable.addImage(lettuceImg);
    } else if (r === 5){
      vegetable.addImage(gingerImg);
    } else if (r === 6){
      vegetable.addImage(corianderImg);
    } else if (r === 7){
      vegetable.addImage(basilImg);
    } else {
      vegetable.addImage(squashImg);
    }

  vegetable.y = Math.round(random(50, 550));

  vegetable.setLifetime = 100;

  vegetableGroup.add(vegetable);
  }
}