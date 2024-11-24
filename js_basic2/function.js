// fn_keyword fn_Name(){           //() -->syntax
//  }
//  calling fn required --> fn_Name() --> if write onlu fn_Name there will bw no output as it will only reference


// value when put into fn called parameter

function add (num1, num2){
    console.log(num1 + num2);   
}
// value when written for recall are called arguement
const addValue = add (3,4)  // if we pur 4 as "4" ->output = 34 , if took 4 as "a" -> output = 3a, if null instead of 4 = 3

console.log("Result ", addValue); // show undefined 

// how can we we store or return the value 
function sub (num3, num4) {
    let result = num3-num4    // can also do return num1 + num2 ---> save memeory as not another variable has been decalred
    return result
}
const result = sub (8,4)       // declare result here due to scope of variable will discuss later right now just understand how things happen
console.log("Result" , result);

// another way 
function multiply (num1, num2){
    return num1 * num2
}
const result1 = multiply(3,4)
console.log("Result", result1);

// let's use if and else statement 
function loginUserMessage (username){             //if want to set default value we write in parenthesis (username="Sam")
    if(username === undefined){                           // if(!username)  -- can also wrote like this
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

const result2 = loginUserMessage("Nikki")
console.log(result2);                      
// we can also display the message without variable declaring - like console.log(loginUserMessage("Nikki"))

console.log(loginUserMessage());

//------------------------------------------------------------------------------------------------------
//there could be chance that user obt for 200 item then 400 item and then 500 iten but how could we pass 
// all this parameter from one ---> so for that we use rest operator used by symbol => ... also this called 
//spread 
function calculatedCartPrice (...num1 ){   
    return num1
}
console.log(calculatedCartPrice(200,400,500)); //output will be array from all the cart user put in it 
// many time people use 
// fn calaculatedCartPrice(val1, val2, ...num1)
// what will happen now when we call the fn with value like 300, 400, 500, 600 then val1 get 200, val2 
// get 400 and now in array what we will be shown is [500,600]


const user = {
    uername: "nikki",
    price: 199
}

//beware of typesafety for passing any parameter --- in professional setting we can check through if else
function handleObject(anyoobject){
    console.log(`Username is ${anyoobject.username} and price is ${anyoobject.price}`);   
}

handleObject(user)
// can also do calling of fn like this
handleObject({
    username : "nikki",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 1000, 500])); // can write this way too
