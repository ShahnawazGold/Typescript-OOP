
// class 
class A
{
    // automatic call
    constructor()
    {
        this.MyvirtualMethod();
    }

    protected MyvirtualMethod(): void
    {
           console.log("A")
    }
}

class B extends A
{
    private testString: string = "B";

    public MyvirtualMethod(): void
    {
        console.log(this.testString); // This becomes undefined
    }
}

let obj = new B();


//*******************************
//checking types
class Foo{}
class Bar extends Foo{}
class Bas{}

var bar = new Bar();

console.log(bar instanceof Bar); // true
console.log(bar instanceof Foo); // true
console.log(bar instanceof Object); // true

console.log(bar instanceof Bas); // false