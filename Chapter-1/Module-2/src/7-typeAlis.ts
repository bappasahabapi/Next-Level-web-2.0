//todo: run the file in the terminal
// npx ts-node-dev --respawn src/7-typeAlis.ts


const crush1: {
  name: string;
  age: number;
  profession: string;
  address: string;
} = {
  name: "neha",
  age: 24,
  profession: "tsc",
  address: "Dhaka",
};
const crush2: {
  name: string;
  age?: number; //optional type
  profession: string;
  address: string;
} = {
  name: "rio",
  // age:24,
  profession: "dmc",
  address: "Tkg",
};

// todo: now we using type alias

type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush3: CrushType = {
  name: "neva",
  age: 24,
  profession: "tsc",
  address: "Dhaka",
};
const crush4: CrushType = {
  name: "rio",
  profession: "dmc",
  address: "Tkg",
};

//todo: boolean alias
type CrushedMarriedType = boolean;
// const isCrushMarried:boolean =false;
const isCrushMarried: CrushedMarriedType = false;

//todo: making functional alias

type OperationType=(x: number, y: number) => number;

const calculate = (
  num1: number,
  num2: number,
  operation:OperationType
) => {
  return operation(num1 , num2);
};


const sum =calculate(10,20,(a,b)=>a+b);
const diff =calculate(10,20,(a,b)=>a-b);
const mull =calculate(10,20,(a,b)=>a*b);
const divide =calculate(10,20,(a,b)=>a/b);

console.log(sum,diff,mull,divide);

const ans =sum+mull;
console.log(ans)