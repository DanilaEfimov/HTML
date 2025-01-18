// JS Danila Efimov file 2025 (c). All rights recerved
// present math header file defines min function

// first task
function findMin(arr) {
    if (arr.length === 0) { return null; }

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) { min = arr[i]; }
    }
  
    return min;
  }

  let arr = [1.2, 2.71828, 3.14159, 0.577, 1.4145];
  console.log(arr);
  console.log(findMin(arr));

  // math::countZ(array())
function countZ(arr){
    if(arr.length === 0){ return null; }

    var zeroC = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length === 0) { continue; }
        for(var j = 0; j < arr[i].length; j++){
            if(arr[i][j] === 0){ zeroC++; }
        }
    }

    return zeroC;
}

// test countZ
var arr1 = [[0, 1, 0], [0, 1, 1], [1, 1, 1]];
console.log(countZ(arr1));  // 3

// tuple task
let me: [string, string, string];
function showTripleStr(tripleStr){
    console.log(tripleStr[0] + tripleStr[1] + tripleStr[2]);
}

me = ["Danila ", "Efimov ", "Pavlovich"];

// test tuple task
showTripleStr(me);

// printers enum type
enum printers {
    inkjet,     // 0
    dot_matrix, // 1
    laser,      // 2
    lotter,     // 3
}

// enum test
var printer: printers = printers.inkjet;
console.log(printer);   // 0

// class ierarchy
class Pet {
    name: string = 'Some pet'
    age: number = -1
        speak() {
            return "No speak. I am fish!";
        }
        show() {
            return console.log(this.name, this.age, this.speak);
        }
    }

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
        speak() {
            return "Yaw-Gaw!";
        }
        show() {
            return console.log(this.label, this.age);
        }
    }

    class Cat extends Pet {
    name = 'Barsik';
    age = 2;
        speak() {
            return "Miyau!";
        }
        show() {
            return console.log(this.name, this.age);
        }
    }

// class ierarchy test
let barsik = new Cat();
barsik.show();
let drujok = new Dog();
drujok.show();

// I'm turning more hate this thing... typeScript
// it's more turning out no different with C++ ...

// last task: custom class
class system {
    name: "Dinux"
    version: "1.0.0"
    bit_depth: 0x40
    out_device = printers.dot_matrix;
    constructor(_name, _ver, _bit, _out_dev){
        this.name = _name;
        this.version = _ver;
        this.bit_depth = _bit;
        this.out_device = _out_dev;
    }
}

var OS = new system("Dinux", "1.0.0", 0x40, printers.dot_matrix);
console.log(JSON.stringify(OS));