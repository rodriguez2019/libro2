var inc = function (x) { return x + 1; };
function Person1(age) {
    var _this = this;
    this.age = age;
    this.growOld = function () {
        _this.age++;
    };
}
var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    return Person;
}());
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000);
var growOld = person.growOld;
growOld();
var Adder = /** @class */ (function () {
    function Adder() {
        var _this = this;
        this.add = function (b) {
            return _this.a + b;
        };
    }
    return Adder;
}());
var add = function (x) { return function (y) { return x + y; }; };
add(123)(456);
var add123 = add(123);
add123(456);
