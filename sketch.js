const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function preload(){
 
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine  = Engine.create();
  world = engine.world;
 
  ground1=new Ground(500,400,1200,30)

   
    box1 = new Box(400,350,50,50)
    box2 = new Box(450,350,50,50)
    box3 = new Box(500,350,50,50)
    box4 = new Box(550,350,50,50)
    box5 = new Box(600,350,50,50)
    box6 = new Box(650,350,50,50)
    box7 = new Box(450,300,50,50)
    box8 = new Box(500,300,50,50)
    box9 = new Box(550,350,50,50)
    box10 = new Box(600,350,50,50)
    box11 = new Box(500,350,50,50)
    box12 = new Box(550,350,50,50)
   
    ball1 = new Ball(100,200,40,40)

    rope1= new Rope(ball1.body,{x:180,y:90})

}

function draw() {
 // background(backgroundImg);  
 background("lightblue")
  Engine.update(engine);
  ground1.display()
  
  
  
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()

  ball1.display()

  rope1.display()
}
  

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
  }
  
 
  function mouseReleased(){
    rope1.fly();
  }
  
 // ground.display();
  


 function keyPressed() {

  if (keyCode === 32)
  {
    rope1.attach(ball1.body)
  }
}