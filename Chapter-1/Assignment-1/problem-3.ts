function reverseArray<T>(...params:T[]):T[]{
    return params.reverse();
  }
  
  const numbers=[1,2,3,4,5,6,7];
  const reverseNumber=reverseArray(...numbers);
  console.log(reverseNumber);
  
  
  const personList=["Bappa","Mahfuz","Ahmed","chamak","khairul"];
  const reversePersonList=reverseArray(...personList);
  console.log(reversePersonList);