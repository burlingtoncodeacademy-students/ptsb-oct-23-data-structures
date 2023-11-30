//
// & Lesson: Object Methods
//
// * Basics:
// * Functions that are built-in and can only be called on them (similar to how arrays have their own)
// * Has access to the global scope and can reference itself using "this"
//

//
// ? Advanced:
// * - Has access to the "this" keyword which deals with current scope.
// * - Closures are how Javascript handles scope and is related to "this".
//

//
// & Part #2:
// * Intermediate object access and using methods
//

// ? Checking objects for properties
const cats = [1, 2, 3];
console.log(cats[9999]);

const cars = {
  make: 'BMW',
  model: 'M6',
  features: {
    airCondition: true,
    steeringWheel: false,
  },
  wheels: [1, 2, 3, 4],
};

console.log(cars.features.airCondition);

if (cars.hasOwnProperty('asdjkfnsd')) {
  console.log(cars.features.airCondition);
} else {
  console.log('doesnt');
}

// Short version of checking properties (optional chaining)
cars.features?.airCondition;

// ? Other built-in object methods to know
// * create()
// * keys()
// * values()
// * fromEntries()
// * is()

const cars = {
  make: 'BMW',
  model: 'M6',
  features: {
    airCondition: true,
    steeringWheel: false,
  },
  wheels: [1, 2, 3, 4],
};

// gets all keys from object in array
console.log(Object.keys(cars));

// gets all values from the object in array
console.log(Object.values(cars));

// use array loops to get into object data
Object.keys(cars).forEach((key) => {
  console.log(key);
});

// split lines for both things
const getCarsKeys = Object.keys(cars);

getCarsKeys.forEach(function (key) {
  console.log(key);
});

// ? Adding custom methods to objects
const cars = {
  make: 'BMW',
  model: 'M6',
  features: {
    airCondition: true,
    steeringWheel: false,
  },
  wheels: [1, 2, 3, 4],

  addFeature: function (feature, val) {
    console.log(feature, val);
    // scoped to this object
    this.features[feature] = val;
    // scoped to the global version of this object
    // cars.features[feature] = true;
  },
};

cars.addFeature('heat', true);
cars.addFeature('cold', false);

console.log(cars);
console.log(cars.features);

/////////////////////////

// & Challenge #1:
// - Build a method that will look for an item in a particular list and only remove that item.
// - Log the current items list and remove one item
// - Log the updated list again with the removed item gone

// !Answer
// ! Your answer here

/////////////////////////

//
// & Part #3:
// * Advanced concepts
//

// ? Chaining object methods
// * {LIVE_EXAMPLES}

// ? How to build a chainable method in an object
// * {LIVE_EXAMPLES}

/////////////////////////

// & Challenge #2:
// - Create an object with a boolean "status" property and a default value
// - Add a custom method to get the status that can be chained
// - Log the status boolean value when the method is called
// - Check the object property "status" exists and then call your custom get status method using chaining
//
// - Create a picture object with a status (default false)
// - Add two custom methods for getting the download status and another for changing it
// - Getting the status logs the current status and is chainable method
// - Changing the status logs it is changing and is chainable method
// - Check that the picture has the status property
// - If it has the property log that it does
// - Call your pictures custom methods and change the status to true + get the latest status using chaining

// ! Answer
// ! Your answer here

/////////////////////////

//
// * Homework
// * Menu Order      - https://replit.com/team/ptsb-oct-2023/menu-order
// * GPA Calculator  - https://replit.com/team/ptsb-oct-2023/gpa-calculator
// * Tag Search      - https://replit.com/team/ptsb-oct-2023/tag-search (optional)
//
