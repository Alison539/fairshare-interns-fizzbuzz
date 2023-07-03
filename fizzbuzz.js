// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    // Put your code here...
    for (let i = 0; i < 101; i++) {
        let toPrint = "";
        let special = false;
        if(i % 3 == 0){
            toPrint += "Fizz";
            special = true;
        }
        if (i%5 == 0){
            toPrint += "Buzz";
            special = true;
        }
        if (special){
            console.log(toPrint)
        }
        else{
            console.log(i)
        }
        
    }

}

// Now, we run the main function:
fizzbuzz();

