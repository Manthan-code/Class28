class SLINGSHLOT{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    fly(){

        this.body.bodyA=null;

    }

    display(){
        if(this.body.bodyA){
        var posA = this.body.bodyA.position;
        var posB = this.pointB;
        strokeWeight(4);
        line(posA.x, posA.y, posB.x, posB.y);}
    }
    
}