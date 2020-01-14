function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(50);

  var posX = mouseX - height/1.2;
  var posY = mouseY - width/1.2;

  pointLight(255, 85, 255, posX, posY, 0);
  pointLight(0, 255, 55, -posX, posY, 0);
  pointLight(255, 70, 0, posX, -posY, 0);

  noStroke();
  ambientMaterial(255);
  rotateY(frameCount);
  sphere(100);

  noStroke();
  specularMaterial(100);
  rotateX(50);
  torus(150, 15);

  noStroke();
  ambientMaterial(255);
  rotateZ(frameCount);
  translate(400, 0);
  sphere(30);

  noStroke();
  specularMaterial(100);
  rotateY(frameCount);
  translate(80, 0);
  sphere(15);
}
