//functional programing or paradigm

var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes,tax) {
    return shoes * tax;

}

var toPay = totalPrice(shoes,stateTax);

console.log("------Functional Programmming------")
console.log(toPay)

//OOP 1

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price:', calculation);
    }
}

console.log("------OPP 1------")
purchase1.totalPrice();


//OOP 2

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total price:', calculation);
    }
}

console.log("------OPP 2------")
purchase2.totalPrice();


//OOP 3

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax; // "this" means this object
        console.log('Total price:', calculation);
    }
}


var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;  // "this" means this object
        console.log('Total price:', calculation);
    }
}

console.log("------OPP 3------")
purchase1.totalPrice();
purchase2.totalPrice();