var readline = require('readline-sync');
// This is our main function
function fizzbuzz() {
    console.log("Please enter max number:");
    const maxNum = readline.prompt();
    console.log("Hello, please enter which rules to implement (which combination of 3, 5, 7, 11, 13, 17)  - input as comma separated and in ascending order");
    const response = readline.prompt();
    var rules = JSON.parse("[" + response + "]");

    let codes = {
        3: "Fizz",
        5: "Buzz",
        7: "Bang",
        11: "Bong",
        13: "Fezz"
    }
    // Put your code here...
    for (let i = 0; i < +maxNum + 1; i++) {
        let toPrint = "";
        let special = false;

        if (rules[rules.length - 1] == 17 ){
            //checking if need to reverse the order
            if(i % 17 == 0){
                for (let index = rules.length - 2; index > -1; index--) {
                    const key = rules[index];
                    if (i%key == 0){
                     toPrint += codes[key];
                     special = true;
                    }
                }
            }
            //normal order and 17 is the last element
            else{
                for (let index = 0; index < rules.length - 1; index++) {
                    const key = rules[index];
                    if (i%key == 0){
                     toPrint += codes[key];
                     special = true;
                    }
                }
            }
        }
        else{
            //normal order
            for (let index = 0; index < rules.length; index++) {
                const key = rules[index];
                if (i%key == 0){
                 toPrint += codes[key];
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

