var cityBgImage, cityBg;
var girlImage , girl;
var goldImage, treasure;
var diamondImage;
var coinImage;
var hurdleImage, hurdle;
var hurdle2Image, hurdle2;

function preload() {
  cityBgImage = loadImage('pictures/city bg2.webp');
  girlImage = loadImage('pictures/girl.png');
  diamondImage = loadImage('pictures/diamond.png');
  coinImage = loadImage('pictures/coin.png');
  goldImage = loadImage('pictures/gold.png');
  hurdleImage = loadImage('pictures/hurdle.png');
  hurdle2Image = loadImage('pictures/hurdle2.webp');
}

function setup() {
  createCanvas(1300,520);
  cityBg = createSprite(650,260);
  cityBg.addImage(cityBgImage);
  //cityBg.velocityX = -2

  girl = createSprite(60,410);
  girl.addImage(girlImage);
  girl.scale = 0.1;


}

function draw() {
  background(255,255,255); 
  spawnTreasure(); 
  drawSprites();
}

function spawnTreasure() {
  if(frameCount % 80 === 0) {
 treasure = createSprite(1300,100)
 treasure.velocityX = -3;
  }
}