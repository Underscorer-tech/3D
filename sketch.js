function setup() {
  createCanvas(600, 400,WEBGL);


}

function draw() {
  background("white");
 
  fill(mouseY,mouseX,150);
  stroke("black");
  
  rotateX(frameCount * 0.01 );
  rotateY(frameCount * 0.01 );  
  box(100);
  sphere.scale=0.02
}