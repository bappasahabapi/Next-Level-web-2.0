//todo:run the command
//  npx ts-node-dev --respawn src/index.ts

const addMeToCrushHeart6=<T>(myInfo16:T)=>{
    const crush1 ="s.singha";
    const updateData ={crush1,...myInfo16};
    return updateData;
}

type myInfoType6={
    name:string,
    age:number,
    salary:number
}

const myInfo16:myInfoType6={
    name:'bapi da ',
    age:396,
    salary:898
}

const ans6=addMeToCrushHeart6<myInfoType6>(myInfo16);
console.log({ans6})
// ans.