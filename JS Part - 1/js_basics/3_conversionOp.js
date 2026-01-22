let score = "33"
console.log(typeof score);         // string output
let valueNumber = Number(score)      
console.log(typeof valueNumber);   // number 
console.log(valueNumber)

let score_1 = "33abc"
console.log(typeof score_1);          // string
let valueNumber_1 = Number(score_1)    
console.log(typeof valueNumber_1);      // Number
console.log(valueNumber_1);             // nan   - its important to check string to number as sometimes 
                                      //without being number it shows that the datatype is converted
// "33" => 33
// "33abc" => NaN

let score_2 = null
console.log(typeof score_2);           //object
let valueNumber_2 = Number(score_2)     
console.log(typeof valueNumber_2);     //number
console.log(valueNumber_2)             //0

let score_3 = True
console.log(typeof score);             //boolean
let valueNumber_3 = Number(score_3)
console.log(typeof valueNumber_3);     //number
console.log(valueNumber_3)             //1

let isLoggedIn = 1
let booleanIsLoggedIn = boolean(isLoggedIn)
console.log(booleanIsLoggedIn)                     // True

let isLoggedIn_1 = ""
let booleanIsLoggedIn_1 = boolean(isLoggedIn_1)
console.log(boolIsLoggedIn_1)                     // False

let isLoggedIn_2 = "Nikki"
let booleanIsLoggedIn_2 = boolean(isLoggedIn_2)
console.log(boolIsLoggedIn_2)                      //False

// 1 => trye; 0=> false
// "" => false
// "Nikki" => true

let someNumber = 33

let stringNumber = String(someNumber)             // number
console.log(stringNumber);
console.log(typeof stringNumber);                 // string


lst value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = "hitesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);   // 12
console.log(1 + "2");   // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32  - why happened understand in ECMA

// its better to use parenthesis and code make it simple and clean

console.log(+ true);   // 1 --- true is bol can not be incremented so give the real value
console.log(+ "");     // 0 

let num1, num2, num3

num1 = num2 = num3 = 2+2;

// post fix and pre fix -- incremental component
let gameCounter = 100
++gmaeCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion







