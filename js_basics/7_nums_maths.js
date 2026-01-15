const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 23.896
console.log(otherNum.toPrecision(3)); // gives string output = 124

const otherNum1 = 1123.896
console.log(otherNum1.toPrecision(3));  // output = 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // basedon US standard
console.log(hundreds.toLocaleString('en-IN')); // used to convert in Indian standard

// hw to sudy number fn through documentation either official or mdn docs

//------------------------------------------------MATHS-------------------------------------------------

console.log(Math);
//math property not fn
console.log(Math.abs(-4));    // used to sign change but but but only negative sign become positive only
console.log(Math.round(4.6));   // will use all the consideration of <5 and >5 etc.
console.log(Math.ceil(4.2));  // if crosses then will select top value 5
console.log(Math.floor(4.8));    // if cross then also select lowest value 4
console.log(Math.min(4,3,6,1,8));  // provide minimum value
console.log(Math.max(4,3,6,1,8));  // provide maximum value


console.log(Math.random());    // generate random number but the value is in decomal like 0.47865234..
console.log(Math.random()*10); // by multiplying provide non-decimal number
console.log(Math.random()*10 + 1); // by adding 1 we us want to ensure that if we got 0.03*10= 0 so to not get non zero balue we add +1 to it

console.log(Math.floor(Math.random()*10+1));

const min = 10
const max = 20

Math.random() * (max - min + 1)        // to get random value higher than 10 we use this as the above method will move till 10 only
console.log(Math.floor(Math.random() * (max - min + 1)) + min)




