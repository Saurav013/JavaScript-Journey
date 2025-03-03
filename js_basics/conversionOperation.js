// Conversion Operation

// Conversion of Number to String
let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(valueInNumber);   // giving NaN
console.log(typeof valueInNumber);

// Summary 
// "String" i.e. "33" -> number ie. 33
// "33abc" -> NaN (Not a Number)
// true -> 1, false -> 0

let isLoggedIn = 1; // 1 -> true,0 -> false, "Saurav" -> true
let check = Boolean(isLoggedIn);
console.log(typeof check)


// Conversion of Number to String

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)