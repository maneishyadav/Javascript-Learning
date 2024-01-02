const accountId = 123456
let accountEmail = "Manish@google.com"
var accountPassword = "98765"
accountCity = "Delhi"

// accountId = 343434 not allowed because it is const, this is not assigned again
accountEmail = "yadav@yahoo.in"
accountPassword = "7887756"
accountCity = "bengluru"

console.log([accountId, accountEmail, accountPassword, accountCity])

/*
Prefer not to use var
because os issue in block scope and functional scope

*/