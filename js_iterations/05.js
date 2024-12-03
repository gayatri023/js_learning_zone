const coding = ["js", "ruby", "java", "python", "cpp"]

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