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

- REST parameter must be the last parameter in a function
~~~js
function sum(...prices) {
    return prices.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));
~~~

- Default values for Parameters
~~~js
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest(10000));
~~~

- Getters and Setters
~~~js
const person = {
    firstName: 'heshan',
    lastName: 'Karunaratne',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
person.fullName = "H Karu";
console.log(person.fullName);
~~~

- Try-Catch
~~~js
const person = {
    firstName: 'heshan',
    lastName: 'Karunaratne',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') throw new Error("Invalid input");

        const parts = value.split(" ");
        if (parts.length !== 2) throw new Error("Enter first name and last name");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
try {
    person.fullName = '';
} catch (e) {
    alert(e);
}

console.log(person.fullName);
~~~

- Var and Let
- var adds variable to the window object which is not a good practice.
- var creates variables which are function scoped, while let creates variables which are block scoped
- Use let and const when necessary

- 'This' is the object that is executing the current function
~~~js
//method -> obj
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
}

video.stop = function () {
    console.log(this);
}

video.stop();
~~~

~~~js
//function -> global(window, global)
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
}

function playVideo() {
    console.log(this);
}

playVideo();
~~~
~~~js
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
}

video.showTags();
~~~

- Exercise 1
~~~js
function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]]
    return items.reduce((a, c) => a + c);
}
console.log(sum([1, 2, 3, 4, 5]));
~~~

- Exercise 2
~~~js
const circle = {
    radius: 2,
    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

circle.radius = 1;
console.log(circle.area);
~~~

- Exercise 3
~~~js
try {
    const numbers = [1, 2, 3, 4, 1];
    console.log(countOccurences(null, -1));
} catch (e) {
    console.log(e.message);
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array)) throw new Error("Invalid array");

    return array.reduce((accumulator, currentValue) => {
        return (currentValue === searchElement) ? accumulator + 1 : accumulator;
    }, 0);
}
~~~

# OOP
- 4 pillars 
    1. Encapsulation: Group related variables and methods together to reduce complexity
    2. Abstraction: Hiding the details and complexity
    3. Inheritance: Eliminate redundant code
    4. Polymorphism: Objects that take many forms 

- We combine group of related variables and functions into a unit called an Object.
- These variables are known as 'Properties' and functions are known as 'Methods'.

- Below code have 2 properties and 1 method
~~~js
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw() {
        console.log("draw");
    }
};
~~~

- Factory Functions
~~~js
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw circle with ", this.radius);
        }
    };
}

const circle = createCircle(2);
circle.draw();
~~~

- Abstraction
~~~js
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let computeOptimizedLocation = function (factor) {
        console.log("factor", factor);
    }

    this.draw = function () {
        let x,y;
        computeOptimizedLocation(0.1);
        console.log("draw");
    }
}

const circle = new Circle(10);
circle.draw();
~~~

- Closure: Scope is temporary, but closure is not. Everytime draw() method is called x,y local variables are reinitialized and after draw() method is finished x,y are removed. But computeOptimizedLocation variable resides in the memory as for the draw() methods closure.

- Getters and Setters
~~~js
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.draw = function () {
        console.log("draw");
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error("Invalid Location");
            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);
circle.defaultLocation = { x: 10, y: 10 };
~~~

- Stopwatch Exercise
~~~js
function StopWatch() {
    let timer;
    let duration = 0;
    let isStarted = false;

    this.start = function () {
        if (this.isStarted) throw new Error("Already Started");

        isStarted = !isStarted;
        timer = new Date();
    }

    this.stop = function () {
        if (!isStarted) throw new Error("Already Stopped");

        isStarted = !isStarted;
        this.duration = (new Date() - timer) / 1000;
    }

    this.reset = function () {
        this.duration = 0;
        isStarted = false;
    }
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })

}

const clock = new StopWatch();
~~~

# Inherihance
~~~txt     
        IS-A relationship
Circle  -------------------> Shape <-------------------  Square 
Derived/Sub/Child            Base/Super/Parent
                             computeOptimumLocation()
Circle is-a Shape
Square is-a Shape
~~~

# Prototype
- Every object has a prototype except the root object
~~~js
let x = {};
let y = {};

if (Object.getPrototypeOf(x) === Object.getPrototypeOf(y)) {
    console.log("Equals");
} else {
    console.log("Not Equals");
}
~~~

- Property Descriptors
~~~js
let person = { name: 'heshan' };

Object.defineProperty(person, "name", {
    writable: false,
    enumerable: true,
    configurable: false
});

person.name = "Dilan";
delete person.name;
console.log(person);
~~~

- Instance members and Prototype members
~~~js
function Circle(radius) {
    // Instance members
    this.radius = radius;
}

// Prototype members
Circle.prototype.draw = function () {
    console.log("draw");
}

const c1 = new Circle(1);
const c2 = new Circle(10);

Circle.prototype.toString = function () {
    return 'Circle with radius ' + this.radius;
}

console.log(c1.toString());
console.log(c2.toString());
~~~

- Iterating Instance and Prototype members
~~~js
function Circle(radius) {
    this.radius = radius;
    this.move = function () {
        console.log("move");
    }
}

Circle.prototype.draw = function () {
    console.log("draw");
}

const c1 = new Circle(1);

// Returns instance members
console.log(Object.keys(c1));

// Returns all members(Instance + Prototype)
for (let key in c1) console.log(key);
~~~

- Prototypical Inheritance
~~~js
function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
}

function Circle(radius) {
    this.radius = radius;
}

// Circles prototype changing to Shapes prototype 
Circle.prototype = Object.create(Shape.prototype); 

Circle.prototype.draw = function () {
    console.log("draw");
}

const s = new Shape();
const c = new Circle(1);
~~~

- Whenever you reset the prototype need to reset the constructor as well
~~~js
function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
}

function Circle(radius) {
    this.radius = radius;
}
// Before changing
// Circle.prototype.constructor = Circle
// new Circle.prototype.constructor() => new Circle();

// Circles prototype changing to Shapes prototype 
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log("draw");
}

const s = new Shape();
const c = new Circle(1);
~~~

- Check below snippet
~~~txt
const c = Circle(1);
~~~
- When we define an object without the 'new' keyword, 'this' refers to the window object.

~~~js
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log("draw");
}

function Square(size) {
    this.size = size;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const c = new Circle(1, "red");
~~~

- Intermediate Function Inheritance
~~~js
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}
extend(Circle, Shape);
Circle.prototype.draw = function () {
    console.log("draw");
}

function Square(size) {
    this.size = size;
}
extend(Square, Shape);

const c = new Circle(1, "red");
const sq = new Square(10);
~~~

- Method Overriding
~~~js
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
}

function Circle() {
}
extend(Circle, Shape);

Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    console.log("duplicate circle");
}

const c = new Circle();
c.duplicate();
~~~

- Mixins
~~~js
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log("eating");
    }
};

const canWalk = {
    walk: function () {
        console.log("walking");
    }
};

const canSwim = {
    swim: function () {
        console.log("Swimming");
    }
};

function Person() { }
mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function GoldFish() { }
mixin(GoldFish.prototype, canEat, canSwim);

const goldFish = new GoldFish();
console.log(goldFish);
~~~

- Exercise 1
~~~js
function HTMLElement() {
    this.click = function () {
        console.log("click");
    }
};

HTMLElement.prototype.focus = function () {
    console.log("focus");
};

function HTMLSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push(item);
    }

    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
};

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const e = new HTMLElement();
const s = new HTMLSelectElement();

s.addItem('1');
s.addItem('2');
s.removeItem('1');
~~~

- Exercise 2
~~~js
function HTMLElement() {
    this.click = function () {
        console.log("click");
    }
};

HTMLElement.prototype.focus = function () {
    console.log("focus");
};

function HTMLSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push(item);
    }

    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function () {
        console.log(`<select>${this.items.map(item => `<option>${item}</option>`).join('')}</select>`)
    }

};

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const e = new HTMLElement();
const s = new HTMLSelectElement([1, 2, 3, 4]);

s.render();

function HTMLImageElement(src = "") {
    this.src = src;

    this.render = function () {
        console.log(`<img src="${this.src}"></img>`)
    }
}

HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;

const img = new HTMLImageElement("http://location");

const elements = [
    new HTMLSelectElement([1, 2]),
    new HTMLImageElement()
]

for (let element of elements)
    element.render();
~~~

# ES6 Classes
~~~js
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function () {
            console.log("move");
        }
    }

    draw() {
        console.log("draw");
    }
}

const c = new Circle(1);
~~~

- Function Expressions are not hoisted, but Function Declarations are
- Both Class Expressions and Declarations are not hoisted. Use Class Declaration whenever possible

- Static functions
~~~js
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function () {
            console.log("move");
        }
    }

    draw() {
        console.log("draw");
    }

    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = Circle.parse('{ "radius":1 }');
console.log(circle);
~~~

- This keyword
    - When you call draw() as a method on an object, this will point to that object
    - When you call draw() as a standalone function, this will point to the global object
~~~js
const Circle = function () {
    this.draw = function () { console.log(this); }
};

const c = new Circle();
//Method call
c.draw();

const draw = c.draw;
//Function call
draw()
~~~

- By default body of classes in strict mode so that it prevents from modifying the global object
~~~js
class Circle {
    draw() {
        console.log(this);
    }
}
const c = new Circle();
const draw = c.draw;
draw();
~~~

- Private Members with Symbols()
~~~js
const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }
    [_draw]() {
        console.log("draw");
    }
}

const c = new Circle(1);
console.log(c);
~~~

- WeakMap to make private members
~~~js
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
        _move.set(this, () => {
            console.log("move", this);
        });
    }
    draw() {
        _move.get(this)();
        console.log("draw");
    }
}

const c = new Circle(1);
c.draw();
~~~

- Getters and Setters in ES6
~~~js
const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if (value <= 0) throw new Error("Invalid Radius");
        _radius.set(this, value);
    }
}

const c = new Circle(1);
~~~

- Inheritance
~~~js
class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log("move");
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    draw() {
        console.log("draw");
    }
}

const c = new Circle('red');
~~~

- Exercise
~~~js
const _items = new WeakMap();
class Stack {

    constructor() {
        _items.set(this, []);
    }

    get count() {
        return _items.get(this).length;
    }

    push(item) {
        _items.get(this).push(item);
    }

    pop() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error("Empty Stack");

        return items.pop();
    }

    peek() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error("Empty Stack");

        return items[items.length - 1];
    }
}

const stack = new Stack();
~~~

- Cohesion: Things that are highly related, they go together
- Common JS Modules
~~~js
const Circle = require('./circle');

const c = new Circle(1);
c.draw();
~~~

~~~js
const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log("Circle with radius " + _radius.get(this));
    }
}

module.exports = Circle;
~~~