function noDefaultParams(number) {
    console.log('Result:', number * number)
}

noDefaultParams(); 

function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}

withDefaultParams();