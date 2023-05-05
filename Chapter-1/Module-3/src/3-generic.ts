//todo:run the command
//  npx ts-node-dev --respawn src/index.ts


// const rollNUmber:number[]=[23,3,2,21,45,14];
// const rollNUmber2:string[]=['43','3','2','53'];

const rollNUmber: Array<number> = [23, 3, 2, 21, 45, 14];
const rollNUmber2: Array<string> = ['43', '3', '2', '53'];
const rollNumber3:Array<boolean> =[true,false]
const nameAndRoll: Array<{ name: string, roll: number }> = [
    {
        name: 'bappa',
        roll: 45
    },
    {
        name: 'fappa',
        roll: 55
    }
];


//todo: using generic type <T>

type GenericTuple<X,Y>=[X,Y]
type GenericArray<T> =Array<T>
type NameAndRollType={name:string, roll:number};




const rollNUmberG: GenericArray<number> = [23, 3, 2, 21, 45, 14];
const rollNUmber2G: GenericArray<string> = ['43', '3', '2', '53'];
const rollNumber3G:GenericArray<boolean> =[true,false];
const nameAndRollGT: GenericArray<NameAndRollType> = [
    {
        name: 'bappa',
        roll: 45
    },
    {
        name: 'fappa',
        roll: 55
    }
];
const nameAndRollG: GenericArray<{name:string, roll:number}> = [
    {
        name: 'bappa',
        roll: 45
    },
    {
        name: 'fappa',
        roll: 55
    }
];


const relation:GenericTuple<string,string>=['bappa','saha'];
const relationObject:GenericTuple<object,string>=[
    {
        name:'dada',
        salary:96988
    },
    "this is a string",
]

