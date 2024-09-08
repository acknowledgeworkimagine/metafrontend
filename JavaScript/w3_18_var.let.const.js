/*         Var                         Let                         Const
 Lenient <-----------------------------------------------------------> Strict */

// ES5 JS
// Use var 


// var keyword <----------

//1. We CAN acces a var variable before initialization...
    //..as long as the var variable is EVENTUALLY INITIALIZED
    //..ANYWHERE in our code

/*console.log(user);

var user;*/

//2. We CAN declara and redeclare the same var variable without errors.

/*var user ="Mary";
var user ="Joana";
var user ="Mark";

console.log(user)*/

// ES6 JS
// Use let if value will change
// Use const if it will not change


// let keyword <----------

// 1. We CANNOT acces a let variable before we declare it

/*console.log(user); // Error!
let user;*/

// 2. We CAN declare an unassigned variable with let

/*let user;
console.log(user);*/

// 3. We CAN´T redeclare a let variable

/*let user = "Anna";*/

// 4. But we CAN re-assign it

/*user = "Anna";
console.log(user);*/


// const keyword <---------- the strictest

// 1. The const variable MUST BE INITIALIZED

/*console.log(user); //Error!
const user;*/

// 2. We CAN´T acces the const variable before initialization

/*console.log(user); //Unexpected token error
const user = "Andrew";*/

// 3. We CAN´T redeclare a const variable

/*user = "Anna";*/

