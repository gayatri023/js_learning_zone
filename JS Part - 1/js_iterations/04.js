//for in
const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(` ${key} shortcut is for ${myObject[key]}`);
}

// for in shows key
const programming = ['js', "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);    
}

for (const key in programming) {
    console.log(programming[key]);    
}

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'United States Of America')
map.set('FR', 'France')


for (const key in map){
    console.log(key);
}
// map is not iterable hence can't write like this

// objects loops - for in loops
//arrays loops - for of loops