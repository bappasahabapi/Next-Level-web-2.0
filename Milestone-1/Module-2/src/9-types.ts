
//todo: example-1(null)

const searchName =(value:string |null)=>{
    if(value===null){
        console.log('Nothing to search')
    }else{
        console.log(`Searching$ ${value}`)
    }
}

let aa;
// console.log(aa) // undefined
// searchName(a)

// searchName('bappa')
searchName(null)


//todo: exmaple-2(unkown)

//kmh^-1 --> ms^-1

const getCarSpreed=(spreed:unknown)=>{
    if(typeof spreed === 'number'){
        const convertedSpreed =Math.round((spreed*1000)/3600);
        console.log(convertedSpreed)
    }
    else if(typeof spreed ==='string'){
        // const value =spreed.split(" ") //['10' , 'kmh^-1']
        const [value,unit] =spreed.split(" ") //['10' , 'kmh^-1']

        const convertedSpreed =((parseFloat(value)*1000)/3600);
        console.log(`speed is: ${convertedSpreed}`)
    }else{
        console.log('There is other type')
    }
}

getCarSpreed(100);
getCarSpreed('100 kmh^-1');
getCarSpreed(true);
// getCarSpreed("@");


//todo: example-3(never type)

function throwError(message:string):never{
    throw new Error(message);
}

throwError('Error hoyece ra vai')