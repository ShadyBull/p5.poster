
let t = 5;

let myFont;


function setup(){
  createCanvas(500,700);
  myFont = loadFont('Teko-Regular.ttf');
  
}

// 
function draw(){
  background(0);
  translate(width/2,height/2);

  stroke('255');
  strokeWeight(2);
  for(let i = 0;i<200;i++){
    line(x1(t+i),y1(t+i),x2(t+i)+20,y2(t+i)+20);
  }

  noStroke();
  textFont(myFont);
  fill(5,5,5);
  textSize(100);
  textAlign(CENTER);
  text("Kaan", 0,-10);
  text("Tosun", 0,55);


  t+=0.05;
}
//
function x1(t){
  return sin(t/10)*250+sin(t/20)*250+sin(t/25)*125;
}

//
function y1(t){
  return cos(t/10)*250+cos(t/20)*250+cos(t/25)*125;
}

//
function x2(t){
  return sin(t/15)*250+sin(t/25)*100+sin(t/20)*125;
}

//
function y2(t){
  return cos(t/15)*250+cos(t/25)*100+cos(t/50)*125;
}

function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}