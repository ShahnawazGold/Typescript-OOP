class Human {
    
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
}

class Animal {
    name: string;
    age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    eat(quantity: number){
        console.log(this.name + " is a Human and is eating");
    }
}


let d  = {name:"Hello",age:4};

let h: Human = {name:"hello"}; // This is allowed
let h1: Human = d; // Concept of stale object applied here

let isHuman:boolean = h instanceof Human; // Its false, because we have assigned object literal and assignment works because
// of structural typing
console.log(isHuman); // false



let a1: Animal = {name:"Cat",age:4}; // This is not allowed need to add all properties including functions

// This below statement is allowed 
// Note there is no parameter in function and it does not give any compilation error but you can not call
// this function without paramter, see the call below
let a2: Animal = {name:"Dog",age:4, eat: function() {
    console.log("Eat in object literal");
}}; 

a2.eat(); // Not allowed 
a2.eat(3); // Works fine