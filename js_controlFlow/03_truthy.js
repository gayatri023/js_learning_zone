const userEmail = " nikki@google.com "

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
    
}
// empty string will provide don't have user email and empty array will show got your email
// falsy values = false, 0, -0, BigInt 0n, "", null, undefined, Nan  - eqaulising these facor to each will provide true which is common sense

// truthy value -"0", "false", " ", [], {}, funtion(){}

if (userEmail.length === 0 ){
    console.log("array is empty");
    
}

const emptyObj = {}

if(Object.keys(emptyObj.length===0)){
    console.log('object is empty'); 
}

//Nullish Coalescing Operator (??) : null undefined
// used for null and undefined value to prevent from error

let val1;
val1 = 5 ?? 10
console.log(val1);
// when taking data from db then if we are fetching data there are might be chance to meet null but this 
//will distort data - structure - to prevent this we use two value system

val2 = null ?? 10 // now here it will not be like 10 but a function or command that we might use but here we simply understand what will happen hindsight
console.log(val2);

val3 = undefined ?? 10 ?? 20
console.log(val3);

// Ternary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



