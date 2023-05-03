//todo:run the command
//  npx ts-node-dev --respawn src/index.ts


/* 

*/


//todo: string type promise
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'Data is fetched';
        if (data) {
            resolve(data)
        } else {
            reject("Failed to fetch")
        }
    })

}

const getPromiseData =async ():Promise<string> =>{
    const data1= await makePromise();
    return data1;
}

const r1=makePromise();
console.log({r1})

//todo: boolean type promise
const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = false;
        if (data) {
            resolve(data)
        } else {
            reject("Failed to fetch")
        }
    })

}

const getPromiseDataBoolean =async ():Promise<boolean> =>{
    const data1= await makePromiseBoolean();
    return data1;
}

//todo: now try to load data using json place holder
