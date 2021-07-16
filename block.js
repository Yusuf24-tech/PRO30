class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visiblity=255;
        this.image=loadImage("block.png");
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        if(this.body.speed<3){
          imageMode(CENTER);
          image(this.image,0,0,this.width, this.height);
        }
       else{
         World.remove(world,this.body);
         this.visiblity=this.visiblity-5;
         tint(255,this.visiblity );
         image(this.image,0,0,this.width, this.height)
        }

        pop();
      }
}
