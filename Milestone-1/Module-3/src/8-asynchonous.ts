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

const getPromiseData = async (): Promise<string> => {
    const data1 = await makePromise();
    return data1;
}

const r1 = makePromise();
// console.log({ r1 })

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

const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data1 = await makePromiseBoolean();
    return data1;
}

//todo: now try to load data using json place holder



interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: false
}

const getTodo = async():Promise<ITodo> =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
};

const getFetchedTodoData=async():Promise<void> =>{
    const result9= await getTodo();
    console.log(result9)
}

getFetchedTodoData()