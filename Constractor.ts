
//cass 1 clas //////////////////////////////|\\\\\\\\\\\\
class Student1 {

    
    name:string; // pass arg
    constructor(theName: string,age:number) { 
        this.name = theName; //sava arg
        console.log("A constrcutor"); // call 1st constr 1st
    }
}
class Student2 extends Student1 {

}

// objc call here
let a: Student1 = new Student1("A",5); // This is working as expected
let b: Student2 = new Student2("C",66); // This is working too as child class use parents constructor

