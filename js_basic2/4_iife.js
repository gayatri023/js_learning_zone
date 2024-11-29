// immediately invoked function expression (IIFE)

(function connect (){
    console.log(`DB Connected`);                         // for immediately invoking fn can add parenthesis
}) ();                                                  // but as it will show error we will put parenthesis
// we will put parenthesis to both fn and invoking together  - as parenthesis will work as a block altogether
// what happened is first parenthesis is fn call and second is execution call - ()() - why do this --
/* we do this tp get rid of the pollution caused by global scope variable or declearation - w use iffe 

now one more thing so as we invoke iife - it does not know where to stop so it will not move to another fn
even if we try - so to invoke another fn or code we provide iffe to end the context by putting semi -colon at end*/

(function coffee() /*named iife*/{
    console.log(`DB is Connected second time`);
    
} )();

((name)=> { // unnamed iife
    console.log(`DB is connected third time ${name}`);
    
}) ("nikki");