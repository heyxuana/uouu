function setup(){
  createCanvas(640,360);

}

function draw() {


  noStroke();
  var c = color(0, 126, 255, 102);
  fill(c);
  rect(15, 15, 35, 70);
  var value = alpha(c); // Sets 'value' to 102
  fill(value);
  rect(50, 15, 35, 70);

}
