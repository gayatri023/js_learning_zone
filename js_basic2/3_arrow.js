//arrow fn 

const user = {
    username : "nikki",
    price : 99,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website `);   // this is used to refer current context
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);    // this will show empty curly barces  as there is no context in global 

// inside browser when engine runs the global object is window object while in editor it is empty object

function chai (){
    let username = "Nikki"
    console.log(this);
}

chai()

/* 
function chai(){
    let username ="Nikki"
    console.log(this.username);         ===> 'this' can't be use inside a function it can provide value for object only
    }


    ==> another way of writing this is 
    const chai = function (){
    let username ="Nikki"
    console.log(this.username);             ===>here also 'this' can't be use inside a function
    }
*/

//----------------how to declare fn in arrow way -------------------------------------------------

const chai = () => {
    let username ="Nikki"
    console.log(this.username);  // if use this.username then it will show undefined and if use this it wil show {}         
    }


    // pure arrow fn --- basic syntax  = () => {} can also write like this
    const addTwo = (num1, num2) => {     // curly braces used then have to use return
        return num1 + num2
    }
    console.log(addTwo(3,4));
    
    //implicit return - we don't use curly braces
const sub1 = (num3, num4) => num3-num4
console.log(sub1(5,2));

const sub2 = (num3, num4) => (num3-num4)   // if wrote in parenthesis does not need to use return
console.log(sub2(5,2));

// const addTwo = (num1, num2) => {username: "nikki"}      ----- this will give undefined because we can not return value like this we need to type them under parenthiesis
const addTwo = (num1, num2) => ({username: "nikki"}) 



// ============================================================================
// JAVASCRIPT: "this" KEYWORD AND ARROW FUNCTIONS
// This file demonstrates how "this" behaves in objects, normal functions,
// and arrow functions, along with different arrow function syntaxes.
// ============================================================================


// ============================ OBJECT & "this" ================================

const user = {
    username: "nikki",
    price: 99,

    welcomeMessage: function () {
        // "this" refers to the current object
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
};

// Method call: "this" points to the user object
user.welcomeMessage();

// Updating object property changes the context
user.username = "sam";
user.welcomeMessage();

// Global "this":
// - In browser: window object
// - In Node.js: empty object {}
console.log(this);


// ============================ NORMAL FUNCTION ================================

function chai() {
    let username = "Nikki";

    // In a normal function:
    // - Non-strict mode: "this" refers to the global object
    // - Strict mode: "this" is undefined
    console.log(this);
}

chai();

/*
function chai() {
    let username = "Nikki";
    console.log(this.username);
    // This prints undefined because "this" does not refer to function-local variables
}

const chai = function () {
    let username = "Nikki";
    console.log(this.username);
    // Still undefined for the same reason
}
*/


// ============================ ARROW FUNCTION ================================

const chaiArrow = () => {
    let username = "Nikki";

    // Arrow functions do not have their own "this".
    // They inherit "this" from the lexical (parent) scope.
    console.log(this);           // In Node.js: {}
    console.log(this.username);  // undefined
};

chaiArrow();


// ============================ ARROW FUNCTION SYNTAX ==========================

// Arrow function with explicit return (curly braces require "return")
const addTwo = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo(3, 4));


// Arrow function with implicit return (no curly braces, no "return" keyword)
const sub1 = (num3, num4) => num3 - num4;

console.log(sub1(5, 2));


// Implicit return using parentheses (commonly used for expressions)
const sub2 = (num3, num4) => (num3 - num4);

console.log(sub2(5, 2));


// ======================= RETURNING OBJECT FROM ARROW FUNCTION =================

// Incorrect: curly braces are treated as function body, not an object
// const addObj = () => { username: "nikki" }; // returns undefined

// Correct: wrap the object in parentheses to return it implicitly
const addObj = () => ({ username: "nikki" });

console.log(addObj());


// ============================================================================
// SUMMARY
// - "this" in object methods refers to the object itself.
// - "this" in normal functions refers to the global object (or undefined in strict mode).
// - Arrow functions do not have their own "this"; they inherit it from parent scope.
// - If {} is used in an arrow function, "return" is required.
// - To return an object implicitly, wrap it in parentheses: ({ ... }).
// ============================================================================

