//todo: using interface

// interface IVehicle{
//     name:string;
//     model:string;
// }

// const vehicle: IVehicle={
//     name:'Car',
//     model:'BMW-200'
// }


interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class Vehicle implements IVehicle {


    constructor(public name: string,public brand: string,public model: number) {}

    startEngine(): void {
        console.log('I am starting the engine...');
    }
    move(): void {
        console.log('Moving the engine ............')
    }
    stopEngine(): void {
        console.log('I am stopping the engine.')
    }
    test() {
        console.log('I am for testing purpose')
    }
}


const vehicle1 = new Vehicle('Car','Toyota',9988);



//todo: using abstract class

abstract class Vehicle1{


    constructor(public name: string,public brand: string,public model: number) {}

    abstract startEngine(): void 
    move(): void {
        console.log('Moving the engine ............')
    }
    abstract stopEngine(): void 
   
}

// const car1 = new Vehicle1('Car','Honda',9988); // can not make instance 

class Car extends Vehicle1{
    startEngine(): void {
        console.log('I am starting the engine...');
    }
    stopEngine(): void {
        console.log('I am stopping the engine.')
    }
}

// const car1 = new Vehicle1('Car','Honda',9988); 