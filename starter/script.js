'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   ////never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };
// const hugo = new Person('hugo', 2003);

// console.log(hugo);

// const danny = new Person('danny', 2004);
// console.log(danny);

// console.log(hugo instanceof Person);
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// hugo.calcAge();

// console.log(hugo.__proto__);
// console.log(hugo.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(hugo));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'homo Sapiens';
// console.log(hugo.species);
// console.log(hugo.hasOwnProperty('firstName'));
// console.log(hugo.hasOwnProperty('species'));

// console.log(hugo.__proto__);
// console.log(__proto__.__proto__);
// console.log(__proto__.__proto__.__proto__);
// console.log(__proto__.__proto__.__proto__.__proto__);
// console.log(__proto__.__proto__.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [1, 4, 5, 3, 5, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique);

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// // 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// const Car = function (car, speed) {
//   this.car = car;
//   this.speed = speed;
// };

// const myCar = new Car('BMW', 120);
// const myCar2 = new Car('kia', 140);

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Accelerated! New speed: ${this.speed} km/h`);
// };
// myCar.accelerate();

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.car} brake's hit New speed: ${this.speed} km/h`);
// };
// console.log(myCar);
// myCar.brake();

// // class PersonCl{

// }
const Personcl = class {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023 - this.birthYear);
  }
};

const hugo = new Personcl('hugo', 2004);
console.log(hugo);
hugo.calcAge();

console.log(hugo.__proto__ === Personcl.prototype);
