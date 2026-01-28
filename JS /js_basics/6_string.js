// go through all strings function as will help in understanding the stirng and apart from that in interview too
const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");  // outdated style of writing code

console.log(`Helo my name is ${name} and my repo count is ${repoCount}`);  

// another way to write string
const gameName = new String ('hiteshhc')  // it also invoking js object new  - not array but rather key value pair 0 = h


console.log(gameName[0]);    //way to access key
console.log(gameName.__proto__); // give empty object provide access to all keys 
console.log(gameName.length); // give empty object 

console.log(gameName.toUpperCase()); // give empty object 
console.log(gameName.charAt(3)); // give empty object 
console.log(gameName.indexOf('t')); // give empty object 
console.log(gameName.toUpperCase()); // give empty object 

const newString = gameName.substring(0,4)  // not accept negative value
console.log(newString);

const anotherString = gameName.slice(-8,4)   //accept negataive value and works like this 
// - negative indices are interpreted as offsets from the end of the string. 
/* If the slice is defined as .slice(-9, 4) and the string is 'hiteshhc' (length = 8), 
here's how it will behave:
resolvedIndex = stringLength + negativeIndex
resolvedIndex = 8 + (-9) = -1

A resolved index of -1 is out of bounds because it refers to a position before the start of the string.
When a starting index (start) is out of bounds (less than 0), JavaScript considers it as 0, the beginning 
of the string.
Therefore, slice(-9, 4) behaves the same as slice(0, 4).
*/
console.log(anotherString);

const newString1 = "  Hitesh   "
console.log(newString);

console.log(newString1.trim());   // trim workds on line terminators and white spaces

const url = " https://developer.com/code%80developers " // between code developers there is space but as browser does not understand space it wrote it as %80

console.log(url.replace('%80', '-')); //to correct the url we can use replace

console.log(url.includes('developer')); //to check whether the requiredword is in the url or not

const gameName1 = new String ("hitesh-cp-level-3")

console.log(gameName1.__proto__);
console.log(gameName1.split("-"));

