//todo:run the command
//  npx ts-node-dev --respawn src/4-generic-interface.ts

//todo: generic in interface
/* 
type RelationWithSalaryType={name:string, salary:number};
interface IRelationWithSalary{
    name:string,
    salary:number
}

const relationWithSalary4:GenericTuple<object,string>=[
    {
        name:'dada',
        salary:96988
    },
    "this is a string",
]
const relationWithSalary41:GenericTuple4<RelationWithSalaryType,string>=[
    {
        name:'dada',
        salary:96988
    },
    "this is a string",
]
const relationWithSalary42:GenericTuple4<IRelationWithSalary,string>=[
    {
        name:'dada',
        salary:96988
    },
    "this is a string",
]

 */
//todo: create generic interface

interface CrushInterface<T,U=null |undefined>{
    name:string,
    husband:T,
    wife?:U
}

interface IHusband{name:string,salary:number};

const crush1:CrushInterface<boolean>={name:'keya',husband:true};
const crush2:CrushInterface<string>={name:'keya',husband:'rohan'};
const crush3:CrushInterface<object>={name:'keya',husband:{
    age:'gadha',
    salary:0.002
}};
const crush4:CrushInterface<{name:string,salary:number}>={name:'keya',husband:{
    name:'gadha',
    salary:0.002
}};
const crush5:CrushInterface<IHusband>={name:'keya',husband:{
    name:'gadha',
    salary:0.002
}};

const crush6:CrushInterface<boolean,string>={name:'keya',husband:true,wife:'sunny'};

const crush7:CrushInterface<boolean,string>={name:'keya',husband:true,wife:'sunny'};