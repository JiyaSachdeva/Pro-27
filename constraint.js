class Chain {

    constructor (body1,body2,offsetX,offsetY){
        this.offsetY = offsetY
        this.offsetX = offsetX
        var options = {
            bodyA: body1,
            bodyB: body2,
          pointB:{x:this.offsetX,y:this.offsetY},
            
        }
      
        this.rope = Constraint.create(options);

World.add(world,this.rope);

    }

display(){
var pointA = this.rope.bodyA.position;
var pointB = this.rope.bodyB.position;

push();
strokeWeight(5);
var Anchor1X=pointA.x
var Anchor1Y=pointA.y

var Anchor2X = pointB.x + this.offsetX
var Anchor2Y=pointB.y+this.offsetY

line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
pop();

}

}