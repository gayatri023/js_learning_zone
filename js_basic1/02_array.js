const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes =["superhero", "flash", "batman"]

marvel_heroes.push(dc_heores)   
/* here people assume they will merge but usually they don't merge it is more like one array in other array */
// output be like ["thor", "ïronman", "spiderman" ["superhero", "flash", "batman"]]
// to prove array can take any data it even took array - so in array we can put any datatype - bool,int,char etc
console.log(marvel_heroes);  
console.log(marvel_heroes[3][1]);  //this will take second element of third element which itself is a array

marvel_heroes.concat(dc_heroes)      
console.log(marvel_heroes);        // result will of only marvel only as concat Combines two or more arrays. This method returns a new array without modifying any existing arrays as we asked for typed marvel_heroes.

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes); 

//most people use spread operator

const all_new_heroes = [...marvel_heroes, ... dc_heroes] // what happened is after using spread each element of array become separate so now they directly show the result

console.log(all_new_heroes);

const another_array = [1,2,3[4,5,6],7,[6,7[4,5]]]

const real_another_array = another_array.flat(infinity) //what flat do is - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

//mostly should give depth but can use infinity but prefer providing depth 

console.log(Array.isArray("Hitesh"));
console.log(Array.isfrom("Hitesh"));     // this convert hitesh into an array - ["H", "i", "t", "e","s","h" ]
console.log(Array.isfrom({name: "hitesh"})); // **** interesting to know ---here we will get an empty array as it is not able to directly convert {name: "hitesh"} into an array aswe have to tell whether to create array of keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // what 'of' did is to - Returns a new array from a set of elements.
