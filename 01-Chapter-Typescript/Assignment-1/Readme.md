## **Interview Questions**

**1. What is TypeScript, and how is it different from JavaScript?**

`Ans:`  It is a superset of JavaScript, and adds optional static typing and class-based object-oriented programming to the language.

How is it different from JavaScript is below here:

Static type checking in TypeScript provides for compile-time rather than run-time verification of a variable's type.

Js can be made more reliable and maintainable by adding TypeScript's static typing, Object-Based features, type remarks, and compiler which can additionally speed up and strengthen the productivity of development.


<!-- **2. Can you explain the difference between "interface" and "type" in TypeScript?**
 
`Ans`  -->

**3. Can you give an example of how to use generics in TypeScript?**

`Ans:`
```typescript
function Person<T>(params:T):T{
return params;
}
const person=Person<string> ("John smith");
console.log(person);

const personSalary=Person<number> (100);
console.log(personSalary);

```

**4. What is the difference between an "unknown" and "any" type in TypeScript?**

`Ans:` **any** is a type in TypeScript that can represent any type of value. It allows you to write code that can accept any kind of value, regardless of its type.

**unknown,** on the other hand, is a type in TypeScript that represents values whose type is unknown. It is similar to any, but with a key difference: you cannot perform any operations on an unknown value without first checking its type.

**5. Can you give an example of how to use enums in TypeScript?**
```typescript
enum CarType {
 Honda = 1,
 Toyota = getCarTypeCode(‘toyota’),
 Subaru = Toyota * 3,
 Hyundai = 10
}
 
function getCarTypeCode(carName: string): number {
if (carName === ‘toyota’) {
return 5;
}
}
 
CarType.Toyota; // returns 5
CarType.Subaru; // returns 15
```

**6. What is the "as" keyword used for in TypeScript?**

`Ans`In TypeScript, the "as" keyword is used for type assertions.


**7. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?**

`Ans:` Type guards are used to specify a variable's specific type within a conditional block.

The "in" operator checks if a property exists in an object, while the "typeof" operator checks the type of a value.
