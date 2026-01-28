"use strict"; 
// Treats all JavaScript code as a newer (modern) version.
// Helps catch common mistakes and enforces better coding practices.

// alert("Hello, world!");
// This does not work in Node.js because `alert` is a browser feature.

console.log("nikki");

// Variable declarations
let name = "Ankii";
let age = 35;          // number → range: -(2^53 - 1) to (2^53 - 1)
let isLoggedIn = false;

/*
===========================================
DATA TYPES IN JAVASCRIPT
----------------------------------------------------------------------

Primitive Data Types:

1) number
   - Used for integers and decimals
   - Safe range is up to 2^53 - 1

2) bigint
   - Used for very large numbers
   - Common in finance, stock markets, and large-scale applications

3) string
   - Written inside single (' ') or double (" ") quotes

4) boolean
   - true or false

5) null
   - Represents an intentional empty value
   - It is NOT zero and NOT undefined

6) undefined
   - A variable that is declared but not assigned any value

7) symbol
   - Used to create unique identifiers
   - Helpful when building complex components or objects

Non-Primitive Data Type:

8) object
   - Used to store collections of data
   - Covered in detail later
--------------------------------------------------------------------------------
*/

// Type checking
console.log(typeof age);        // number
console.log(typeof null);       // object (this is a known JavaScript bug)
console.log(typeof undefined);  // undefined
