// JS Danila Efimov file 2025 (c). All rights recerved
// present math header file defines min function
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// first task
function findMin(arr) {
    if (arr.length === 0) {
        return null;
    }
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
var arr = [1.2, 2.71828, 3.14159, 0.577, 1.4145];
console.log(arr);
console.log(findMin(arr));
// math::countZ(array())
function countZ(arr) {
    if (arr.length === 0) {
        return null;
    }
    var zeroC = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length === 0) {
            continue;
        }
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                zeroC++;
            }
        }
    }
    return zeroC;
}
// test countZ
var arr1 = [[0, 1, 0], [0, 1, 1], [1, 1, 1]];
console.log(countZ(arr1)); // 3
// tuple task
var me;
function showTripleStr(tripleStr) {
    console.log(tripleStr[0] + tripleStr[1] + tripleStr[2]);
}
me = ["Danila ", "Efimov ", "Pavlovich"];
// test tuple task
showTripleStr(me);
// printers enum type
var printers;
(function (printers) {
    printers[printers["inkjet"] = 0] = "inkjet";
    printers[printers["dot_matrix"] = 1] = "dot_matrix";
    printers[printers["laser"] = 2] = "laser";
    printers[printers["lotter"] = 3] = "lotter";
})(printers || (printers = {}));
// enum test
var printer = printers.inkjet;
console.log(printer); // 0
// class ierarchy
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    Pet.prototype.show = function () {
        return console.log(this.name, this.age, this.speak);
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    Dog.prototype.show = function () {
        return console.log(this.label, this.age);
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    Cat.prototype.show = function () {
        return console.log(this.name, this.age);
    };
    return Cat;
}(Pet));
// class ierarchy test
var barsik = new Cat();
barsik.show();
var drujok = new Dog();
drujok.show();
// I'm turning more hate this thing... typeScript
// it's more turning out no different with C++ ...
// last task: custom class
var system = /** @class */ (function () {
    function system(_name, _ver, _bit, _out_dev) {
        this.out_device = printers.dot_matrix;
        this.name = _name;
        this.version = _ver;
        this.bit_depth = _bit;
        this.out_device = _out_dev;
    }
    return system;
}());
var OS = new system("Dinux", "1.0.0", 0x40, printers.dot_matrix);
console.log(JSON.stringify(OS));
