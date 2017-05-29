function setup() {
  createCanvas(600, 750);
  background('white');
}

function draw() {
  noStroke();
  var long = getRandomInt(35, 560);
  var lat = getRandomInt(50, 500);
  var length = getRandomInt(80, 200);

  fill('black');
  rect(long, lat, 10, length);

  fill('white');
  setTimeout(function() { rect(long, lat, 10, length); }, 1000);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
