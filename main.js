
// Variables
var grid = {
  height: 20,
  width: 30,
  contents:[]
}

// Setup
function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(600, 450);
}
// Init 
/*

windowHeight/grid.height
^ Grid height



*/

// functions

var waterBlock = function(x,y,c) {
  this.x = x;
  this.y = y;
  this.c = c;
  this.size = 10;
  this.draw = function (){
    fill(c);
   // strokeWeight(1);
   // stroke(51);
    square(this.x, this.y, this.size);
  }
}

var test;
test = new waterBlock(10,10,"blue");
// GameLoop
function draw() {
  background(220); // Draw the Grey Background
  
  test.draw();
}
