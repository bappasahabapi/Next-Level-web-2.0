type PersonType={
    name:string,
    age:number,
    address:string
}

//set it manually
type newType ='name'|"age"|'address';

type newTypeUsingKeyof = keyof PersonType;

// const a:newType=''
// const a1:newTypeUsingKeyof=''