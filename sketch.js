const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
var backgroundimg
var engine, world;
var snow = [];
function preload() {
  backgroundimg = loadImage("snow1.jpg");
  snowflakeimg1 = loadImage("snow5.webp");
  snowflakeimg2 = loadImage("snow4.webp");

}
function setup() {
  createCanvas(800,400);
  document.getElementById("defaultCanvas0").style.border = "1px solid black";
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(backgroundimg);
  Engine.update(engine);
  var rand = Math.random();
  if(rand>0.7) {
    snow.push(new Snowflake(Math.random()*800, -50, Math.random()*18+3,snowflakeimg1));
  }
  if(rand>0.4) {
    snow.push(new Snowflake(Math.random()*800, -50, Math.random()*18+3,snowflakeimg1));
  }
  snow.forEach((snowflake, index)=>{snowflake.display();})
}