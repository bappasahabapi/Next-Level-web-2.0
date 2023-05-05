"use strict";
//todo:run the command
//  npx ts-node-dev --respawn src/index.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*

*/
//todo: string type promise
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = 'Data is fetched';
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data1 = yield makePromise();
    return data1;
});
const r1 = makePromise();
// console.log({ r1 })
//todo: boolean type promise
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = false;
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};
const getPromiseDataBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
    const data1 = yield makePromiseBoolean();
    return data1;
});
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    return yield response.json();
});
const getFetchedTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result9 = yield getTodo();
    console.log(result9);
});
getFetchedTodoData();
