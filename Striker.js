class Striker{
    constructor(x,y,width,height){
        var options={
            'restitution':0.1,
            'fricton':1.0,
            'density':1.0
        }
        this.striker = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        
        World.add(world, this.striker);
    }
    display(){
        
        imageMode(CENTER);
        image(this.image, 0,0, this.width, this.height)
    
    }
    }
