// if user find difficulty in reading comment user can click on menu icon and go to view and click word wrap to get free of horizonatal sliding.

// object as constructor or we can say singleton

// this is one way of declaring the constructor
//const tinderUser = new Object()                       -->this is an  example of empty singleton object
//const tinderUser = {}                                 -->this is an example of empty non singleton obj
    //we cam also write constructor as this 

    const tinderUser = {}                    // -----> this is non empty object but non singleton object
//putting data in the object
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = "False"

console.log(tinderUser);  //show all the data in tinderUser

//object under object
const regularUser = {
    email: "someone@gmail.com",
    fullName : {                                 // declare full name as oject
        userFullName: {
            firstName: "Nikki",
            secondName: "Singh"
        }

    }
}
//can access data from here as
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.secondName);
// what if user does not have second name or they did not provided to our database -- so then there is no full name as there is one name--at that time we use ?. -- this is also called optional chaining in js --- will study in detail later
console.log(regularUser.fullName?.userFullName.secondName);

// adding two object

const obj1 = {1:"a", 2:"b"}           // when want to learn more can go to google chrome developer area and in console can type obj 1 and press enter - in the result it will show 'dropdown and then when click on dropdown there will be more dropdown -- when clicked-- it will show all the method '
const obj2 = {3:"a", 4:"b"}

const obj3 = {obj1, obj2}   // not add object and object instead put 2 different object in one object just like array
// to add two object what we need to do is 

const obj4 = Object.assign(obj1, obj2)
const obj5 = Object.assign({}, obj1, obj2)     // here we use {} to tell this is target and after this all are the sources which we need to add
// this is mostly seen in production grade code -- let us understand this like if we did not add curly braces then all the value are putting into obj1 but when we add {} then they are adding in it

    // but what gone beused mostly is -

const obj6 = {...obj1, ...obj2}  // we can use spread same as array
// refer  mdn documentation on object.assign for better understanding
console.log(obj4);
console.log(obj5);
console.log(obj6);

// but when we get values from database it came us array of object like below
const user= [
    {
    id: 1,
    email: "n@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "k@gmail.com"
     }
]

// so when we have to loop through it or print it what we do is
user[1].email  //tellint to go to the user whose indexation is 1 and then to its email
console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));    // here we get this keys in array typeform
console.log(Object.values(tinderUser));    // here we get array in array typeform
console.log(Object.entries(tinderUser));   // show all the value (+nt) in with keys and values where first is key and values

//sometimes there will be chance that we want to loop through all the data in object and then find the value 
//but sometimes what happened is that there is chance that the value is not existed and if the value does not existed then there is chance of crash 
// so what we can do is to check manually or can ask directly

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// let us study object destructuring

const course = {
    courseName : "developer",
    Price : "999",
    courseInstructor : "Miss X"
}
course.courseInstructor // one way of accessng data
const {courseInstructor} = course  // it is more like synatactic sugar and after writing this we must not need to write each time course.courseInstructor this specification of object isnot necesarry only after this

console.log(courseInstructor);

// like as we can see courseInstructor is very big name so when we have  to write it multiple times it may get hard so we can change that to -----> how?  ------>let's take an example of coursePrice
const {coursePrice : price} = course
console.log(price);

// javascript fn
const navbar = (company) => {
    console.log(company);
}
navbar("Nikki")

// in react when we have to write this we do something like we did in java - just add curly braces in parenthesis
// they don't write props.company or props.this or props.that or anything  
/*

option one using props - 
const Navbar = (props) => {
  console.log(props.company);
}
<Navbar company="Nikki" />


option 2 - 
const Navbar = ({ company }) => {
  console.log(company);
};
<Navbar company="Nikki" />
*/


// ===============================
// API and JSON – Beginner Notes
// ===============================


//  What is an API?
// API = Application Programming Interface
// It is a way for different software or apps to communicate with each other.


//  Why do we use APIs?
// Instead of building everything ourselves, we use existing services.
// Example:
// - Google Login
// - Payment systems
// - Weather data
// - Maps

// We send a request → API does the work → API sends response.


//  Example: Google Login
// When a user clicks "Login with Google":
// 1. Our app sends a request to Google API.
// 2. Google checks the user's account.
// 3. Google sends back the result.
// 4. Our app logs the user in.

// So our app does not verify users. Google does.


//  Real-life example
// Think of a restaurant:
// Frontend (React) = customer
// Backend (server, database) = kitchen
// API = waiter
// The waiter takes your order and brings the food.


//  Is API the same as data?
// No.
// API is the way to get the data, not the data itself.


//  XML vs JSON
// Earlier APIs used XML to send data.
// Example:

// <user>
//   <name>Nikki</name>
// </user>

// But XML is long and complex.
// Now most APIs use JSON.


//  What is JSON?
// JSON = JavaScript Object Notation
// It is a format used to send and receive data.
// It looks like a JavaScript object.


// Example JSON:

// {
//   "name": "Nikki",
//   "courseName": "code",
//   "price": "free"
// }


//  Important JSON rules
// 1. Keys must always be in double quotes.
// 2. JSON is text, not actual JavaScript.
// 3. JSON is easy to convert into JavaScript objects.


//  Valid JSON:
// {
//   "name": "Nikki"
// }

//  Invalid JSON:
// {
//   name: "Nikki"
// }
// This is a JavaScript object, not JSON.


//  Why JSON is popular?
// - Easy to read
// - Lightweight
// - Fast
// - Works well with JavaScript
// - Used in most modern APIs.


//  How React uses APIs
// 1. React sends a request to an API.
// 2. API returns JSON.
// 3. React converts JSON into JavaScript object.
// 4. React shows the data on the screen.
