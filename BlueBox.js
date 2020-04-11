class BlueBox{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.3,
            'friction': 0.5,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
          push();
          translate(this.body.position.x,this.body.position.y);
          rotate(this.body.angle);
        fill("blue");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world, this.body);
        }
      }  
}