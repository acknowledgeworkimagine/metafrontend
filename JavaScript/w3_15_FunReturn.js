
// Functional Programming (FP)

function consoleLog(val) {
    console.log(val)
    return val
}

consoleLog("Hey buddy!")

function doubleIt(num) {
    return num * 2
}

console.log('Double of two is: ')
console.log(doubleIt(2))

// Object-oriented programming (OPP)

function objectMaker(val) {

    return {
        prop: val
    }
}

var object = objectMaker(200);

console.log(object)

