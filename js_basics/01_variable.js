// Variables in JavaScript can be declared in different ways:
// 1. Constant variables
// 2. Variables whose values can change

// Constant variables are declared using the keyword `const`.
// Once assigned, their value cannot be changed.

const accountId = 144332;

// For variables whose values can change, we use `let` or `var`.
// `let` is preferred over `var` because `var` has issues with
// function scope and block scope in older JavaScript.
// Therefore, using `var` is not recommended in modern JavaScript.

let accountEmail = "Nikki45@gmail.com";
var accountPassword = "12345"; // Not recommended, shown only for learning

// Variables can also be declared without a keyword,
// but this is considered bad practice and should be avoided.
accountCity = "Jaipur";

// If a variable is declared but not assigned a value,
// its value will be `undefined`.
let accountState;

// accountId = 2; 
// ❌ This is not allowed because `accountId` is declared as `const`.

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
