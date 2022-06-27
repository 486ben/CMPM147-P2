/* exported setup, draw */
let seed = 12345;

//the color of ocean
const OceanColor = "#0CAFFF";
//the color of sky
const SkyColor = "#6CB4EE";
//the color of mountain.
const mountain = "#008b8b";
//the second color of mountain.
const secondmountain = "#23904F";
//the third color of mountain.
const thirdmountain = "#47DA74";

const treeColor = "#3d1803";
const leaveColor = "#233610";
const windColor = "";
//const sunColor = [254,254,254,80]; // with opacity

function preload() {
  // runs before setup 
  // use if you want to load any large files and want to make sure they load before setup()
}

function setup() {
createCanvas(1200, 800);
createButton("reroll").mousePressed(() => seed++);
}

function draw() {
randomSeed(seed);

background(100);

noStroke();

fill(SkyColor);
rect(0, 0, width, height / 2);

// An example of making something respond to the mouse
fill(windColor);
// ellipse(mouseX,0,30,30);
// ellipse(mouseX,0,50,50);
// ellipse(mouseX,0,100,100);
// ellipse(mouseX,0,200,200);
// ellipse(mouseX,50,30,30);
// ellipse(mouseX,50,30,30);

//shape of the wind
circle(mouseX,50,30,30);
circle(mouseX,30,30,30);
circle(mouseX+25,50,30,30);
circle(mouseX+25,30,30,30);
circle(mouseX+45,40,30,30);
circle(mouseX,40,30,30);
circle(mouseX-25,40,30,30);

//second wind
circle(mouseX+150,50,30,30);
circle(mouseX+150,30,30,30);
circle(mouseX+175,50,30,30);
circle(mouseX+175,30,30,30);
circle(mouseX+195,40,30,30);
circle(mouseX+150,40,30,30);
circle(mouseX+125,40,30,30);

//third wind
circle(mouseX-150,70,30,30);
circle(mouseX-150,90,30,30);
circle(mouseX-175,70,30,30);
circle(mouseX-175,90,30,30);
circle(mouseX-195,80,30,30);
circle(mouseX-150,80,30,30);
circle(mouseX-125,80,30,30);

//fourth wind
circle(mouseX+350,70,30,30);
circle(mouseX+350,90,30,30);
circle(mouseX+375,70,30,30);
circle(mouseX+375,90,30,30);
circle(mouseX+395,80,30,30);
circle(mouseX+350,80,30,30);
circle(mouseX+325,80,30,30);

fill(OceanColor);
rect(0, height/2, width, height/2);

// An example of drawing an irregular polygon
fill(mountain);
beginShape();
vertex(0, height/2);
const steps = 10;
for (let i = 0; i < steps + 1; i++) {
  let x = (width * i) / steps;
  let y =
    height/2 - (random() * random() * random() * height)/3 - height / 5;
  vertex(x, y);
}
vertex(width, height / 2);
endShape(CLOSE);

//second mountain
fill(secondmountain);
beginShape();
vertex(0, height/2);
const steps1 = 15;
for (let i = 0; i < steps1 + 1; i++) {
  let x = (width * i) / steps1;
  let y =
    height/2 - (random() * random() * random() * height)/4 - height / 10;
  vertex(x, y);
}
vertex(width, height / 2);
endShape(CLOSE);

//third mountain
fill(thirdmountain);
beginShape();
vertex(0, height/2);
const steps2 = 20;
for (let i = 0; i < steps2 + 1; i++) {
  let x = (width * i) / steps2;
  let y =
    height/2 - (random() * random() * random() * height)/6 - height / 50;
  vertex(x, y);
}
vertex(width, height / 2);
endShape(CLOSE);

//draw the boat
const boat = 2 *random();
for (let i = 0; i < boat; i++) {
  drawboat();
  drawboat1();
  drawboat2();
}

function drawboat(){
  stroke('yellow');
  fill('yellow');
  beginShape()
  vertex(145+mouseX,490);
  vertex(155+mouseX,510);
  vertex(260+mouseX,510);
  vertex(270+mouseX,490);
  vertex(145+mouseX,490);
  endShape();

  //the left saili
  fill('red');
  stroke('red');

  beginShape();
  vertex(206+mouseX,490);
  vertex(206+mouseX,415);
  vertex(167+mouseX,485);
  vertex(206+mouseX,485);
  endShape();

  //the right saili
  fill('orange');
  stroke('orange');
  beginShape();
  vertex(210+mouseX,423);
  vertex(210+mouseX,485);
  vertex(240+mouseX,485);
  vertex(210+mouseX,423);
  endShape();
}

function drawboat2(){
  stroke('#ff1493');
  fill('#ff1493');

  beginShape()
  vertex(45+mouseX,690);
  vertex(55+mouseX,710);
  vertex(160+mouseX,710);
  vertex(170+mouseX,690);
  vertex(45+mouseX,690);
  endShape();

  //the left saili
  fill('#ff69b4');
  stroke('#ff69b4');

  beginShape();
  vertex(106+mouseX,690);
  vertex(106+mouseX,615);
  vertex(67+mouseX,685);
  vertex(106+mouseX,685);
  endShape();

  //the right saili
  fill('pink');
  stroke('pink');
  beginShape();
  vertex(110+mouseX,623);
  vertex(110+mouseX,685);
  vertex(140+mouseX,685);
  vertex(110+mouseX,623);
  endShape();
}

function drawboat1(){
  //let x = 0;
  stroke('#ffd700');
  // text(mouseX,200,20);
  // text(mouseY,240,20);
  fill('#ffd700');

  beginShape()
  // vertex(145,190);
  // vertex(155,210);
  // vertex(260,210);
  // vertex(270,190);
  // vertex(145,190);
  vertex(545+mouseX,590);
  vertex(555+mouseX,610);
  vertex(660+mouseX,610);
  vertex(670+mouseX,590);
  vertex(545+mouseX,590);
  endShape();

  //the left saili
  fill('#7cfc00');
  stroke('#7cfc00');

  beginShape();
  vertex(606+mouseX,590);
  vertex(606+mouseX,515);
  vertex(567+mouseX,585);
  vertex(606+mouseX,585);
  endShape();

  //the right saili
  fill('#adff2f');
  stroke('#adff2f');
  beginShape();
  vertex(610+mouseX,523);
  vertex(610+mouseX,585);
  vertex(640+mouseX,585);
  vertex(610+mouseX,523);
  endShape();
}
}

