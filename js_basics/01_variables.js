// There are three type of Variable in JavaScript - var,let,const
// (i) var -> (old way,not recommended) -> can change the value later
// (ii) let -> (new way,recommended) -> value can be changed later
// (iii) const -> (constant) -> value can't be changed

const accountId = 122345
let accountName = "Saurav"
let mailId = "saurav12@gmail.com"
var password = 1234
let accountState;

// Easy way to print these all in tabular from

// console.table([accountId,accountName,mailId,password]);

/*
console.log("Account Id: ",accountId);
console.log("Account Name: ",accountName);
console.log("Account Email: ",mailId);
console.log("Account Password :",password);
*/

/*
Let's declare const once again to chech whether it works or not
accountId = 155555
console.log(accountId)  -> Can't do this It's giving Error
*/

accountName = "Mohit" // This is valid, This can be done No Error
// console.log("Changed Account Name :",accountName);

mailId = "mohit123@gmail.com";
password = 9999;  // This can also be Done, It will Not throw any Error
// console.log("New Password : ",password);

console.table([accountId,accountName,mailId,password,accountState]);


/*
 Note -> prefer not to use var
         because issue in block scope and functional scope
*/


/*
SUMMARY

let vs const vs var
-----------------------------------------------------------
Keyword	  Can Change Value?  	Scope (Where It Works)	       Use Case
var	         ✅ Yes	               Function Scope	         ❌ Avoid using
let	         ✅ Yes	               Block Scope	             ✅ Use this for variables that change
const	     ❌ No	               Block Scope	             ✅ Use this for fixed values



*/
