/*
===========================================
   Immediately Invoked Function Expression
                 (IIFE)
===========================================

An IIFE is a function that runs immediately after it is defined.

WHY WE USE IIFE?
1. To avoid polluting the global scope.
2. To run code immediately (e.g., DB connection, app initialization, config setup).

IMPORTANT:
When using multiple IIFEs in the same file, always end the previous IIFE with a semicolon (;)
so JavaScript knows where one function ends.
===========================================
*/


// ================================
// 1. Named IIFE
// ================================
// This function runs immediately after being defined
// Used here to simulate a database connection

(function connectDB() {
    console.log("DB Connected");
})(); // <-- semicolon is important



// ================================
// 2. Another Named IIFE
// ================================
// Another example of IIFE executing immediately

(function coffee() {
    console.log("DB is connected second time");
})(); // <-- semicolon is important



// ================================
// 3. Arrow Function IIFE (Unnamed)
// ================================
// This IIFE takes a parameter and executes immediately

((name) => {
    console.log(`DB is connected third time ${name}`);
})("nikki");



/*
===========================================
HOW IIFE WORKS:

(function(){})()

First ()  -> converts function into an expression
Second () -> immediately executes the function

So basically:
define + execute = ()()

===========================================

BENEFITS:
- Keeps variables private
- Avoids global scope pollution
- Perfect for one-time setup code

USE CASES:
- Database connection
- App initialization
- Config loading
- Module setup
===========================================
*/
