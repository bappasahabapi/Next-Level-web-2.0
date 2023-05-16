"use strict";
//todo: using interface
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log('I am starting the engine...');
    }
    move() {
        console.log('Moving the engine ............');
    }
    stopEngine() {
        console.log('I am stopping the engine.');
    }
    test() {
        console.log('I am for testing purpose');
    }
}
const vehicle1 = new Vehicle('Car', 'Toyota', 9988);
//todo: using abstract class
class Vehicle1 {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log('Moving the engine ............');
    }
}
// const car1 = new Vehicle1('Car','Honda',9988); // can not make instance 
class Car extends Vehicle1 {
    startEngine() {
        console.log('I am starting the engine...');
    }
    stopEngine() {
        console.log('I am stopping the engine.');
    }
}
// const car1 = new Vehicle1('Car','Honda',9988); 
