
// Notice the use of backticks `  ` 
// The backticks support multiline
console.log("display both variables using template literals:") // Notice the use of backticks `  ` 
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place}!`, "\n")


console.log("it's possible to perform arithmetic operation inside a template literal expression:")
console.log(`${1 + 1 + 1 + 1 + 1} stars!`, "\n") 


console.log("display both variables without using template literals:")
var greett = "Hello";
var placee = "World";
console.log(greett + " " + placee + "!", "\n");

let multiLine = `
    Pepito
    clavo
    un clavito
    en la calva
    de un
    calvito
`

console.log(multiLine);