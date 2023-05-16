"use strict";
//todo:run the command
//  npx ts-node-dev --respawn src/index.ts
const userWithTypeAlias = {
    name: 'Type Alias',
    age: 45
};
userWithTypeAlias.age;
const userWithInterface = {
    name: 'Interface',
    age: 65
};
const newUser = {
    roll: 34,
    name: 'bappa',
};
console.log({ newUser });
const addNumbers = (num1, num2) => num1 + num2;
const rollNumbers = [1, 3, 55, 7];
const IrollNumbers = [1, 3, 55, 7];
// const rollNumbers:number[]=[1,3,55,7];
