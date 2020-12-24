var ground,paper;
var dustbin1,dustbin2,dustbin3;
var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup(){
    createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;

    paper = new Paper(200,375,20);
	dustbin1 = new Dustbin(1400,370,220,20);
	dustbin2 = new Dustbin(1300,320,20,80);
	dustbin3 = new Dustbin(1500,320,20,80);

	ground = Bodies.rectangle(width/2,395,width,25,{isStatic:true});
	World.add(world,ground);
}

function draw(){
	background("skyblue");
	rectMode(CENTER);
	Engine.update(engine);
	fill(rgb(0,255,0))
	rect(width/2,390,width,25);
    paper.display();
    dustbin3.display();
    dustbin2.display();
    dustbin1.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{
		x:95,
		y:-95
	    })
	}
}
