
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,blowerPipe,ground,button;
var basket,basketImg;
var wall1,wall2,wall3;

function preload() {

  basketImg = loadImage('basketball.PNG');
}
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution:0.5,
    isStatic: false
  }

  var basket_opt = {
    isStatic: true
  }
  
  ball = Bodies.circle(250,150,30,ball_options);
  World.add(world,ball);

  basket = Bodies.rectangle(150,50,50,50,basket_opt);
  World.add(world,basket);

  //blowerPipe = new Blower(250,330,25,100);
  ground = new Blower(200,400,400,30);
  wall1 = new Blower(400,200,30,400);
  wall2 = new Blower(0,200,30,400);
  wall3 = new Blower(200,0,400,30);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,30);
  rect(basket.position.x,basket.position.y,50,50)

  image(basketImg,150,50,50,50);

  //blowerPipe.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();

  if(keyIsDown(UP_ARROW)){
    blow();
  }
  if(keyIsDown(LEFT_ARROW)){
    blowLeft();
  }
  if(keyIsDown(RIGHT_ARROW)){
    blowRight();
  }
}

function blow() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01});
}

function blowLeft() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.01,y:0});
}

function blowRight() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0});
}
