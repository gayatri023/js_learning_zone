console.log("2">0);   // both converted to number by javascript
console.log("02">0);

console.log(null>0);    //false
console.log(null==0);   //false 
console.log(null>=0);   //true
//comparision operator & equalatory operator both work differently as comparator convert null to number 0

console.log(undefined>0);    //false
console.log(undefined==0);   //false 
console.log(undefined>=0);   //false

//---

console.log("2" == 2);  //true
console.log("2" === 2); //false - strictly check the data even datatypes
