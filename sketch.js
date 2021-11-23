var caixa;

function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200,50,50);
}

function draw() {
  background("black");
  drawSprites();
if(keyDown("up")){
  caixa.y -= 2;
}
if(keyDown("down")){
  caixa.y += 2;
}
if(keyDown("left")){
  caixa.x -= 2;
}
if(keyDown("right")){
  caixa.x += 2;
}
}




