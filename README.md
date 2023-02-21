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