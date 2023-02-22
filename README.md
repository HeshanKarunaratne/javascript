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