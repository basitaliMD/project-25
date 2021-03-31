const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground, leftSide, bottom, rightSide;

function setup() {
createCanvas(800, 700);

engine = Engine.create();

world = engine.world;

//create the Bodies here

paper = new Paper(100, 600, 40);

ground = new Ground(400, 680, 800, 20);

leftSide = new Dustbin(550, 620, 20, 100);
bottom = new Dustbin(610, 660, 100, 20);
rightSide = new Dustbin(670, 620, 20, 100);

Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background("black");

Engine.update(engine);
  
paper.display();
ground.display();
leftSide.display();
bottom.display();
rightSide.display();

drawSprites();
}

function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body, paper.body.position, {x:170, y: -120});
 }
}