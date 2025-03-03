"use strict"  // treat all JS code as newer version

// Data Types in JavaScript
// (A) Primitive Datatype

// (i) Number or bigInt
let num = 5
console.log(typeof(num))
console.log(typeof num)

// (ii) string -> " "
let name = "Saurav"
console.log(typeof(name))

// (iii) boolean -> true/false
let isLoggedIn = true
console.log(typeof(isLoggedIn))

// (iv) null -> standalone value
let state = null
console.log(typeof(state))


// (v) undefined 
// (vi) Object

let big = BigInt(123)
console.log(big)

// (B) Non-Primitive Data type
       // (i) Object

       const stdinfo = {
        Name : 'Saurav',
        uid : 5616,
        course : 'Btech',
        pass_or_fail : true
       }
       console.log(stdinfo)
       console.log(typeof stdinfo)
       // (ii) Array
       // (iii) function

// Operator

let val = 10;
val += 45
console.log(val)

let count = 4
console.log("Count :",count)

count--
console.log("Now Count : ",count)


let age = 18;
if(age >= 18){
    console.log("Eligible for Voting")
}else{
    console.log("Not Eligible for the voting")
}


let check = 4 === '4'
console.log(check)