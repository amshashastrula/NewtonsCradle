class Ball{
    constructor(x,y,r){
        var options = {
            restitution : 1.3,
            friction : 1,
            density : 0.2,
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world, this.body);
    }
    display(){
       /*var angle = this.body.angle;
       push();
       translate(this.body.position.x, this.body.position.y);
       rotate(angle);*/
       ellipseMode(RADIUS)
       fill("white");
       ellipse(this.body.position.x, this.body.position.y,this.r,this.r);
       
       //pop(); 
    }    
}