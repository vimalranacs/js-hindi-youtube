/*

let score = "33abc" // string

const {score} = {score: 33}    // object destructuring

console.log(typeof score);     // string
console.log(typeof (score)); 

let valueInNumber = Number(score)     // convert string to number
console.log(typeof valueInNumber);    // number
console.log(valueInNumber);         // NaN (Not a Number)
 
let isLoggedIn = 1                 // number
let booleanIsLoggedIn = Boolean(isLoggedIn)      // convert number to boolean
console.log(typeof booleanIsLoggedIn);         // boolean
console.log(booleanIsLoggedIn);               // true



let someNumber = 33

let stringNumber = String(someNumber)     // convert number to string
console.log(typeof stringNumber);

// "33"=> 33
// "33abc" => NaN
// true => 1; false => 0
//   operations // 


*/ 

let value = 3
let negValue = -value
console.log(negValue); // -3    
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3); // power operator
console.log(2%3); // remainder operator

let str1 = "vimal"
let str2 = "rana"

let str3 = str1+str2
console.log(str3); // vimalrana


console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122, conversion happens from left to right
console.log(1 + 2 + "2"); // 32, conversion happens from left to right

console.log(+true); // 1 
console.log(+"");

let num1,num2,num3
num1 = num2 = num3 = 2+2 // dont do this, it is not a good practice

let gameCounter = 100
gameCounter++ // increment operator
console.log(gameCounter); // 101
 


