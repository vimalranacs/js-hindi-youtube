// const tinderUser = new Object() -- singleton object 

const TinderUser = {} // non singleton object

TinderUser.id = "123abc";
TinderUser.name = "Vimal";
TinderUser.isloggedIn = false;


// console.log(TinderUser);

const regularUser = {
    email: "regular@example.com",
    fullname: {
        userfullname: {
            firstName: "John",
            lastName: "Doe"
        }
    }

}

console.log(regularUser.fullname.userfullname.firstName);

 const obj1= {1: "a", 2: "b"}
 const obj2= {3: "c", 4: "d"}

//  const obj3 = Object.assign({}, obj1, obj2)
//  console.log(obj3); 

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const Users =
[
    {
    id:1,
    
    email: "user@example.com"
    }, 
    {
        id : 2,
        email : "example@gmail.com"

    }
    
]

console.log(Users[1].email);

console.log(TinderUser);

console.log(Object.keys(TinderUser));
console.log(Object.values(TinderUser));
console.log(Object.entries(TinderUser));

console.log(TinderUser.hasOwnProperty("isloggedIn"));


