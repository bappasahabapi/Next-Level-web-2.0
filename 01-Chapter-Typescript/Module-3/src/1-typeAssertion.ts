//todo:run the command
//  npx ts-node-dev --respawn src/1-typeAssertion.ts

let kaka: any;
kaka = "kaka is a human";
const kakak = (kaka as string).toUpperCase;
// console.log({kakak})

function kgToGram(param: string | number): string | number | undefined{
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is: ${value} gram `;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber =kgToGram(102) as string;
const resultToBeString =kgToGram('102');
console.log({resultToBeNumber},{resultToBeString})