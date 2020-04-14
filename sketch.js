
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(2000,400);
  
}


function draw(){
  background(r,g,b);
  r=map(mouseX,1000,100,0,250);
  g=map(mouseX,400,1000,130,98,230);
  b=map(mouseX,400,100,79,140);
  ellipse(mouseX,50,10,10);
  ellipse.visible=false;
}