var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//cass 1 clas //////////////////////////////|\\\\\\\\\\\\
var Student1 = (function () {
    function Student1(theName, age) {
        this.name = theName; //sava arg
        console.log("A constrcutor"); // call 1st constr 1st
    }
    return Student1;
}());
var Student2 = (function (_super) {
    __extends(Student2, _super);
    function Student2() {
        _super.apply(this, arguments);
    }
    return Student2;
}(Student1));
// objc call here
var a = new Student1("A", 5); // This is working as expected
var b = new Student2("C", 66); // This is working too as child class use parents constructor
// CASS 2 HERE//////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\
var Student3 = (function () {
    function Student3() {
    }
    return Student3;
}());
var Student4 = (function (_super) {
    __extends(Student4, _super);
    function Student4(theName, age) {
        this.name = theName;
        console.log("Student4 constrcutor");
        _super.call(this); // must be use call constr
    }
    return Student4;
}(Student3));
// object call HERE//////
var aa = new Student3(); // This is working as expected/This IS USE
var cc = new Student4("C", 8); // This is working as when assign super() key then use class Student4 CALL
// cass 3 //////////////////////\\\\\\\\\\\\\\\\\\\\\\\\
var Student5 = (function () {
    function Student5(theName, age) {
        this.name = theName;
        console.log("Student5 constrcutor");
    }
    Student5.prototype.displayName = function () {
        console.log("Name = " + this.name);
    };
    return Student5;
}());
var Student6 = (function (_super) {
    __extends(Student6, _super);
    function Student6(theName) {
        this.name = theName;
        console.log("F constrcutor");
        _super.call(this, theName, 4); // Must call super with two arguments
        //super("Hello",5); // Multiple supper call working, No error here -- seems to be some special case   
    }
    return Student6;
}(Student5));
// call objc here
var e = new Student5("Student5", 6);
var f = new Student6("Student6");
f.displayName(); // Display "F"
