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

# String
~~~js
//String primitive
const message = 'hi';
console.log(typeof message);

//String object
const another = new String('hi');
console.log(typeof another);
~~~

# Template Literals
~~~js
const message1 = "This is \n" +
    "\'first\' value";

const message2 = `This is the
'second' value`;

console.log(message1);
console.log(message2);
~~~

# Date
~~~js
const now = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9);

console.log(now);
console.log(date1);
console.log(date2);
~~~

ShowAddress Exercise
~~~js
const address = {
    street: "Templars Road",
    city: "Colombo",
    zipCode: 10500
}

function showAddress(obj) {
    for (let key in obj)
        console.log(key, obj[key]);
}

showAddress(address);
~~~

Exercise
~~~js
let address1 = createAddress("Street", "Colombo", 123);
console.log(address1);

let address2 = new Address("Street", "Colombo", 123);
console.log(address2);

//Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
~~~

Exercise
~~~js
let address1 = new Address("Street", "Colombo", 123);
let address2 = new Address("Street", "Colombo", 123);

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    let isEqual = true;
    for (let key in address1) {
        if (address1[key] !== address2[key]) {
            isEqual = false;
            break;
        }
    }
    return isEqual;
}

function areSame(address1, address2) {
    return address1 === address2;
}
~~~

# Arrays

- Adding more to arrays from beginning, middle and end
~~~js
const numbers = [3, 4];

//End
numbers.push(5, 6);

//Beginning
numbers.unshift(1, 2);

//Middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);
~~~

- Find Elements in Array Primitives
~~~js
const numbers = [1, 2, 3, 1, 4];
console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(1));

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
]

console.log(courses.includes({ id: 1, name: 'a' }));
console.log(courses.includes(courses[0]));
~~~

- Find Elements in Reference Type
~~~js
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
]

const course = courses.find(function (course) {
    return course.name === 'a';
});
console.log(course);

const course1 = courses.findIndex(function (course) {
    return course.name === 'a';
});
console.log(course1);
~~~

- Arrow Functions
~~~js
const course = courses.find(course => course.name === 'a');
~~~

- Remove element from an array
~~~js
const numbers = [1, 2, 3, 4, 5];

//End
const last = numbers.pop();

//Beginning
const first = numbers.shift();

//Middle
numbers.splice(2, 1);

console.log(numbers);
~~~

- Emptying an Array
~~~js
let numbers = [1, 2, 3, 4, 5];

//Solution 1
numbers = [];
console.log(numbers);

//Solution 2
numbers.length = 0;
console.log(numbers);

//Solution 3
numbers.splice(0, numbers.length);
console.log(numbers);

//Solution 4
while (numbers.length > 0)
    numbers.pop()

console.log(numbers);
~~~

- Combining and Slicing 2 arrays
- If primitive type copied by value and if reference type copied by reference
~~~js
const first = [1, 2, 3];
const second = [4, 5, 6];

//Combine 2 Arrays
const combined = first.concat(second);

//Slice an Array 
const slice = combined.slice(2);
console.log(combined);
console.log(slice);
~~~

- Spread Operator
~~~js
const first = [1, 2, 3];
const second = [4, 5, 6];

const combine = [...first, 'a', ...second, 'b'];
console.log(combine);
~~~

- Iterating an Array
~~~js
const numbers = [1, 2, 3];

for (let number of numbers)
    console.log(number)

numbers.forEach(number => console.log(number));
~~~

- Join Method
~~~js
const numbers = [1, 2, 3];
const joined = numbers.join(',');

console.log(joined);
~~~
- Sorting and reversing
~~~js
const numbers = [1, 4, 5, 2, 6, 3];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);
~~~

- Extended Sorting
~~~js
const courses = [
    { id: 1, name: 'Node' },
    { id: 2, name: 'java' },
]

courses.sort(function (a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;

});
console.log(courses);
~~~

- every(): Checks every item in the array match the criteria
- some(): Checks at least one item in the array match the criteria

~~~js
const numbers = [1, 4, 5, 2, 6, 3];

const allPositive = numbers.every(function (value) {
    return value >= 0;
});

console.log(allPositive);

const atLeastOnePositive = numbers.some(function (value) {
    return value >= 0;
});

console.log(atLeastOnePositive);
~~~

- Filtering
~~~js
const numbers = [1, -4, 5, 2, 6, 3];

const filtered = numbers.filter(number => number >= 0);
console.log(filtered);
~~~

- map()
~~~js
const numbers = [1, -4, 5, 2, 6, 3];

const filtered = numbers.filter(number => number >= 0);
const items = filtered.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);
~~~

- If you are returning an object in arrow functions need to surround the obj with paranthesis
~~~js
const numbers = [1, -4, 5, 2, 6, 3];
const items = numbers
    .filter(number => number >= 0)
    .map(n => ({ values: n }));
console.log(items);
~~~

- reduce()
~~~js
const numbers = [1, -4, 5, 2, 6, 3];

let sum = 0;
for (let n of numbers)
    sum += n;
console.log(sum);

const reduce = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(reduce);
~~~

- Exercise 1
~~~js
const numbers = arrayFromRange(1, 4);
console.log(numbers);

function arrayFromRange(min, max) {
    const arr = [];
    for (let i = min; i <= max; i++)
        arr.push(i);
    return arr;
}
~~~

- Exercise 2
~~~js
const numbers = [1, 2, 3, 4];
console.log(includes(numbers, 2));

function includes(array, searchElement) {
    for (let number of array)
        if (number === searchElement)
            return true;
    return false;
}
~~~

- Exercise 3
~~~js
const numbers = [1, 2, 3, 4, 1];
console.log(except(numbers, [1,2,5]));

function except(array, excluded) {
    const output = [];
    for (let number of array)
        if (!excluded.includes(number))
            output.push(number);
    return output;
}
~~~

- Exercise 4
~~~js
const numbers = [1, 2, 3, 4];
console.log(move(numbers, 2, -3));

function move(array, index, offset) {

    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error("Invalid offset");
        return;
    }

    let output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}
~~~

- Exercise 5
~~~js
const numbers = [1, 2, 3, 4, 1];
console.log(countOccurences(numbers, -1));

function countOccurences(array, searchElement) {
    let count = 0;
    //Sol 1
    for (let number of array)
        if (number === searchElement)
            count++;
    return count;

    //Sol2
    return array.reduce((accumulator, currentValue) => {
        return (currentValue === searchElement) ? accumulator + 1 : accumulator;
    }, 0);
}
~~~

- Exercise 6
~~~js
const numbers = [1, 2, 3, 4, 1];
console.log(getMax(numbers));

function getMax(array) {
    if (array.length === 0) return undefined;

    //Sol1
    let max = Number.MIN_VALUE;
    for (let number of array)
        if (number > max)
            max = number;
    return max;

    //Sol2
    return array.reduce((a, current) => (current > a) ? current : a);
}
~~~

- Exercise 7
~~~js
const movies = [
    { title: "a", year: 2018, rating: 4.5 },
    { title: "b", year: 2018, rating: 4.7 },
    { title: "c", year: 2018, rating: 3 },
    { title: "d", year: 2017, rating: 4.5 },
]

const titles = movies
    .filter(m => m.year === 2018 && m.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles);
~~~

- Functions
~~~js
// Function Declaration
function walk() {
    console.log("walk");
}

// Anonymous Function Expression
let run = function () {
    console.log("run");
}

walk();
run();
~~~

- Hoisting: Process of moving Functions Declarations to the top
- Arguments of a function
~~~js
function sum() {
    let total = 0;
    for (value of arguments)
        total += value;
    return total;
}

console.log(sum(1, 2, 3, 4, 5));
~~~