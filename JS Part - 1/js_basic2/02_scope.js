 var c = 300
const b =400
// when this comes in --> {} in any function or loops, if else then at that timt this is called scope
if(true){
    let a = 10
    const b = 20 
    var c = 30
    console.log("Inner: ", a );  // this is block-scope - local variable
}

console.log(a); // this will not print that a,b is not defined as wedefined it inside the loop 
console.log(b);
console.log(c); // this will be printed and that's the problem and we should not use it 
// what if 3-4 developer working on a project and one declare var c in outside the loop and other put it 
// inside the loop then somehow it will be very difficult for the one who put value outside and early to 
// check that it is wrong and value has been changed more confusion will be there if it is a long code.

var a = 300 // this will be printed as 300 only  and this is global scope and global variable

// console scope is different from code environment scope

//-------------------------------------------- Nested Scope -------------------------------------------
function one (){
    const unserName = "Nikki"

    function two (){              // fn 2 can access all the variable present in fn one or we can say from the bigger picture
        const website = "youtube"  // child can access parent element
        console.log(unserName);   
    }
    //  console.log(website);   --> this will not work as out of scope    
    two()
}
one()
/*
if (true) {
    const unserName = "nikki"
    if( unserName === "nikki" ){
        const website = " youtube"
        console.log(unserName+website);
    }
    console.log(website);                                => will get here error as out of scope
}

console.log(unserName);                                  => will get here error as out of scope
*/


//-------------------------------------------Insteresting-----------------------------------------------
// 2 ways how fn form - first is this ---- here we can access the fn before declaration

function addone(num){
    return num + 1
}
addone(5)

// second is this - here we can't access the fn before declaration as here function is stored in varaible
// this is also called hoisting
const addtwo = function(num){
    return num + 2
}
addtwo(5)
