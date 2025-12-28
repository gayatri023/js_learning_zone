// variable in js can be described in two ways - constant and varying variables 
// for constant there is only one way of using key words like "const"

/* for varying variable we can use -let or var -= not prefer using var becuase of 
block scope and functional scope------and please don't use as not recommended or preferred.
 var can not be used because early js has scope problem - so let does not provide */

const accountId = 144332;
let accountEmail = "Nikki45@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur"; // can reserve variable but this is not good but can be declared this way too
let accountState; // will take is as undefined

// accountId = 2;  can't change accountId as we declared it const which means to remain constant - 
// kind of type error

accountEmail = "gitu43@gmail.com";
accountPassword = "1456";
accountCity = "Bengaluru"

console.log(accountCity);


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
