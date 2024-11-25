//arrow fn 

const user = {
    username : "nikki",
    price : 99,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website `);   // this is used to refer current context
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);    // this will show empty curly barces  as there is no context in global 

// inside browser when engine runs the global object is window object

function chai (){
    let username = "Nikki"
    console.log(this);
}

chai()

/* 
function chai(){
    let username ="Nikki"
    console.log(this.username);         ===> 'this' can't be use inside a function it can provide value for object only
    }


    ==> another way of writing this is 
    const chai = function (){
    let username ="Nikki"
    console.log(this.username);             ===>here also 'this' can't be use inside a function
    }
*/

//----------------how to declare fn in arrow way -------------------------------------------------

const chai = () => {
    let username ="Nikki"
    console.log(this.username);  // if use this.username then it will show undefined and if use this it wil show {}         
    }


    // pure arrow fn --- basic syntax  = () => {} can also write like this
    const addTwo = (num1, num2) => {     // curly braces used then hve to use return
        return num1 + num2
    }
    console.log(addTwo(3,4));
    
    //implicit return - we don't usecurly braces
const sub1 = (num3, num4) => num3-num4
console.log(sub1(5,2));

const sub2 = (num3, num4) => (num3-num4)   // if wrote in parenthesis does not need to use return
console.log(sub2(5,2));

// if wrote function in curly braces then have to write return but if used parenthesis does not needed

