class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color= rgb(random (0,255), random(0,255), random(0,255))
        World.add(world, this.body);
        this.visibility = 225;
      }
      display(){
        if(this.body.speed <3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          fill(this.color)
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility -5;
          pop();
          
        }
      }
    score(){
      if(this.visibility<0&&this.visibility>-100){
        score++
      }
    }
        
      
}