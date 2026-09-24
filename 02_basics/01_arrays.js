//array 
const myArr = [0,1,2,3,4,5,]

console.log(myArr[0]);
const myheros=["shaktiman", "naagraj", "doga", "batman", "superman"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// array methods

// myArr.push(6) // add at the end
// console.log(myArr);

// myArr.pop() // remove from the end
// console.log(myArr);

myArr.unshift(-1) // add at the start
console.log(myArr);
myArr.shift() // remove from the start
console.log(myArr);

console.log(myArr.includes(3));
console.log(myArr.indexOf(3));


// slice,splice 

console.log("A", myArr);

const myn1 = myArr.slice(1,3) // does not change the original array

console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3) // changes the original array
console.log(myn2);