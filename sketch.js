
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var ground;


function setup() {
  createCanvas(2240,700);
  engine = Engine.create();
  world = engine.world;
  
  
  ground =new Ground(400,700,3800,20);
  left_ground =new Ground(1100,650,20,120);
  right_ground =new Ground(1500,650,20,120);
 
  var ball_options={
restitution:0.3,
friction:0,
density:1.2

  }

ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  keyPressed();
  ground.show();
  left_ground.show();
  right_ground.show();
  Engine.update(engine);
}

function keyPressed(){
if (keyCode === UP_ARROW){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0});
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5});

}




}











function hForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});


}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
  
  
  }