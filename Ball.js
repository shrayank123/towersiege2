class Ball {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':0.04,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("sprites/polygon.png");
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("yellow");

      imageMode(CENTER)
        //ellipse(0,0,this.r,this.r)
        image(this.image,0,0,this.width,this.height)
      pop();
    }
  }