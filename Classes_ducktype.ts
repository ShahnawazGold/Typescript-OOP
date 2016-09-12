


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
    eat(){
        console.log(this.name + " is a Human and is eating");
    }
}

let h1 = new Human("");
let a1 = new Animal("world", 50);
h1 = new Animal("test", 25);//this is working, but it should not because it is a fresh object with extra properties
a1 = new Human("james");//ERROR



let a = {name: "shah"};
a = {name: "david", age: 22};//ERROR