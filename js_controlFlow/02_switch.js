/* 
switch (key){
    case value:
        break;
    
    default:
        break;   
}      
*/

const month = 3

switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

default:
    console.log("default case match");
    break;

        // see in js we once the case matches then all the remaining values are also executed with the match cases for say if we got month 3 then we will see march and april both in the console
        
        
        
        
}
