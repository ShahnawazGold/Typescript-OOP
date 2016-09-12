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
    Animal.prototype.eat = function () {
        console.log(this.name + " is a Human and is eating");
    };
    return Animal;
}());
var h1 = new Human("");
var a1 = new Animal("world", 50);
h1 = new Animal("test", 25); //this is working, but it should not because it is a fresh object with extra properties
a1 = new Human("james"); //ERROR
var a = { name: "shah" };
a = { name: "david", age: 22 }; //ERROR
