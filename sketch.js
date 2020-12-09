var wall, thickness;
var bullet, speed, weight;
var dmg;
function setup () {
  createCanvas (1600,400)
  bullet = createSprite(0,200,40,20);
  bullet.shapeColor = "white";
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (rgb(80,80,80));

  thickness=Math.round(random(22,83));
  weight=Math.round(random(30,52));
  speed=Math.round(random(223,321));
}

function draw () {
  background ("black");
  console.log(bullet.x);
  bullet.collide(wall);
  dmg = Math.round((0.5 * weight * speed^2)/(thickness^3));
  bullet.velocityX += 1.8;
  if(dmg >100 && wall.x-bullet.x <= wall.width/2 + bullet.width/2) {
    bullet.shapeColor = "red"
    textSize(25);
    fill("white");
    text(dmg,25,325);
  } else if (dmg <= 100 && wall.x-bullet.x <= wall.width/2 + bullet.width/2) {
    bullet.shapeColor = rgb(0,255,0);
    textSize(25);
    fill("white");
    text(dmg,25,325);
    }
  textSize(25);
  fill("white");
  
  text("If the damage is less than or equal to 10, then the color is green",25,350);
  text("If the damage is geater than 10, then the color is red",25,375);
  drawSprites ();
}