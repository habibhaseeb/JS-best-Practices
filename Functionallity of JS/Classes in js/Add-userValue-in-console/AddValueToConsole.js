function convertArrayToNum(addVal) {

    let output = [];    // current length is three
    
    let New = output.push(["cherry"] , ["Pineapple"], ["Mango"]);
    
    const convert = New.toLocaleString()
    let num = 3;
    
    num = num.toString()
    
    // function to add user's value
    
    function userInputMethod(addVal) {
    
    let userInput = String(prompt("Enter value you want to add"));
    addVal = userInput.toString(addVal);
    
    return addVal; 
    }
    
    
    if(typeof convert == typeof num) {
        console.log(`${ New + ' ' + userInputMethod()}, your value is added`);
    }
        else{
            console.log("Something went wrong");
        }
    
    };
     
    convertArrayToNum();