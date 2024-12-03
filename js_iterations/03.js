// for of 

[" ", " ", " "]
[{ }, { }, { }]

const arr = [1,2,3,4,5]

// format - for (const iterator of object)  - here object meana ring where loop has to work
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps  - see mdn docs

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'United States Of America')
map.set('FR', 'France')

console.log(map);

for (const key of map){
    console.log(key);
}

for (const [key, value] of map){
    console.log(key, ':-', value);
}
 
const myObject  = {
    'game 1' : 'NFS',
    'game 2' :  'Spiderman'
}

/* 
not iterable above approach for object
for (const [key, value] of myObject){
    console.log(key,":-", value);
}
*/

