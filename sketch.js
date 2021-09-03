var bubble1 = [];
var bubble2 = [];
var mic;
var muis;
let cnv;
let s;
let tijd = 0;
let lijn = [186, 176, 214];
let bg = [18, 62, 183];

function setup() {
  cnv = createCanvas(400, 500);
  let newCanvasX = (windowWidth - 400)/2;
  let newCanvasY = (windowHeight - 600)/2;
  cnv.position(newCanvasX, newCanvasY);

  
  for (var i = 0; i < 5; i++){
  bubble1[i] = new Bubble1();
    bubble2[i] = new Bubble2();
  }
    s = int(random(999));

    background(bg);

}

function draw() {
  translate(width, height);
  noFill();
  strokeWeight(0.4);
  stroke(lijn);
  beginShape();
  
  for(var i =0; i < 5; i++){
  bubble1[i].move();
    bubble2[i].move();
  bubble1[i].show();
    bubble2[i].show();
  }
  endShape(CLOSE);
  tijd += 1;
  
  if(tijd == 200){
    noLoop();
  }
}

function mousePressed(){
  saveCanvas('NYLON #'+s, 'png');
}