const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box, ground;
var boxes = [];

var slider;
var val;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 600, 800, 200);
  slider = createSlider(0, 7, 1);
  slider.position(10, 10);
}


function draw(){
  background("black");
  val = slider.value();
  world.gravity.y = val;
  Engine.update(engine);
  for(var i = 0; i < boxes.length; i++){
    boxes[i].display();
  }
  ground.display();
}

function mousePressed(){
  var rand = random(10,40);
  box = new Box(mouseX, mouseY, rand, rand);
  boxes.push(box);
}
