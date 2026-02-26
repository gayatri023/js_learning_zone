// ================= OBJECT =================

// for...in → provides keys in objects
// We can get value using object[key]
// It is mainly used for objects

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// ================= ARRAY =================

// for...in in arrays → gives index (not values)
// So it is generally avoided for arrays

const programming = ['js', "rb", "py", "java", "cpp"];

// This prints indexes
for (const index in programming) {
    console.log("Index:", index);
}

// We can get values using array[index]
for (const index in programming) {
    console.log("Value:", programming[index]);
}


// ================= BEST WAY FOR ARRAYS =================

// for...of → directly gives values
// Recommended for arrays and other iterable structures

for (const value of programming) {
    console.log("Best way (value):", value);
}


// ================= MAP =================

// Map is iterable
// But for...in does NOT work on Map
// Because for...in works only on object properties
// Map stores data internally, not as normal properties

const map = new Map();

map.set('IN', 'INDIA');
map.set('USA', 'United States Of America');
map.set('FR', 'France');


//  This will print nothing
for (const key in map) {
    console.log(key);
}


//  Correct way → use for...of

for (const [key, value] of map) {
    console.log(key, ":", value);
}


// ================= MAP KEYS =================

for (const key of map.keys()) {
    console.log("Map key:", key);
}


// ================= MAP VALUES =================

for (const value of map.values()) {
    console.log("Map value:", value);
}