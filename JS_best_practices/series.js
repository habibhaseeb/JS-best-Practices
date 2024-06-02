//            => first we take variable to store data in Fabonacci Series 
function series(){

    let number = 10 // this will prints 10 numbers of the Series 

    let n1 = 0, n2 = 1, nextNum;
    console.log("Fibonacci Series:");
    
    for(let i = 1; i<=number; i++){
        console.log(n1);
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }

}
series();

// 2nd method
function series1(){

    let fabonacci = 0, EndTerm = 1, next_term;
    const absolute = 20;

    const verify = true;

    console.log("--Fabonacci Series--")

    for(let i = 0; i<absolute; i++){

        if(verify === true){  // This statement strictly check the value 

            console.log(`\t\t\t\t${fabonacci}`)

        next_term = fabonacci + EndTerm;

            fabonacci = EndTerm;

            EndTerm = next_term;

        }
   }
}
series1();
    
