"use strict";
//todo: 
// example-1 
class Personn {
    takeNap() {
        console.log('Normal person is sleeping 8 hours per day');
    }
}
class Studentt extends Personn {
    takeNap() {
        console.log('Student is  sleeping 10 hours per day');
    }
}
class Developerr extends Personn {
    takeNap() {
        console.log('Developer isleeping 6 hours per day');
    }
}
function getNap(param) {
    param.takeNap();
}
const personn1 = new Personn();
const personn2 = new Studentt();
const personn3 = new Developerr();
getNap(personn1);
getNap(personn2);
getNap(personn3);
// example-2 
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(circleRadius) {
        super();
        this.radius = circleRadius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 10));
