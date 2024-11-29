//if
const temperature = 41
if(temperature){
    console.log("less than 50 ");
}
else{
    console.log("temperature is more than 50");
}

const balance = 1000
// if(balance > 500) console.log("test"), not a good practices - immature code
if (balance < 500){
    console.log("less than 500");    
}else if (balance < 900){
    console.log("less than 700"); 
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true
const loggedInFromGoogle = true

if(userLoggedIn && debitCard){
    console.log("Allow to have purchase");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}

