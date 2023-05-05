"use strict";
//todo:run the command
//  npx ts-node-dev --respawn src/5-generic-in-function.ts
// Arrow function
const createArray = (param) => {
    return [param];
};
const result = createArray('bappa');
// console.log({result})
//todo: now make the function generic
const createArray1 = (param) => {
    return [param];
};
const result1 = createArray1(67);
const result2 = createArray1("67");
// console.log({result1},{result2})
//spread operator
const crush = "sss";
const myInfo = {
    name: 'bapida',
    age: 36,
    salary: 890
};
const newData = Object.assign(Object.assign({}, myInfo), { crush });
// console.log({newData})
// now make this using function
const addMeToCrushHeart = (myInfo11) => {
    const crush1 = "s.singha";
    const updateData = Object.assign({ crush1 }, myInfo11);
    return updateData;
};
const myInfo1 = {
    name: 'bapi da ',
    age: 396,
    salary: 890
};
const ans = addMeToCrushHeart(myInfo1);
console.log({ ans });
// ans.
