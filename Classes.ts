

/**
 * name
 */
class Human {
    name: string;

    constructor( name: string) {
        this.name=name;
    }
    eat()
    {
      console.log(this.name+"this is eat");  
    }
}

class Animal {
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
    eat(){
        console.log(this.name + " is a Animal and is eating");
    }
}

class WildAnimal {
    title: string;
    
    constructor(title: string){
        this.title = title;
    }
    
    eat(){
        console.log(this.title + " is a Wild Animal and is eating");
    }
}

class Robot {
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
}

let h: Human = new Human("Tom");
let A: Animal = new Animal("Goat");
let r: Robot = new Robot("R2-D2");
let r0: Robot = new Animal("Donkey");//how is this possible?

var isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot);//false, giving the right results

var isItAnimal = r0 instanceof Animal;
console.log("Is Donkey a Animal: " + isItAnimal);//true, giving the right results