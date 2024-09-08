/*  although it is possible to build inheritance using the object create method. 
It's probably better to use class syntax for more complex objects and inheritance. 
Although under the hood, this syntax still works with prototypes. 
It makes sense to use classes as they improve developer experience in more complex scenarios.*/

// Prototype
var bird = {
    hasWings: true,
    canFly:true,
    hasFeathers:true
}

var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);

console.log("eagle1 has wings:", eagle1.hasWings);
console.log("eagle1 can fly:", eagle1.canFly);
console.log("eagle1 has feathers:", eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log("eagle2 has wings:", eagle2.hasWings);

var pinguin1 = Object.create(bird);
pinguin1.canFly = false;
console.log("pinguin1: ", pinguin1);
console.log("ponguin1 has feathers:", pinguin1.hasFeathers);
console.log("penguin1 can fly:", pinguin1.canFly)