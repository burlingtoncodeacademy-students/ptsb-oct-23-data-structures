/*
    ? Classes
    * templates or blueprints for creating objects
    * they encapsulate data with code
    * JS is a prototype-based langauge with access to OOP principles
    * Class are NOT hoisted
    * Classes are considered special functions. They can be defined as:
        * class declarations
        * class expressions
        ! NEITHER ARE HOISTED
*/

// ? Class Declaration
// * Syntax: class {ClassName}
// * Parameter: n/a
// * Classes are always capitalized

// Classes look similar to objects using curly braces but they are not
// Consider them templates for objects that you will later create
// Constructors is a special method that create/initializes an object created by a class (1 per class)

// ? Create a new instance
// We create our instance, aka instantiation of the class, and pass in properties designed in our class's constructor

// Challenge
// If log the Kelly instance what would the values be for name, city, and cohort?
// Would this error?

// ? Prototype Chaining
// Consider the "instance" again, it's a clone more or less of its parent class which is why typeof below logs object
// Class = template for objects, instances = objects created by using the class following the template

// ? Accessing object instance values
// We can access, add, and update things just like our previous lesson

// ? Class Expression
// Remember this no different than assigning a variable

// ? Named Class Expression
// Equivalent to the above but has a name that can be referenced
// Think about how a function can also be declared similarly - function(){} or function getHome(){}
