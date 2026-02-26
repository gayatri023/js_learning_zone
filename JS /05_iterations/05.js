// forEach() is an array method used to run a function for every element. It belongs to the JavaScript Array prototype, so it works only on arrays.

const coding = ["js", "ruby", "java", "python", "cpp"]


/*
A callback function is:
A function passed as an argument to another function.

Here:
    forEach() calls your function automatically for each element.
    You don’t call it manually.
*/
// in call back function does not have name so we write funtion () {}
coding.forEach(  function (val){
    console.log(val);
})

// can write like this too 
coding.forEach( (item) => {
    console.log(item);
})

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)  // have to give refernce amd not callin it
// printMe → give the function
// printMe() → run the function
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})
