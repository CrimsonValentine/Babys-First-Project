function setup() {
  // put setup code here
createCanvas(500, 500);
background(255, 255, 0)
}


function draw() {
  // put drawing code here

  // This line paints the background
  
//   fill (255, 0, 0);
// ellipse(width/2, height/2, 300, 300);
// fill (255, 255, 255);
// ellipse(260, 260, 285, 285);

let xpos = mouseX + random(-100,100)
let ypos = mouseY + random(-100,100)
fill (random(255), random(255), random(255));
ellipse(xpos, ypos, 100, 100);


textSize(50)
text("I am the void", 5, height/2)
fill (random(255), random(255), random(255));


}