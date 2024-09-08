try {
    throw new ReferenceError();     
} catch(err){
    console.log(err)
    console.log('Theere was aa reference error')
}

console.log("My program does not stop")
