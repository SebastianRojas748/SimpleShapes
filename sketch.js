
// Setup code goes here
function setup() {
  createCanvas(1200, 800);
  print("starting up Simple Shapes");
 }


// Draw code goes here
function draw() {
  background(34,50,204);
  fill(255,0,0);
  rect(50,50,200,100);
  stroke (210,45,67);
  strokeWeight(6);

  fill(67,33,23);
  rect(100,300,400,120);

  fill(57,34,83);
  circle(width/2,height/2,20);

fill(17,14,13);
  ellipse(width-300, height/2, 70, 200);
  ellipse(width-300, height/2, 300, 500);

  drawRects();
 
}
function drawRects() {
	fill(25,25,67);
	rect(200,400,40,10);
	rect(300,500,40,10);
	rect(400,600,40,10);
	rect(500,700,40,10);
	rect(600,800,40,10);
}