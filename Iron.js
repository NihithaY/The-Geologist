class Iron{
	constructor(x,y,r){
		var options={
			'restitution' : 0.8,
			'friction': 3,
			'density': 30
		}
		var options = {
			isStatic: true
		}
	
	
	
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(this.x, this.y, 50,50, options)
		World.add(world, this.body);
	}
    display(){
        var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("orange");
			rect(this.x,this.y,90,50);
			
			pop()
    }
	};



			
	

