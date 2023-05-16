

//todo: make number to string array 

const arrayOfNumbers =[1,2,3]  //['1','2','3']
const arrayOfStrings =arrayOfNumbers.map((number)=>{
   return number.toString();
})
console.log(arrayOfStrings)


//todo: example

type AreaString={
    height:string;
    width:string;
}

type AreaNumber={
    height:number;
    width:number;
}


type ReadOnly={
    readonly height:number;
    readonly width:number;
}

type Area={
    // [index in 'bappa'|'saha']: string |number;
    [key in 'height'|'width']: string;
}


//to access type element

type B =AreaNumber['height'] // lookup types
type C =keyof AreaNumber;


const rectangularArea:ReadOnly ={
    height:10,
    width:34
}

// rectangularArea.height=43;



// todo: make it dynamic
type VolumeNumber={
    height:number;
    width:number;
    depth:number
}
type Volume={
    
    // [key in keyof VolumeNumber]: number;

    // todo: make it dynamic
    [key in keyof VolumeNumber]: VolumeNumber[key];
    
}
type Volume1<T>={
    //todo: make it generic
    [key in keyof T]: T[key]

}


const vol1:Volume1<{name:string}> ={name:'bappa'}
