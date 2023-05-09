type Person = {
    name: string;
    age: number;
  };
  
  function checkedAdult(person: Person[]): Person[] {
    return person.filter((person) => person.age >= 18);
  }
  
  const person = [
    { name: 'ahmed Hridoy', age: 26 },
    { name: 'Rafsan Faruk', age: 27 },
    { name: 'Khairul Islam', age: 17 },
  ];
  
  const adults = checkedAdult(person);
  console.log(adults);