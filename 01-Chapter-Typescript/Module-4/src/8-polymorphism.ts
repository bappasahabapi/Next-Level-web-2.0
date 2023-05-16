//todo: 


// example-1 

class Personn {
    takeNap() {
        console.log('Normal person is sleeping 8 hours per day')
    }
}

class Studentt extends Personn {
    takeNap() {
        console.log('Student is  sleeping 10 hours per day')
    }
}
class Developerr extends Personn {
    takeNap() {
        console.log('Developer isleeping 6 hours per day')
    }
}

function getNap(param:Personn){
    param.takeNap();
}


const personn1 = new Personn();
const personn2 = new Studentt();
const personn3 = new Developerr();

getNap(personn1);
getNap(personn2);
getNap(personn3);


// example-2 


class Shape{
    getArea():number{
        return 0;
    }
}

class Circle extends Shape{
    radius:number;
    constructor(circleRadius:number){
        super();
        this.radius=circleRadius;
    }
    getArea():number{
        return Math.PI *this.radius*this.radius;
    }
   
}

class Rectangle extends Shape{
    height:number;
    width:number;
    constructor(height:number,width:number){
        super();
        this.height=height;
        this.width=width;
    }
    getArea(): number {
        return this.height*this.width;
    }
}


function getAreaOfShape(param:Shape){
    console.log(param.getArea());
}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10,10));

