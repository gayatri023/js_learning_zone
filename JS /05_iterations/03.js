// for of - Used for arrays, strings, maps, sets - gives value directly and not index
/*
    for...of works on iterables.
    An iterable is anything that has a special internal method called:
    Symbol.iterator
*/

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

// Maps  - see mdn docs - A Map is a special object that stores key-value pairs but keeps order and allows any type of key.
// Why Map is iterable but object is not? ---- Because Map has a built-in iterator -----Objects don’t.

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'United States Of America')
map.set('FR', 'France')

console.log(map);        // key value pair willl be printed and that too only unique like - "IN" => "India"


for (const key of map){
    console.log(key);        // print whole array like ["IN", "India"]
}
// Each item returned is an array of [key, value]---This happens because---- Map’s default iterator returns entries.

for (const [key, value] of map){
    console.log(key, ':-', value);  // this will desrture with the limiter :- like -- ["IN" :- : "India"]
}
 
const myObject  = {
    'game 1' : 'NFS',
    'game 2' :  'Spiderman'
}

/* 
not iterable above approach for object
for (const [key, value] of myObject){
    console.log(key,":-", value);

    in this the object -- myObject is not iterable
    Because - Objects do not have Symbol.iterator.
    So JavaScript does not know how to loop through them.
}
*/

