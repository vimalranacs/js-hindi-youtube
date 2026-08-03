const accountId = 123456789
let accountEmail = "vimalrana877@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountstate;
//accountID = 2 // not allowed 
accountEmail = "hc@hcc.com"
accountPassword = "123"
accountCity = "Delhi"

console.log(accountId);

/*
prefer not to use var ,because of issue in block scope and function scope

*/
console.table([accountId, accountEmail, accountPassword, accountCity]);

