//-----------------------------------------Object Creation------------------------------------------------
// 1. Object literal (most common)
const user = {
  name: "Nikki",
  age: 18
};

// 2. Constructor
const user2 = new Object();
user2.name = "Nikki";

// 3. Object.create()
const obj = Object.create(null);

//--------------Singleton----------------------
// When using constructor or class, we can restrict object to only one instance.
// This is called Singleton Pattern.

//---------Array vs Object Access---------------
// Array -> index based
const arr = ["h", "i"];
console.log(arr[0]);

// Object -> key based
const user3 = { name: "Nikki" };
console.log(user3.name);

//----------Access Object Properties-------------
// Dot notation
console.log(user3.name);

// Bracket notation
console.log(user3["name"]);

//  Wrong
// console.log(user3.["name"]);

//--------Keys with Space-------------------------
const user4 = {
  "full name": "Nikki Singh"
};

// must use bracket notation
console.log(user4["full name"]);

//---------Symbol as Object Key (Important)--------
// Symbol -> unique key
const mysym = Symbol("key1");

const JsUser = {
  name: "Nikki",
  age: 18,
  // correct way  not like mysym: "secret"
  [mysym]: "secret"
};

//--------Access Symbol-------------------------
console.log(JsUser[mysym]);
// wrong (checks string key)
console.log(JsUser.mysym);

//--------Update Object--------------------------
JsUser.name = "Nikki Singh";

//-------Freeze Object-----------------------------
Object.freeze(JsUser);
// after freeze -> no changes allowed
JsUser.name = "Test"; // ignored

//-----Add Functions (Methods)-----------------------
JsUser.greeting = function () {
  console.log("Hello JS User");
};

//-------fn Reference vs fn Execution------------------------
console.log(JsUser.greeting);   // function reference
console.log(JsUser.greeting()); // execution

//-------this Keyword-----------------------------------
JsUser.greeting2 = function () {
  console.log(`Hello ${this.name}`);
};

const mysym = Symbol("key1");

const JsUser = {
  name: "Nikki",
  "full name": "Nikki Singh",
  age: 18,
  [mysym]: "secret",
  location: "Jaipur",
  email: "nikki@gmail.com",
  isLoggedIn: false,
  lastLogInDays: ["Monday", "Saturday"]
};

JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greeting2 = function () {
  console.log(`Hello ${this.name}`);
};

JsUser.greeting();
JsUser.greeting2();
