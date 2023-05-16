
class BankAccount6{
    id:number;
    name:string;
   private _balance:number;

    constructor(id:number,name:string,balance:number){
        this.id=id;
        this.name=name;
        this._balance=balance;
    }

    //todo: using getter

    get balance():number{
        return this._balance
    }

    //todo:using setter
    set deposit(amount:number){
        this._balance=this._balance+amount;
    }

    // getBalance6():number{
    //     // console.log(`My current balance is ${this._balance}`);
    //     return this._balance;
    // }

    // addDeposit6(amount:number){
    //     this._balance+amount;
    // }
}



// class StudentAccount extends BankAccount{
//    test(){
//     this.
//    }
// }


const myAccount6 =new BankAccount6(101,'bappa',12345);
console.log(myAccount6)

// console.log(myAccount6.getBalance6()) ;

console.log(myAccount6.balance);
myAccount6.deposit=55;
console.log(myAccount6.balance);