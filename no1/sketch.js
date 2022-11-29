var x;
var y;
var r;
var pos = 0;

var j;
var k;
var npos = 90;

var bes = 1;

let myFont;


function setup() {
  createCanvas(500, 700);
  r = height * 0.2;
  myFont = loadFont('Anton-Regular.ttf');
}

function draw() {
  background(0);
  translate(width/2, height/2);
  angleMode(DEGREES);
  x = r*cos(pos);
  y = r*sin(pos);
  j = r*cos(npos);
  k = r*sin(npos);
  

  textFont(myFont);
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text("Kaan", 0,0);
  text("Tosun", 0,50);
  
  
  fill(0);

  ellipse(x, y, 5, 5);

  ellipse(-x, -y, 5, 5);
  
  ellipse(j, k, 5, 5);
  
  ellipse(-j ,-k, 5,5);
  
  stroke(100);
  line(r*cos(0)*3,r*sin(0)*3,x,y);
  line(r*cos(0)*3,r*sin(0)*3,x*-1,y*-1,x,y);
  line(r*cos(0)*3,r*sin(0)*3,j,k);
  line(r*cos(0)*3,r*sin(0)*3,j*-1,k*-1,j,k);
  
  line(r*cos(45)*3,r*sin(45)*3,x,y);
  line(r*cos(45)*3,r*sin(45)*3,x*-1,y*-1,x,y);
  line(r*cos(45)*3,r*sin(45)*3,j,k);
  line(r*cos(45)*3,r*sin(45)*3,j*-1,k*-1,j,k);
  
  line(r*cos(90)*3,r*sin(90)*3,x,y);
  line(r*cos(90)*3,r*sin(90)*3,x*-1,y*-1,x,y);
  line(r*cos(90)*3,r*sin(90)*3,j,k);
  line(r*cos(90)*3,r*sin(90)*3,j*-1,k*-1,j,k);
  
  line(r*cos(135)*3,r*sin(135)*3,x,y);
  line(r*cos(135)*3,r*sin(135)*3,x*-1,y*-1,x,y);
  line(r*cos(135)*3,r*sin(135)*3,j,k);
  line(r*cos(135)*3,r*sin(135)*3,j*-1,k*-1,j,k);
  
  line(r*cos(180)*3,r*sin(180)*3,x,y);
  line(r*cos(180)*3,r*sin(180)*3,x*-1,y*-1,x,y);
  line(r*cos(180)*3,r*sin(180)*3,j,k);
  line(r*cos(180)*3,r*sin(180)*3,j*-1,k*-1,j,k);
  
  line(r*cos(225)*3,r*sin(225)*3,x,y);
  line(r*cos(225)*3,r*sin(225)*3,x*-1,y*-1,x,y);
  line(r*cos(225)*3,r*sin(225)*3,j,k);
  line(r*cos(225)*3,r*sin(225)*3,j*-1,k*-1,j,k);
  
  line(r*cos(270)*3,r*sin(270)*3,x,y);
  line(r*cos(270)*3,r*sin(270)*3,x*-1,y*-1,x,y);
  line(r*cos(270)*3,r*sin(270)*3,j,k);
  line(r*cos(270)*3,r*sin(270)*3,j*-1,k*-1,j,k);
  
  line(r*cos(315)*3,r*sin(315)*3,x,y);
  line(r*cos(315)*3,r*sin(315)*3,x*-1,y*-1,x,y);
  line(r*cos(315)*3,r*sin(315)*3,j,k);
  line(r*cos(315)*3,r*sin(315)*3,j*-1,k*-1,j,k);
  
  
  pos += bes;
  npos += bes;
}

function keyPressed() {
    // this will download the first 5 seconds of the animation!
    if (key === 's') {
      saveGif('mySketch', 5);
    }
  }