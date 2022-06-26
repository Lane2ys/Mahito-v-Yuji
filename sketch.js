var Yuji;
var Mahito;
var MahitoImg;
var YujiImg;
var curse;
var invis;
var invisGroup;

function preload(){
MahitoImg = loadImage("Mahito.png");
YujiImg = loadImage("Yuji.png");
download = loadImage("download.jpg")



}

function setup() {
createCanvas(800,800);
Yuji = createSprite(200,700,10,10);
Yuji.addImage("Yuji", YujiImg ); 
Yuji.scale = 0.2;


curse = new Group;
invisGroup = new Group;

}


function spawnObstacles(){

if(frameCount % 90 == 0){
Mahito = createSprite(200,50,10,10);
Mahito.addImage("Mahito", MahitoImg);
Mahito.scale = 0.2; 

invis = createSprite(200,150,30,30);
invis.scale = 0.5;
  invis.visible = false;
  
  invisGroup.add(invis);

curse.add(Mahito);

Mahito.x = Math.round (random(100,300));
Mahito.velocityY = 4;
invis.x = Mahito.x;
invis.velocityY = 4;


Mahito.lifetime = 200;

}
   
}

 
 
     



function draw() {
 background(download);  
 
 spawnObstacles();

 drawSprites(); 

 Yuji.x = World.mouseX;

 if (invisGroup.isTouching(Yuji)){
   Yuji.destroy();
   curse.destroy();

}
 
}
