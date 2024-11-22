// js array - resizable , cannot access using aritary string as index (eg:one), zero indexed


const array = [0,1,2,3,4,5]  // not necessay to have same element it could ahve different element
console.log(array[9]);

const myArray = new Array(2,3,6,8,5)

const myHero = ["shaktiman","nagraj"]

// js copy operations create shallow copies

//array methods

myArray.push(6)
console.log(myArray);

myArray.pop // do one thing remove the last element present in the myArray

myArray.unshift(9)
console.log(myArray);

console.log(myArray.includes(9)); // result boolean 
console.log(myArray.indexof(9)); // result indexed if not present in array then show -1

const newArr = myArray.join()

console.log(myArray);    // came in form of array
console.log(newArr);     // came in direct as vales - thecreal change here is type - string
console.log(typeof newArr); 

//slice and splice

console.log("A ", myArray);   //a provide notion - lke the output would be like this - A   [2,3,6,8,5]

const myN1 =myArrat.slice(1,3)    // will take elements from myArray only those whose index value is 1,2 only
console.log(myN1);

console.log("B ", myArray);

const myN2 =myArrat.splice(1,3) //splice manipulate the original array
console.log(myN2);    // include value from both ranges and upperlimit and lowerlimit
// also splice chanfe main array and only those value remain in the main array which not included in splice

console.log("C ", myArray);        // it will show - 2,5