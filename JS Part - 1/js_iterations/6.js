// Topic: forEach vs filter (Very Important Interview Topic)

// -------------------- forEach --------------------

// forEach is used when you want to LOOP over an array
// and DO something (print, update, push, etc)
// forEach does NOT return anything

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach((item) => {
  console.log(item);  //  This prints each element
});

// If we try to store forEach result:
const result = coding.forEach((item) => item);
console.log("Return value of forEach:", result); 
//  OUTPUT: undefined
// Because forEach ALWAYS returns undefined

// -------------------- filter --------------------

// filter is used when you want to SELECT some elements
// based on a condition and get a NEW ARRAY
//  filter ALWAYS returns a new array

const myNums = [1,2,3,4,5,6,7,8,9,10];

// Simple filter (without {})
const newNums = myNums.filter((num) => num > 4);
console.log("Numbers > 4:", newNums);

// If you use {} then you MUST write return
const newNums2 = myNums.filter((num) => {
  return num > 4;   // 👈 without return, it will give empty array
});
console.log("Numbers > 4 (with return):", newNums2);

// -------------------- Doing same thing using forEach --------------------

// Here we manually create array
const newNums3 = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums3.push(num);   // pushing manually
  }
});

console.log("Using forEach method:", newNums3);

// Conclusion:
// filter does this work automatically
// forEach needs manual pushing

// -------------------- Real World Example --------------------

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Get all History books
let userBooks = books.filter((bk) => bk.genre === "History");
console.log("All History books:", userBooks);

// Get History books published after 1995
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});

console.log("History books after 1995:", userBooks);
