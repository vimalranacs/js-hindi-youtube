// singleton 

//object literals 

const mySym = Symbol("key1");

const JsUser = {
    name: "Vimal",
    "full name": "Vimal Rana",
    [mySym]: "myKey1",
    
    age: 22,
    location: "delhi",
    email: "vimal@example.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Tuesday"]

}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
console.log(JsUser.email);
//Object.freeze(JsUser) // freeze the object, cannot change the properties
JsUser.email = "vimal@gmail.com"
console.log(JsUser);

    JsUser.greetings = function(){
        console.log("Hello JsUser");
    }
    
    JsUser.greetingsTwo = function(){
        console.log(`hello js user, ${this.name}`);
    }
    console.log(JsUser.greetings());
    console.log(JsUser.greetingsTwo());