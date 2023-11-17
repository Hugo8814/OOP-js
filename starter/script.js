// 'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   ////never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };
// const hugo2 = new Person('hugo', 2003);

// const danny = new Person('danny', 2004);
// console.log(danny);

// console.log(hugo2 instanceof Person);
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// hugo2.calcAge();
// Person.hey = function () {
//   console.log('hey');
//   console.log(this);
// };
// Person.hey();

// // console.log(hugo.__proto__);
// // console.log(hugo.__proto__ === Person.prototype);
// // console.log(Person.prototype.isPrototypeOf(hugo));
// // console.log(Person.prototype.isPrototypeOf(Person));

// // Person.prototype.species = 'homo Sapiens';
// // console.log(hugo.species);
// // console.log(hugo.hasOwnProperty('firstName'));
// // console.log(hugo.hasOwnProperty('species'));

// // console.log(hugo.__proto__);
// // console.log(__proto__.__proto__);
// // console.log(__proto__.__proto__.__proto__);
// // console.log(__proto__.__proto__.__proto__.__proto__);
// // console.log(__proto__.__proto__.__proto__.__proto__.__proto__);

// // console.dir(Person.prototype.constructor);

// // const arr = [1, 4, 5, 3, 5, 3];
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ === Array.prototype);
// // console.log(arr.__proto__.__proto__);

// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };

// // console.log(arr.unique);

// // const h1 = document.querySelector('h1');
// // console.dir(x => x + 1);

// ///////////////////////////////////////
// // Coding Challenge #1

// // 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// // 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// // // 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// // DATA CAR 1: 'BMW' going at 120 km/h
// // DATA CAR 2: 'Mercedes' going at 95 km/h

// // const Car = function (car, speed) {
// //   this.car = car;
// //   this.speed = speed;
// // };

// // const myCar = new Car('BMW', 120);
// // const myCar2 = new Car('kia', 140);

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`Accelerated! New speed: ${this.speed} km/h`);
// // };
// // myCar.accelerate();

// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// //   console.log(`${this.car} brake's hit New speed: ${this.speed} km/h`);
// // };
// // console.log(myCar);
// // myCar.brake();

// // // class PersonCl{

// // }
// const Personcl = class {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   greet() {
//     console.log(`hey ${this.firstName}`);
//   }
//   get age() {
//     return 2023 - this.birthYear;
//   }
//   static hey() {
//     console.log('hey2');
//     console.log(this);
//   }
// };

// const hugo = new Personcl('hugo', 2004);
// // console.log(hugo);
// // hugo.calcAge();

// console.log(hugo.Age);

// // console.log(hugo.__proto__ === Personcl.prototype);
// // // Personcl.prototype.greet = function () {
// // //   console.log(`hey ${this.firstName}`);
// // // };
// // hugo.greet();

// const account = {
//   owner: 'hugo',
//   movement: [2444, 3434, 543, 45, 673],
//   get latest() {
//     return this.movement.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movement.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movement);

// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);

// console.log(steven);
// steven.name = 'steven';
// steven.birthYear = 2003;

// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('sarah', 1983);

// sarah.calcAge();

// /*
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */

// const carSpeed = class {
//   constructor(make, carSpeed) {
//     this.make = make;
//     this._carSpeed = carSpeed;
//   }

//   get speedUS() {
//     return this._carSpeed / 1.6;
//   }

//   set speedUS(speed) {
//     this._carSpeed = speed * 1.6;
//   }

//   accelerate() {
//     this._carSpeed += 10;
//     console.log(`Accelerated! New speed: ${this._carSpeed} km/h`);
//   }

//   brake() {
//     this._carSpeed -= 5;
//     console.log(`Brake applied! New speed: ${this._carSpeed} km/h`);
//   }
// };

// const car = new carSpeed('bmw', 120);
// console.log(car);

// //console.log(car.speedUS);

// car.speedUS = 120;
// console.log(car);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
const student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

student.prototype = Object.create(Person.prototype);

student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName} and i study ${this.course}`);
};
const mike = new student('mike', 2003, 'CS50');
console.log(mike);
mike.introduce();
mike.calcAge();

student.prototype.constructor = student;

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const EV = function (carMake, speed, charge) {
//   this.carMake = carMake;
//   this.speed = speed;
//   this.charge = charge;
// };

// const car = function (carMake, speed, charge) {
//   EV.call(this, carMake, speed, charge);
// };

// car.prototype = Object.create(EV.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this._carSpeed += 10;
//   this.charge -= 1;

//   console.log(
//     `Accelerated! New speed: ${this._carSpeed} km/h and charge is now ${this.charge}% `
//   );
// };

// const car1 = new car('Tesla', 120, 23);
// console.log(car1);
// car1.chargeBattery(40);
// console.log(car1); //why is not 40 now

// car.prototype.constructor = car;
// const Personcl = class {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   greet() {
//     console.log(`hey ${this.firstName}`);
//   }
//   get age() {
//     return 2023 - this.birthYear;
//   }

//   static hey() {
//     console.log('hey2');
//     console.log(this);
//   }
// };

// class StudentCL extends Personcl {
//   constructor(fullName, birthYear, course) {
//     //always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`my name is ${this.firstName} and i studying ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2023 - this.birthYear
//       } years old, and im a waste man who still works at mcdeez`
//     );
//   }
// }
// const danny = new StudentCL('joke  man', 2004, 'coding');
// danny.introduce();
// danny.calcAge();
// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const danny = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`hi im ${this.firstName} and im studying ${this.course}`);
// };
// const danny2 = Object.create(StudentProto);

// danny2.init('danny deez', 2004, 'cs50');
// danny2.calcAge();
// danny2.introduce();

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
  }
}
