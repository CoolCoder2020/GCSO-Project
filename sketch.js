var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,80);
  weight = random(440,1780);

  car = createSprite(500, 200, 70, 30);
  car.velocityX = speed;
  car.shapeColor = "cyan";
  wall = createSprite(1500,200,50,400);
  wall.shapeColor = "white";
}

function draw() {
  background(0); 
  
  if(wall.x - car.x < (car.width + wall.width)/1.9){
    car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}