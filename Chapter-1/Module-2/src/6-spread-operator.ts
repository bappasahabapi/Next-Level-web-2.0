const oldNumbers = [12.465,23];
const newNumbers = [79,98];

oldNumbers.push(...newNumbers);
// console.log(oldNumbers)


//todo: rest perameter: different different value k array banay dey
/* 
const greetFriends= (
    friend1:string,
    friend2:string,
    friend3:string,
):void =>{
    console.log(`hi ${friend1}\n hello ${friend2}\n  hey ${friend3}`);
}

greetFriends('bappa','sumit','neha')
 */

/* 
const greetFriends= (...friends:string[]):void =>{
    console.log(friends);
    friends.forEach(function(friend){
        console.log(`hi ${friend} friend`)
        
    })
}

greetFriends('bappa','sumit','neha')

 */


//todo: array and object destructing

const myArrayFriends=['one','two','bpa']
const myObjectFriends={
    fname:'bapi is my full name',
    age:26,
    married:false
}

const [bestFriends]= myArrayFriends;
const {fname:myFullName}=myObjectFriends;

console.log(myFullName)