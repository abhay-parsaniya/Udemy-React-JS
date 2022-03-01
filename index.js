// Let and Const Variables

// let name = "Abhay";
// console.log(name);

// name = "Parsaniya";
// console.log(name);

// const name = "Abhay";
// console.log(name);

// name = "Parsaniya";
// console.log(name);

// =====================================================================================

// Arrow Functions

// const printname = (name) => {
//   console.log(name);
// }

// printname("Abhay");

// =====================================================================================

// ES6

// class Price {
//   constructor(){
//     this.price = "200000";
//   }
  
//   printPrice(){
//     console.log(this.price);
//   }
// }

// class Car extends Price{
//   constructor(){
//     super();
//     this.color = "red";
//   }
  
//   printColor(){
//     console.log(this.color)
//   }
// }

// const car1 = new Car();
// car1.printColor();
// car1.printPrice();

// =====================================================================================

// ES7

// class Price {
//     price = "200000";
    
//     printPrice = () => {
//       console.log(this.price);
//     }
//   }
  
//   class Car extends Price{
//     color = "red";
    
//     printColor = () => {
//       console.log(this.color);
//     }
//   }
  
//   const car1 = new Car();
//   car1.printColor();
//   car1.printPrice();

// =====================================================================================

// Spread Operator on Array

// const num = [1, 2, 3];

// const newNum = [num, 4, 5];
// console.log(newNum);

// const newNum = [...num, 4, 5];
// console.log(newNum);

// Spread Operator on Object

// const Car = {
//     color: "red"
// };

// const newCar = {
//     ...Car,
//     price: 20000
// };

// console.log(newCar);

// =====================================================================================

// Rest Operator on Array

// const sum = (...args) => {
//     let sum = 0;
//     for(let i in args)
//     {
//         sum += args[i]; 
//     }
//     console.log(sum);
// };

// sum(1, 2, 3, 4);

// =====================================================================================

// Array Destructuring

// const num = [1, 2, 3, 4, 5];

// [num1, num2, num3, num4, num5] = num;
// console.log(num1, num2, num3, num4, num5);

// [num1, , num3, , num5] = num;
// console.log(num1, num3, num5);

// Object Destructuring

// const Car = {
//     color: "red",
//     price: 200000
// };

// const { color, price } = Car;
// console.log(color, price);

// =====================================================================================

// Primitive Types and References

//Below is Primitive Type Example This Creates Actual Copy (Strings, Boolean, Numbers are All Primitive Types)

// const num1 = 5;
// const num2 = num1;

// console.log(num2);

// Below is Reference Type Example Which can Only Copy the Address or Pointer of Object not Actual Value

// const Car = {
//     color: "red"
// };

// const newCar = Car;

// Car.color = "blue";

//Below Method used for Copying Actual Object

// const newCar = { ...Car };

// Car.color = "blue";

// console.log(newCar);

// =====================================================================================

// Array Functions

// const num = [1, 2, 3, 4, 5];

// const newNum = num.map((nums) => {
//         return nums * 5;
//     });

// console.log(num);
// console.log(newNum);