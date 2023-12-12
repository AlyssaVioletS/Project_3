var sliderR
var sliderG
var sliderB


function preload(){
img = loadImage('assets/character.png');

  
  
  
}
function setup() {
  canvas = createCanvas(540, 960); 
  canvas.parent("sketch-holder");
  
  //button for saving
  var button = createButton("Save");
  button.parent("button-holder");
  button.mousePressed(saveButton);
  button.class("menu-button");
  button.style('font-size','55px')
  textSize(500);
  button.position(850,800);
 
  //color sliders
sliderR = createSlider(0, 255, 0);
sliderG = createSlider(0, 255, 0);
sliderB = createSlider(0, 255, 0);
  
  sliderR.size (600,400)
  sliderG.size (600,500)
  sliderB.size (600,600)
}

function draw() {
  background(197,178,159);
    var r = sliderR.value();
	var g = sliderG.value();
	var b = sliderB.value();
    
  sliderR.position (-80,200)
  sliderG.position (-80,300)
  sliderB.position (-80,400)
  
  //bow
  noStroke();
  fill(r,g,b)
  rect(225,700,100,100,20)
  rect(325,700,100,100,20)
  rect(155,700,100,100,20)
  rect(155,720,100,100,20)
  rect(315,720,100,100,20)
  rect(350,800,70,35,20)
  rect(150,800,70,35,20)
  image(img,0,0,width,height);
  

}

function saveButton() {
  saveCanvas(canvas, "my_canvas", "png");
}


