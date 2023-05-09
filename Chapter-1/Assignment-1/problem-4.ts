// class Persons {
//     constructor(private name: string, private age: number) {}
  
//     public getDetails(): string {
//       return This person Name is ${this.name} and Age is ${this.age};
//     }
//   }
  
//   class Student extends Persons {
//     constructor(name: string, age: number, private grade: number) {
//       super(name, age);
//     }
//     public getGrade(): number {
//       return this.grade;
//     }
//   }
  
//   const person1 = new Persons('Mahfuz Alam', 26);
//   console.log(person1.getDetails());
  
  
//   const student = new Student('Mahfuz Alam', 26, 20);
//   console.log(student.getDetails());
//   console.log(student.getGrade());