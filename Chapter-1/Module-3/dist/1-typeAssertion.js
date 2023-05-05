"use strict";
//todo:run the command
//  npx ts-node-dev --respawn src/1-typeAssertion.ts
let kaka;
kaka = "kaka is a human";
const kakak = kaka.toUpperCase;
// console.log({kakak})
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is: ${value} gram `;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(102);
const resultToBeString = kgToGram('102');
console.log({ resultToBeNumber }, { resultToBeString });
