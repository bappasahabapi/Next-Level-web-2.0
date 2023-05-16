
class BankAccount{
    id:number;
    name:string;
   protected _balance:number;

    constructor(id:number,name:string,balance:number){
        this.id=id;
        this.name=name;
        this._balance=balance;
    }

    getBalance(){
        console.log(`My current balance is ${this._balance}`)
    }

    addDeposit(amount:number){
        this._balance+amount;
    }
}



// class StudentAccount extends BankAccount{
//    test(){
//     this.
//    }
// }


const myAccount =new BankAccount(101,'bappa',12345);
console.log(myAccount)

myAccount.getBalance();