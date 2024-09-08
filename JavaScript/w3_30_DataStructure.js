
console.log("------forEach()------")
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);


console.log("------filter()------")
const nums = [0,10,20,30,40,50];
function FilterNum(num) {
    return num>20
}
console.log(nums.filter(FilterNum))

console.log("------map()------")
function ByTen(num){
    return num/10
}

console.log(nums.map(ByTen))

console.log("------This task is to convert an object to an array------")
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)