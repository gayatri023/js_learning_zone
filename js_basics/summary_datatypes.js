//why null return value object - let's introspect
const outsideTemp = null
console.log(typeof outsideTemp);

// how to write code for symbol
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id===anotherId);

// for BigInt
const bigNumber = 1365737585689507875869438409n
console.log(typeof bigNumber)

//array
const heroes = ["Shaktiman", "naagraj", "doga"];

//object - can be defined through curly braces and here we let to store it in variable called myObj
let myObj = {
    name: "Hitesh",
    age: 12
}

//function syntax
/*function (){}
*/

//to stored function in a variable
const myFunction = function(){
    console.log("Hello, World!");
}



/*
js has many datatypes - but officialy as per the documentation there are only two types - 
as how they store and and accessed in memory

1. prrimitive -> it has 7 types
string - call by value
number 
boolean
null
undefined
symbol  - used to defined uniqueness in the file - like uniqueId
BigInt

2. Non Primitive - refernce can be allocate in the memory --> usually datatypes is called function only
array
objects ---> return type = object type
functions ---> return type = object function

question - js is dynamic typed or static typed 
answer - JavaScript is a dynamically typed language, which means that data types of variables are 
determined by the value they hold at runtime and can change throughout the program as we assign different
values to them.

eg. const score = 100


*/