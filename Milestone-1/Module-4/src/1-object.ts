//todo:run the command
//  npx ts-node-dev --respawn src/1-object.ts







//todo: create object from class
//example-1

// declare property syntax
class Animal {
    name:string;
    species:string;
    sound:string;

    constructor(name:string,species:string,sound:string){
        this.name=name;
        this.species=species;
        this.sound=sound;
    }
    // declare method : note use arrow func bcz 'this' key is not working
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

//make instance

const dog =new Animal('German Shepard','dog','gheu gheu');
dog.makeSound();

const cat =new Animal('Foreign cat','cat','miow');
cat.makeSound()



// example-2

// declare property syntax
class Animal1 {
    public name:string;
    public species:string;
    public sound:string;
 
     constructor(name:string,species:string,sound:string){
         this.name=name;
         this.species=species;
         this.sound=sound;
     }
     // declare method : note use arrow func bcz 'this' key is not working
     public makeSound(){
         console.log(`The ${this.name} says ${this.sound}`);
     }
 }
 
 //make instance
 
 const dog1 =new Animal('German Shepard','dog','gheu gheu');
 dog1.makeSound();
 
 const cat1 =new Animal('Foreign cat','cat','miow');
 cat1.makeSound();

// example-3

// declare property syntax
class Animal3 {
     
    //parameter properties
     constructor(public name:string,public species:string,public sound:string){}
     makeSound(){
         console.log(`The ${this.name} says ${this.sound}`);
     }
 }
 
 
 const dog3 =new Animal('German Shepard','dog','gheu gheu');
 dog3.makeSound();
 
 const cat3 =new Animal('Foreign cat','cat','miow');
 cat3.makeSound();
 
