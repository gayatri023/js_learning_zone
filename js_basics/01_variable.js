// Variables in JavaScript can be declared in different ways:
// 1. Constant variables
// 2. Variables whose values can change

// Constant variables are declared using the keyword `const`.
// Once assigned, their value cannot be changed.

const accountId = 144332;

/*
===========================================
VARIABLE DECLARATION IN JAVASCRIPT
===========================================

There are three main ways to declare variables in JavaScript:
1. const  → for values that should NOT change
2. let    → for values that CAN change (recommended)
3. var    → older way (NOT recommended)

-------------------------------------------
WHY `let` IS PREFERRED OVER `var`
-------------------------------------------

1) SCOPE PROBLEM WITH `var`

- `var` is FUNCTION-SCOPED, not BLOCK-SCOPED.
- This means variables declared with `var` inside blocks
  like if, for, or while are still accessible outside the block.
- This behavior can cause unexpected bugs in large programs.
*/

// Example:

if (true) {
  var x = 10;
}
console.log(x); // 10  (should not be accessible)

// With `let`:

if (true) {
  let y = 10;
}
console.log(y); //  Error (correct behavior)

/*
-------------------------------------------
2) HOISTING ISSUE WITH `var`

- Variables declared with `var` are hoisted to the top
  of their scope and initialized with `undefined`.
- This allows variables to be used before declaration,
  which can hide bugs.
*/

//Example:

console.log(a); // undefined 
var a = 5;

// Internally JavaScript treats it as:

var a;
console.log(a);
a = 5;

/* 
- `let` and `const` are also hoisted,
  but they are NOT initialized.
- Accessing them before declaration causes an error,
  which makes code safer.

-------------------------------------------
3) REDECLARATION PROBLEM WITH `var`

- `var` allows redeclaring the same variable
  in the same scope without errors.
*/

// Example:

var name = "Nikki";
var name = "Gitu"; //  No error (dangerous)

/*

- `let` does NOT allow redeclaration in the same scope.

-------------------------------------------
CONCLUSION

- `var` was used in older JavaScript (before ES6).
- `let` and `const` were introduced in ES6 to fix
  scoping and hoisting problems.
- In modern JavaScript, `var` should be avoided.

BEST PRACTICE:
✔ Use `const` by default
✔ Use `let` when reassignment is needed
NOT RECOMMENDED Avoid `var`
===========================================
*/

let accountEmail = "Nikki45@gmail.com";
var accountPassword = "12345"; // Not recommended, shown only for learning

// Variables can also be declared without a keyword,
// but this is considered bad practice and should be avoided.
accountCity = "Jaipur";

// If a variable is declared but not assigned a value,
// its value will be `undefined`.
let accountState;

// accountId = 2; 
// WRONG - This is not allowed because `accountId` is declared as `const`.

// Updating variable values
accountEmail = "gitu43@gmail.com";
accountPassword = "1456";
accountCity = "Bengaluru";

// Output values
console.log(accountCity);

// Display multiple values in a table format
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
]);
