var sounds=[]
var ron;
function preload(){
sounds[0]=loadSound("Right (Frost).wav")
sounds[1]=loadSound("Right (Frost).wav");
sounds[2]=loadSound("Right (Frost).wav");
sounds[3]=loadSound("Right (Frost).wav");}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function keyPressed(){  
  if(key=="a"){sounds[0].play();sounds[0].rate(1);}
  if(key=="d"){sounds[1].play();sounds[1].rate(1.5);}
  if(key=="w"){sounds[2].play();sounds[2].rate(1.75);}
  if(key=="s"){sounds[3].play();sounds[3].rate(1.25);}
}