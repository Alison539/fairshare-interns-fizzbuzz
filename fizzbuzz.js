var readline = require('readline-sync');
// This is our main function
function fizzbuzz() {
    console.log("Hello, please enter some input: ");
    const response = readline.prompt();

    let codes = {
        3: "Fizz",
        5: "Buzz",
        7: "Bang",
        11: "Bong",
        13: "Fezz"
    }
    // Put your code here...
    for (let i = 0; i < response; i++) {
        let toPrint = "";
        let special = false;

        //checking if need to reverse the order
        if(i % 17 == 0){
            for (const [key, value] of Object.entries(codes).reverse()) {
                if (i%key == 0){
                 toPrint += value;
                 special = true;
                }
            }
        }
        else{
            //normal order
            for (const [key, value] of Object.entries(codes)) {
                if (i%key == 0){
                 toPrint += value;
                 special = true;
                }
            }
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

