console.log("Hello, Node.js!");

const myName = "Danila";
console.log(myName);

let a = 10;
a = 20;
console.log(a);

// once line comment

const str = "abc\n";
console.log(str);

const objectA = {   // object is reference type anyway
    a: 10,
    b: true
}

const objectB = objectA;
objectA.a = 25;
objectA.b = false;

/* really reference type: */
console.log(objectB.a);
console.log(objectB.b);

// dynamic typization
let c = undefined;
c = true;
c = "Danila";
c = 101;

// better let variables with condt
// submition of strings

const hello = "Hello";
const world = "World";
const greeting = `${hello} ${world}`;   // template string
// in {} can be any variable (boolean, integer ...) 
// also exist such way: hello + ' ' + world

const objectC = {
    visible: true,
    city: "New York",
    age: 1000,
    country: "USA",
    // even function can be key:
    cityGreeting: function () {
        console.log("Greeting!!!");
    }
    // alternate syntax:
    /*
    cityGreeting(){...}
    */
}

// it names 'metablock':
objectC.cityGreeting(); // Greeting!!!