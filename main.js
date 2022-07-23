
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
var pxl = function (xCoord,yCoord, pxl) {

}

var waterBlock = function(x,y,c) {
  this.x = x;
  this.y = y;
  this.c = c;
  this.size = 10;
  this.draw = function (){
    fill(c);
    strokeWeight(0);
    noStroke();
    noSmooth();
    square(this.x, this.y, this.size);
  }
}

var test;
var test2;
test2 = new waterBlock(20,10,"blue");
test = new waterBlock(10,10,"blue");
// GameLoop
function draw() {
  background(220); // Draw the Grey Background
  
  test.draw();
  test2.draw();
}

