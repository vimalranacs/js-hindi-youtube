console.log('v');
console.log('i');
console.log('m');
console.log('a');
console.log('l');


function SayMyName() {
console.log('v');
console.log('i');
console.log('m');
console.log('a');
console.log('l');
}

// SayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result;
    return num1 + num2;
}


const result = addTwoNumbers(5, 10);

// console.log("result",   result);

function loginUserMessage(username= "sam")
{
    if(!username) {
        console.log('Please provide a username');

    }
 return `${username} just logged in`;
} 

// console.log(loginUserMessage('vimal'))
// console.log(loginUserMessage("vimal"))

function calculateCartPrice(...num1) {
return num1 
}

// console.log(calculateCartPrice(200, 400, 500 ))

const user = {
    username: "vimal",
    price: 400,
}

function handleObject(anyobject){

console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject({
    username: "vimal",
    price: 500
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1] 
}

// console.log(returnsecondValue(myNewArray))
 
console.log(returnSecondValue([200, 400, 100, 600]))

