
console.log("------Spread operator------")
console.log("      ------Join arrays, objects using the rest operator------")
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

console.log("      ------Add new members to arrays without using the push() method------")
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

console.log("      ------Convert a string to an array using the spread operator------")
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

console.log("      ------Copy either an object or an array into a separate one------")
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)

console.log("------Rest operator------")
console.log("      ------Basic function------")
const top7 = [
    "The Colosseum",
    "The Roman Forum",
    "The Vatican",
    "Trevi Fountain",
    "The Pantheon",
    "Pizza Venezia",
    "The Palatine Hill"
]

const [] = top7;
console.log(top7)

const [first, second, third, ...secondVisit] = top7 
console.log(secondVisit)

console.log("      ------Quick operations on Arrays/Arrow function ------")
function addTaxToPrices(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item)
}
let shoppingCart = addTaxToPrices(1.1, 46,89,35,79);
console.log(shoppingCart);