
class Counter{
    // counter:number;

    static count:number=2;

    // constructor(counter:number){
    //     this.counter=counter;
    // }
    // increment():number{
    //     return this.counter=this.counter+1;
    // }
    // decrement():number{
    //     return this.counter--;
    // }

    // increment():number{
    //     return Counter.count++;
    // }
    // decrement():number{
    //     return Counter.count--;
    // }
     static increment():number{
        return Counter.count++;
    }
    static decrement():number{
        return Counter.count--;
    }
}


const instance1 =new Counter();
const instance2 =new Counter();

// const instance1 =new Counter(0);
// const instance2 =new Counter(1);


// console.log(instance1.increment()); //2
// console.log(instance1.increment()); //3
// console.log(instance2.decrement()); //4

console.log(Counter.increment())
console.log(Counter.increment())
