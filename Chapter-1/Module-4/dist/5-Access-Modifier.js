"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance() {
        console.log(`My current balance is ${this._balance}`);
    }
    addDeposit(amount) {
        this._balance + amount;
    }
}
// class StudentAccount extends BankAccount{
//    test(){
//     this.
//    }
// }
const myAccount = new BankAccount(101, 'bappa', 12345);
console.log(myAccount);
myAccount.getBalance();
