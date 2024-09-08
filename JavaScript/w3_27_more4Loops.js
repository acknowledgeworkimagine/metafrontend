const car = {
    engine:true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sporsCar object", sportsCar);

//console.log('------ for-in is unreliable ------');
for (prop in sportsCar){
    console.log('🤔', prop);
}
//console.log('🤔', "Iterating over object AND its prototype!");

//console.log('------ for-of reliable ------');
for (prop of Object.keys(sportsCar)) {
    console.log('🎯', prop + ": " + sportsCar[prop])
}
//console.log('🎯', "Interating over object's OWN PROPERTIES onle!");
