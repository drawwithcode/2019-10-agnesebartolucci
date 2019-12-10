function preload(){
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(60, 60, 60);

  var posX = mouseX - height/1.2;
  var posY = mouseY - width/1.2;

  pointLight(255, 85, 255, posX, posY, 0);
  pointLight(0, 255, 55, -posX, posY, 0);
  pointLight(45, 100, 255, posX, -posY, 0);

  camera(posX, posY, 50, -50, 0, 0, 0, 1, 0);

  noStroke();
  ambientMaterial(255);
  rotateX(posX);
  torus(150, 50);
}
