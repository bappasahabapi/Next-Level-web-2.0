// npx ts-node-dev --respawn src/10-ternary-nullish.ts
//todo: ternary operator

const age: number = 22;
if (age >= 18) {
    console.log('yes')
} else {
    console.log('no')
}

const isAdult = age>=18 ? 'yes' :'no';
console.log(isAdult);

//todo: Nullish coalescing operator(Null and undefined values)

const isRealUser =''; // no result
// const isRealUser =undefined;
// const isRealUser =null;
const userName =isRealUser ?? 'Guest'
const userName1 =isRealUser ? isAdult : 'Guest'
console.log({userName},{userName1})