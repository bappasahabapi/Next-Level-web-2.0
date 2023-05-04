"use strict";
//todo:run the command
//  npx ts-node-dev --respawn src/index.ts
// making a common class named Person class 
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
}
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('Bappa', 26, 'Thakurgaon');
student1.makeSleep(6);
class Teacher extends Person {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takenClass(numberOfClass) {
        return `This ${this.name} will take ${numberOfClass} classes.`;
    }
}
const teacher1 = new Teacher('khalil', 78, 'dhaka', 'Head master');
teacher1.takenClass;
// example-1
/*
class Student {
    name:string;
    age:number;
    address:string;

    constructor(name:string, age:number, address:string){
        this.name=name;
        this.age=age;
        this.address=address;
    }

    makeSleep(hours:string):string{
        return `This ${this.name} will sleep for ${hours}`;
    }
}



class Teacher {
    name:string;
    age:number;
    address:string;
    designation:string;

    constructor(name:string, age:number, address:string, designation:string){
        this.name=name;
        this.age=age;
        this.address=address;
        this.designation=designation;
    }
    makeSleep(hours:string):string{
        return `This ${this.name} will sleep for ${hours}`;
    }

    takenClass(numberOfClass:string){
        return `This ${this.name} will take ${numberOfClass} classes.`;
    }

}
 */ 
