var Human = (function () {
    function Human(name) {
        this.name = name;
    }
    return Human;
}());
var Animal = (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.eat = function (quantity) {
        console.log(this.name + " is a Human and is eating");
    };
    return Animal;
}());
var d = { name: "Hello", age: 4 };
var h = { name: "hello" }; // This is allowed
var h1 = d; // Concept of stale object applied here
var isHuman = h instanceof Human; // Its false, because we have assigned object literal and assignment works because
// of structural typing
console.log(isHuman); // false
var a1 = { name: "Cat", age: 4 }; // This is not allowed need to add all properties including functions
// This below statement is allowed 
// Note there is no parameter in function and it does not give any compilation error but you can not call
// this function without paramter, see the call below
var a2 = { name: "Dog", age: 4, eat: function () {
        console.log("Eat in object literal");
    } };
a2.eat(); // Not allowed 
a2.eat(3); // Works fine
