# Javascript

- This repo will be used for Javascript Knowledge.
- Add 'live server' pluging from extensions so that all the changes can be seen locally.
- Node: Is a runtime environment for executing javascript code

# Variables
- If you dont initialize a variable it will be undefined
- Variable names must not be a reserved keyword
- Names should be meaningful
- Cannot start with a number
- Cannot contain a space or a hyphen
- Case sensitive

# Constants
- Cannot reassign a 'const', otherwise use 'let'
~~~js
const NAME = 'Heshan';
console.log(NAME);
~~~

# Primitive Types
~~~js
let name = 'Mosh'; //String
let age = 30; //Number
let isApproved = false; //Boolean
let firstName = undefined; //undefined
let selectColor = null; //null
~~~

- Javascript is a dynamic language(We can define a variable as string and later define a number for that same variable)

# Reference Types
- Objects
- Arrays
- Functions

Objects
~~~js
let person = { firstName: 'heshan', age: 30 };
console.log(person);

//Dot Notation
person.age = 40;

//Bracket Notation
person['name'] = 'Dilan';
console.log(person);
~~~

Arrays
~~~js
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(typeof selectedColors); //object
~~~

Function
~~~js
function greet(name) { //name is a parameter for greet function
    console.log("hello " + name);
}

greet("heshan") // Passing an argument to greet function
~~~

# Operators
- Arithmetic
- Assignment
- Comparison
- Logical
- Bitwise

Arithmetic
~~~js
let x = 10;
let y = 3;

console.log(x + y); // 13  x + y => expression where x and y are operands
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.333
console.log(x % y); // 1
console.log(x ** y); // 1000
console.log(++x); // Increment Operator
console.log(--x); // Decrement Operator
~~~

Assignment
~~~js
let x = 10;

x = x + 5;
x += 5;

x = x * 3;
x *= 3;
~~~

Comparison
~~~js
let x = 10;

//Relational Operators
console.log(x > 10);
console.log(x >= 10);
console.log(x < 10);
console.log(x <= 10);

//Equality
console.log(x === 10);
console.log(x !== 10);

// Strict Equality(Type + Value)
console.log(1 === 1);
console.log('1' === 1);

// Lose Equality(Value)
console.log(1 == 1);
console.log('1' == 1);
~~~

Ternary Operator
~~~js
let points = 110;
let type = (points > 100) ? 'gold' : 'silver';
console.log(type);
~~~

Logical Operators
~~~js
console.log(true && true); // Logical AND
console.log(true || false); // Logical OR
console.log(!false); // Logical NOT
~~~

Falsy(false)
- undefined
- null
- 0
- false
- ''
- NaN

# Bitwise Operators
~~~js
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

console.log(1 | 2); //Bitwise OR
console.log(1 & 2); //Bitwise AND
console.log(0 | 4 | 2); //6

// 00000100
// 00000010
// 00000110
~~~

# for-in loop
~~~js
const person = {
    name: 'heshan',
    age: 30
}

for (let key in person)
    console.log(key, person[key]);
~~~

# for-of loop
~~~js
const colors = ['red', 'green', 'blue'];

for (let color of colors)
    console.log(color);
~~~

FizzBuzz Exercise
~~~js
const output = fizzBuzz(30);
console.log("output:", output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return "Not a number";
    if (input % 3 === 0 && input % 5 === 0)
        return "FizzBuzz";
    if (input % 3 === 0)
        return "Fizz";
    if (input % 5 === 0)
        return "Buzz";

    return input;
}
~~~

SpeedLimit Exercise
~~~js
const output = checkSpeed(130);
console.log("output:", output);

function checkSpeed(input) {
    const speedLimit = 70;
    const MaxPoint = 12;
    const kmPerPoint = 5;

    const speed = Math.floor(input);
    if (speed < speedLimit + kmPerPoint) return 'ok';

    const pointes = Math.floor((speed - speedLimit) / kmPerPoint);

    if (pointes >= 1 && pointes < MaxPoint) return pointes;
    if (pointes >= MaxPoint) return 'License Suspended';
}
~~~

ShowNumbers Exercise
~~~js
showNumbers(50);
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const type = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, type);
    }
}
~~~

CountTruthy Exercise
~~~js
let count = countTruthy([0, 1, undefined, null, NaN, 3, '', 'adfdafa', 'dafda']);
console.log("count", count);

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}
~~~

ShowProperties Exercise

~~~js
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}
~~~

~~~js
const value = sum(5);
console.log(value);

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0) 
            sum += i;

    return sum;
}
~~~

ShowPrimes Exercise
~~~js
showPrimes(10);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}
~~~

# Objects

~~~js
const circle = {
    radius: 3,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: () => console.log("draw called"),
    move: () => console.log("move called")
}

circle.draw();
circle.move();
~~~

# Factory Functions
- Use Camel naming convention
~~~js
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw called");
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(10);
console.log(circle2);
~~~

# Constructor Functions
- Use Pascal naming convention
~~~js
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw called");
    }
}

const circle = new Circle(1);
console.log(circle);
~~~

# Dynamic nature of an object
~~~js
const circle = {
    radius: 1
}

circle.color = 'yellow';
delete circle.radius;
console.log(circle);
~~~

Functions can be declared as below as well
~~~js
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw called");
    }
}

const Circle1 = new Function('radius', `
this.radius = radius;
    this.draw = function () {
        console.log("draw called");
    }
`)

const circle = new Circle1(10);
console.log(circle);
~~~

Can call a function like below as well
~~~js
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw called");
    }
}

Circle.call({}, 1);
const circle = new Circle(1);
~~~

- Primitives are copied by their value
- Objects are copied by their reference

~~~js
let x = 10;
let y = x;

x = 20;
console.log("x:", x);
console.log("y:", y);
~~~

~~~js
let x = { value: 10 }
let y = x;

x.value = 20;
console.log("x:", x);
console.log("y:", y);
~~~

- Arrays and maps are iterables
- Objects are not iterables
~~~js
const circle = {
    radius: 3,
    draw: () => console.log("draw called")
}

for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key);

for (let entry of Object.entries(circle))
    console.log(entry);
~~~

- Cloning an Object
~~~js
const circle = {
    radius: 3,
    draw: () => console.log("draw called")
}

const another = {};
for (let key in circle)
    another[key] = circle[key];

console.log(another);
~~~

- Better way to Clone an object
~~~js
const another = Object.assign({}, circle);
console.log(another);

//Spread Operator
const another = { ...circle };
console.log(another);
~~~