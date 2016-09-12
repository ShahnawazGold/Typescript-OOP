/**
 * name
 */
var Human = (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.eat = function () {
        console.log(this.name + "this is eat");
    };
    return Human;
}());
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log(this.name + " is a Animal and is eating");
    };
    return Animal;
}());
var WildAnimal = (function () {
    function WildAnimal(title) {
        this.title = title;
    }
    WildAnimal.prototype.eat = function () {
        console.log(this.title + " is a Wild Animal and is eating");
    };
    return WildAnimal;
}());
var Robot = (function () {
    function Robot(name) {
        this.name = name;
    }
    return Robot;
}());
var h = new Human("Tom");
var A = new Animal("Goat");
var r = new Robot("R2-D2");
var r0 = new Animal("Donkey"); //how is this possible?
var isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot); //false, giving the right results
var isItAnimal = r0 instanceof Animal;
console.log("Is Donkey a Animal: " + isItAnimal); //true, giving the right results
