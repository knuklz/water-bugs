var gWidth = 600;
var gHeight = 450;


// Variables
var grid = {
  height: gHeight,
  width: gWidth,
  contents:[]
}
var water = [];
// Setup
function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(600, 450);
}
// Init 
/*

windowHeight/grid.height
^ Grid height


// Setup Grid

// Loop through Rows

// Loop Through Columns


*/

// functions
var drop = function (xCoord,yCoord, pxlColour) {
  this.colour = pxlColour;
  this.x = xCoord;
  this.y = yCoord;
  this.size = 1;
  this.update = function() {
    this.y = this.y + 1;
  }
  this.draw = function() {
    noStroke();
    fill(this.colour);
    square(this.x,this.y,this.size);
  }
  
}

function addDrop(){
  var newDrop;
  newDrop = new drop(mouseX,mouseY,'blue');
  water.push(newDrop);
}


// GameLoop
function draw() {
  background(220); // Draw the Grey Background
  if(mouseIsPressed){
    addDrop();
  }
  water.forEach((item) => {
    item.update();
    item.draw();
  });
 
}


