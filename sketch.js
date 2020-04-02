var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var sun;


function setup() {
  createCanvas(800,800);
    mercury=createSprite(200, 200, 50, 50);
    venus=createSprite(260, 200, 50, 50);
    earth=createSprite(320, 200, 50, 50);
    mars=createSprite(380, 200, 50, 50);
    jupiter=createSprite(440, 200, 50, 50);
    saturn=createSprite(500, 200, 50, 50);
    uranus=createSprite(560, 200, 50, 50);
    neptune=createSprite(620, 200, 50, 50);
    sun=createSprite(730,200,100,100);

}

function draw() {
  background(255,255,255);  
 sun.x=World.mouseX;
 sun.y=World.mouseY;

 if(isTouching(sun,mercury)){
   mercury.visible=false;
 }
 if(isTouching(sun,venus)){
   venus.visible=false;
 }
 if(isTouching(sun,earth)){
earth.visible=false;
 }
 if(isTouching(sun,mars)){
   mars.visible=false;
 }
 if(isTouching(sun,jupiter)){
jupiter.visible=false;
 }
if(isTouching(sun,saturn)){
  saturn.visible=false;
}
if(isTouching(sun,uranus)){
  uranus.visible=false;
}
if(isTouching(sun,neptune)){
  neptune.visible=false;
}
drawSprites();
 }
function isTouching(object1,object2){
if(object2.x-object1.x<=object1.width/2+object2.width/2
&&object1.x-object2.x<=object1.width/2+object2.width/2
&&object2.y-object1.y<=object1.height/2+object2.height/2
&&object1.y-object2.y<=object1.height/2+object2.height/2){

  return true;
}


else{ return false ;}



}