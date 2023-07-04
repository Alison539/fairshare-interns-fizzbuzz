var readline = require('readline-sync');
// This is our main function
function fizzbuzz() {
    
    // getting user input
    console.log("Please enter max number:");
    const maxNum = readline.prompt();
    console.log("Hello, please enter which rules to implement (which combination of 3, 5, 7, 11, 13, 17)  - input as comma separated and in ascending order");
    const response = readline.prompt();
    
    // preparing the user input
    var rules = JSON.parse("[" + response + "]");

    if(13 in rules){
        rules.splice(rules.indexOf(13),1)
        if (3 in rules){
            rules.splice(1,0,13)
        }
        else{
            rules.splice(0,0,13)
        }
    }

    let codes = {
        3: "Fizz",
        13: "Fezz",
        5: "Buzz",
        7: "Bang"        
    };

    // Put your code here...
    for (let i = 1; i < +maxNum + 1; i++) {
        let toPrint = "";
        let special = false; //this variable symbolises if the number is a multiple of one of the specified numbers
        let reverse = false;
        
        
        if (rules.includes(17)){
            if (i%17 ==0){
                rules = rules.reverse()
                reverse= true;
            }
            rules.splice(rules.indexOf(17),1)
        }
        //normal order
        for (let j = 0; j < rules.length - 1; j++) {
            key = rules[j]
            
            if (i%key == 0){
                toPrint += codes[key];
                special = true;
            }
        
        }
        if(rules.includes(11) && i%11 == 0){
            toPrint = "Bong";
            special = true
            if(rules.includes(13) && i%13 ==0){
                if(reverse){
                    toPrint = "BongFezz"
                }
                else{
                    toPrint = "FezzBong"
                }
            }
            
        }
            
       
        if (special){
            console.log(toPrint)
        }
        else{
            console.log(i)
        }

        if(reverse){
            rules = rules.reverse(); //undoing the reversal
        }
    }
        
}


// Now, we run the main function:
fizzbuzz();

