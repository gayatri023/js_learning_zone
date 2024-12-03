
let index = 0
while (index <= 10 ){
    console.log(`value of index is ${index}`);
    index = index + 2
}

let myArray = ['flash', "batman" , "superman"]

let arr = 0
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}

console.log(arr);

let score = 1 
do {
    console.log(`score is ${score}`);
    score ++
} while (score <= 10 );

// first do and then condition so what will happen if we let score 11 then it will only show score is 11 
// because as said do first and then check condition