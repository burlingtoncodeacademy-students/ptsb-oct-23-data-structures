/*
    ? Class Methods
    * method is a function that lives inside of a class
    * can be used on any class instance
*/

class Account {
  constructor(name, ssn, balance) {
    this.name = name;
    this.ssn = ssn;
    this.balance = balance;
    this.acctNo = this.generateAcctNo();
  }

  generateAcctNo() {
    const min = 1000000000;
    const max = 9999999999;
    const randNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randNum;
  }

  deposit(amt) {
    this.balance += amt;
  }

  withdraw(amt) {
    return this.balance < amt
      ? 'Insufficient Funds'
      : (this.balance -= amt);
  }
}

const joey = new Account('Joey', 123456789, 1000);
console.log(joey);
const julia = new Account('Julia', 222232323, 500000);
console.log(julia);
julia.withdraw(125000);
console.log(julia);

/*
    ? Class Inheritance
    * extends a parent class with a child class
*/

class MinorAccount extends Account {
  constructor(name, ssn, balance, isMinor) {
    // allows us to access properties and methods of a parent class
    super(name, ssn, balance);
    this.isMinor = isMinor;
  }

  waiveOverdraft() {
    this.balance += 35;
  }
}

const bentley = new MinorAccount('Bentley', 111111111, 50, true);
console.log(bentley);
bentley.waiveOverdraft();
console.log(bentley);

/*
    ? Factory Functions
    * functions that accept data and return new instance of a Class
*/

class Circle {
  constructor(radius) {
    typeof radius === 'number'
      ? (this.radius = radius)
      : new Error('Radius must be a number');
  }

  circumference() {
    return 2 * Math.PI * this.radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const myCircle = new Circle(20);
console.log(myCircle.area());
console.log(myCircle.circumference());

function circleFromDiameter(diameter) {
  return new Circle(diameter / 2);
}

const myDiaCircle = circleFromDiameter(20);
console.log(myDiaCircle);

/*
    ? Static Methods
    * typically provided as utilities/helpers to an application
    * do not require instantiation with a new operator
    * create an instance of our class through its method
*/
class CircleStaticFactoryFx {
  static createCircleUsingDiameter(diameter) {
    return new CircleStaticFactoryFx(diameter / 2);
  }

  constructor(radius) {
    typeof radius === 'number'
      ? (this.radius = radius)
      : new Error('Radius must be a number');
  }
}

const circleFromClass = new CircleStaticFactoryFx(20);
// TypeError -> not accessible on instance level -> static method not visible
// console.log(circleFromClass.createCircleUsingDiameter())

// Accessing CircleStaticFactoryFx using "pass by reference" -> static method is visible
const diaCircle = CircleStaticFactoryFx.createCircleUsingDiameter(40);
console.log(diaCircle);

/*
    ? Static Fields
    * typically properties that do not need to change as you create instances
    * do not require instantiation with a new operator
    * create an instance of our class through its method
*/

// Since a dog is always a pet we don't need to change it for each new Dog instance we create
// Notice that this isn't using a key/value with a colon
// Static fields must be the first thing in a class if they need to be declared
// Remember that classes are not objects but templates for them
// In a class this is how it expects the template to be designed vs what an object expects
class Dog = {
  type = 'pet'
  constructor() {}
}

// You can only use strings, numbers, falsy values (null, undefined), or nothing (see line #140)
// Objects with no value when assigning are undefined
class Dog {
  bio;
  type = 'pet';

  getType() {
    const typeObject = { type: this.type };
    return typeObject;
  }
}

const jesse = new Dog();
console.log(jesse);
console.log(jesse.bio); // Quick challenge - what does this return?
console.log(jesse.type);
console.log(jesse.getType());

jesse.bio = '13/10 she is a great doggo, bork bork - @wereatedogs';
console.log(jesse.bio);

/*
  ? Private Fields
  * Syntax: ???
*/

// Challenge
// Research private fields with Javascript classes
// Create a private field named type with a value of pet
// Create a new instance of Dog and change the private field value to something new
// What do you think happens aft? What reasons might we want private properties?
class Dog {
  constructor() {}
}

const ralf = new Dog();
ralf.#type = 'parent';