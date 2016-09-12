var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// class 
var A = (function () {
    // automatic call
    function A() {
        this.MyvirtualMethod();
    }
    A.prototype.MyvirtualMethod = function () {
        console.log("A");
    };
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
        this.testString = "B";
    }
    B.prototype.MyvirtualMethod = function () {
        console.log(this.testString); // This becomes undefined
    };
    return B;
}(A));
var obj = new B();
//*******************************
//checking types
var Foo = (function () {
    function Foo() {
    }
    return Foo;
}());
var Bar = (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        _super.apply(this, arguments);
    }
    return Bar;
}(Foo));
var Bas = (function () {
    function Bas() {
    }
    return Bas;
}());
var bar = new Bar();
console.log(bar instanceof Bar); // true
console.log(bar instanceof Foo); // true
console.log(bar instanceof Object); // true
console.log(bar instanceof Bas); // false
