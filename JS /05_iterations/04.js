//for in  - this provide only key but we can print value through name[key], avoid array here as will provide index and not the value
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

MAPS - 
const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'United States Of America')
map.set('FR', 'France')


for (const key in map){
    console.log(key);
}
/*
This prints nothing.
Because:
Map keys are not object properties.
They are stored internally in a different way.
for...in works only on object properties.
Map belongs to the JavaScript **Map structure, not normal object.
*/ 

// map is not iterable hence can't write like this

// objects loops - for in loops
//arrays loops - for of loops
