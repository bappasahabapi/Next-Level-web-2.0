//todo:run the command
//  npx ts-node-dev --respawn src/index.ts


//todo: type alias
type User = {
    name: string,
    age: number
}

type ExtendUser=User &{
    roll:number;
}
const userWithTypeAlias:User={
    name:'Type Alias',
    age:45
}
userWithTypeAlias.age;





//todo:interface(object , function, array) non-primitive

interface IUser{
    name:string,
    age?:number
}

interface IExtendedUser extends IUser{
    // name:string,
    // age:number,
    roll:number;
}

const userWithInterface:IUser={
    name:'Interface',
    age:65
}

const newUser:IExtendedUser={
    roll:34,
    name:'bappa',
    // age:36
}
console.log({newUser})


//todo: but function er khete type alias besi use korbo
// example 
type addNumbersType =(a:number,b:number)=>number;
const addNumbers:addNumbersType=(num1,num2)=>num1+num2;

type rollNumbersTypes=number[];
interface IRollNumbers{
    [index:number]:number;
}

const rollNumbers:rollNumbersTypes=[1,3,55,7];
const IrollNumbers:IRollNumbers=[1,3,55,7];
// const rollNumbers:number[]=[1,3,55,7];