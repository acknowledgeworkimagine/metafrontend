// An object is not iterable because is not an array
// You can use the fact that a for loop can be run on arrays to loop over objects.

//The Object.keys() method
//The Object.values() method
//The Object.entries() method

const car3 = {
    speed: 300,
    color: "yellow"
}

console.log(Object.keys(car3));
console.log(Object.values(car3));
console.log(Object.entries(car3));

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) { // "key" could be anyword
    console.log(key, ":", clothingItem[key])
}