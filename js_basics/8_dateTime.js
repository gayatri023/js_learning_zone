// Dates

//creted date instance or object
let myDate = new Date()
console.log(myDate);                  //will provide date but with some gibberish for non user
console.log(myDate.toString);         // make it little readable
console.log(myDate.toDateString);         // provide day and date
console.log(myDate.toLocaleDateString);         // provide date and time

console.log(typeof myDate)  // date is object 

let myCreatedDate = new Date(2023, 0, 23) // month start form 0 in js -- 
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3) // month start form 0 in js
let myCreatedDate2 = new Date("2023-01-14")  //  while using yy/mm/dd month start from 1
let myCreatedDate3 = new Date("01-14-2023")  // mm/dd/yy - mostly used in India

console.log(myCreatedDate.toLocaleString());   // Mon Jan 23 2023
console.log(myCreatedDate1.toLocaleString());  // 1/23/2023, 5:03:00 AM
console.log(myCreatedDate2.toLocaleString());  // 1/14/2023, 12:00:00 AM
console.log(myCreatedDate3.toLocaleString());  // 1/14/2023, 12:00:00 AM

//timestamp - quizes, polls where mostly used -- more like where we need real time
let myTimeStamp = Date.now()

console.log(myTimeStamp);       //provide time stamp form the value 1 Jan 1970 in millisecond till now
console.log(myCreatedDate.getTime());
console.log(myTimeStamp.getTime());       //provide the required time - app - while creating hotel management app
console.log(Math.floor(Date.now()/1000)); // create time in seconds from milli-seconds by dividing it from 1000

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());  // starts from zero
console.log(newDate.getDayay());  // starts from monday as 1

// string interpolation means
`${newDate.getDayay()} and the time`

newDate.toLocaleString('default', {    // in default we can write which internationalisatoin of date
    weekday: "long",                    //object - used to format day mon - monday
                                        // can work on  timeZone too but don't use that much
})




