var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
* name
*/
var Car = (function () {
    function Car() {
    }
    // method here door 1
    Car.prototype.door = function () {
        return this.glass();
    };
    return Car;
}());
/**
 * car2
 */
var Car2 = (function (_super) {
    __extends(Car2, _super);
    function Car2() {
        _super.apply(this, arguments);
    }
    Car2.prototype.glass = function () { return 1; };
    return Car2;
}(Car));
//var obj1 = new Car(); //eroor show that
//mothod 1// here
//console.log(obj1.door()  ); 
