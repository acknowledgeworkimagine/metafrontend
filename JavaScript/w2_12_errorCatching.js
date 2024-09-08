

function addTwoNums(a,b){
    try{
        if (typeof(a) != 'number')
        {
            console.log('the first argument is not a number');
            throw new ReferenceError();
            //throw new ReferenceError('the first argument is not a number');
            
        }
        else if (typeof(b) != 'number')
        {
            console.log('the second argument is not a number');
            throw new ReferenceError();
            //throw new ReferenceError('the second argument is not a number');
        }
        else 
        {
            console.log(a+b);
        }
    }
    catch(err){
        console.log("Error", err)

    }
    console.log("It still works")
}

addTwoNums(5,"5");

