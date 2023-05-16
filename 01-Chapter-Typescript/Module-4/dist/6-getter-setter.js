"use strict";
class BankAccount6 {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    //todo: using getter
    get balance() {
        return this._balance;
    }
    //todo:using setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
// class StudentAccount extends BankAccount{
//    test(){
//     this.
//    }
// }
const myAccount6 = new BankAccount6(101, 'bappa', 12345);
console.log(myAccount6);
// console.log(myAccount6.getBalance6()) ;
console.log(myAccount6.balance);
myAccount6.deposit = 55;
console.log(myAccount6.balance);
