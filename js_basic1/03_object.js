// object can be declared in two ways - one literal and second is constructor

// singleton - when we create through constructor we can make one of its own kind and literal can't make this
// object.create - constructor method for creation

/* in array we can access it as like - myArray = ["h", "i"]
myArray[1] or myArray[0]

but this change when we talk about objects
 in array we are not allowed to show key and value but only through indexation

 but in object we access key and value too

 and we do this through examples like -
 console.log(JsUser.email)  
 
 - this is one way but we can also do this like below
 console.log(JsUser.[email])

*/

// declaration of key in aobject - asked in interview
const mysym = Symbol ("key1")
// how to use symbol as a key of object - to use object as a key we must first declare it first

// object literal creation
const JsUser = {     
    name : "nikki",                             // by default name is taken by machine as "name" but it can determine this by itself. So we don't define it like that
    "full name": "Nikki Singh",
    age : 18,
    // we can't directly use symbol here as 
    [3443mysym] : "key1",
    // to use key in a object we have to write it in square bracket
    [mysym] : "key1",
    location : "Jaipur",
    email: "nikki@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}



console.log(JsUser.email);
console.log(JsUser["email"]);
//  we can't access this with . - console.log(JsUser."full name");  we have to use square bracket for accessing the object here.
console.log(JsUser["full name"]);
console.log(JsUser.mysym); // if we see here the type then the type will not be seen as symbol - shows str
console.log(typeof JsUser.mysym);

JsUser.email = "nikki@chatgpt.com"
//Object.freeze(JsUser) - no changes happen aftwe this
JsUser.email = "nikki@microsoft.com"  // after using job freeze we can't change the value so the email will be reamin of chatgpt only -but if we did not then it will change into this

console.log(JsUser);

//now add function in js  (fn is js treated as type 1 citizen - there is no diference between them)
JsUser.greeting = function () {
    console.log("Hello JS User");
}
    

console.log(JsUser.greeting);  // if use fn like this it will show undefined this is coming because earlier we freeze the object JsUser - so to use this we have to comment down the freeze part

// console.log(JsUser.greeting());  -- this will through type error:JsUser.greeting is not a function this is coming because earlier we freeze the object JsUser - so to use this we have to comment down the freeze part

console.log(JsUser.greeting()); //it will show greeting now
console.log(JsUser.greeting);  // this will show [function (anonymous)]  - here fn is not execute it is just referenced 

JsUser.greeting1 = function () {
    console.log(`Hello JS User, ${this.name}`);   // we can greet through name here
}

console.log(JsUser.greeting1()); //it will show greeting now but with name
