//namespacing- aliasing - aka
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var object;
var ground

function setup() {
  createCanvas(800,400);

  //create an engine
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  //restitution - bounciness - 0-1 
  var ballOptions = {
    restitution : 0.5
  }

  object = Bodies.circle(400,200,5,ballOptions);
  World.add(world,object);

  ground = Bodies.rectangle(400,380,800,40,options);
  World.add(world,ground);

  console.log(object.position.x)

  //run the engine
  Engine.run(engine);
  
}

function draw() {
  background(200);  
  rectMode(CENTER);
  circle(object.position.x,object.position.y,10);

  rect(ground.position.x,ground.position.y,800,40)
}