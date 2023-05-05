//a type which is depends on another type
type a1 = null;
type a2 = a1 extends string ? string : null;
type a3 = undefined;
type a4 = number;

//nested conditional type

type d1 = a1 extends null ? null : a3 extends number ? number : any;
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

//todo: example 

type Sheik ={
    wife1:string;
    wife2:string;
};


// check korbe ei sheik type e wife1 property ase ki na. Thakle true noile false

type A =keyof Sheik; // 'wife1' | 'wife2'


// type  CheckProperty<T>= T extends 'wife1' ?true:false ;
// type  CheckProperty<T,W>= T extends {wife1:string} ?true:false ;

type  CheckProperty<T,W>= W extends keyof Sheik ?true:false ;

type CheckWife1 =CheckProperty<Sheik,'wife1'> //true
type CheckWife2 =CheckProperty<Sheik,'wife2'> //true
type CheckWife3 =CheckProperty<Sheik,'wife3'> // false

