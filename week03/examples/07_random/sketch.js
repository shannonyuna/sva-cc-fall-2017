// Example 4-7: Filling variables with random values

var r;
var g;
var b;
var a;

var size;
var x;
var y;

function setup() {
  createCanvas(640, 480);
  //background(0);
}

function draw() {
  // Each time through draw(), new random
  // numbers are picked for a new ellipse.
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(255);
  size = random(20);
  var widthAmout = 20;
  x = random(widthAmout) - widthAmout/2 + mouseX;
  y = random(widthAmout) - widthAmout/2 + mouseY;

  // Use values to draw an ellipse
  //noStroke();
  strokeWeight(random(10));
  stroke(r, g, b, a);
  line(x, y, mouseX, mouseY);
}
