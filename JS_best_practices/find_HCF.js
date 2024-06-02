            //  ----------HCF (highest common factor)----------

            //     is math concept of highest divisor like 12 has the highest common factor 6

// let number1,number2;

// number1 = 435;

// number2 = 212;

let randomNum1 = Math.floor(Math.random()*100);

let randomNum2 = Math.floor(Math.random()*100);

while(randomNum1 != randomNum2){

    if(randomNum1 > randomNum2){

        randomNum1 -= randomNum2;   // -= decrement assignment statement

               // number1 = number1- number2 also write this statement 
    }
    else{
        randomNum2 -= randomNum1;
    }
}
console.log(`Your HCF is ${randomNum1}`) // print HCF of that random nums b/w 1 & 100;

