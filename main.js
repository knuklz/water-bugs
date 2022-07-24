
// Variables
var grid = {
  height: 20,
  width: 30,
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



*/

// functions
var drop = function (xCoord,yCoord, pxlColour) {
  this.colour = pxlColour;
  this.x = xCoord;
  this.y = yCoord;
  this.size = 5;
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
  water.push(new drop(mouseX,mouseY,'blue'));
}


// GameLoop
function draw() {
  background(220); // Draw the Grey Background
  while(mouseIsPressed){
    addDrop();
  }
  water.forEach((item) => {
    item.update();
    item.draw();
  });
 
}


