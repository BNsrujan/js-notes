{
    // looping stament
    let count =1
    for ( count = 1; count <=5 ;count++){
        console.log ("you are a foll",count)
    }
    console.log (count)
    
    //Calculate sum of 1 to 100
    let sum = 0;
    let n = 100;
    for (let i = 1; i <= n; i++){
    sum = sum + i; // sum = 15
    }
    console. log("sum = ", sum);
    console.log("loop has ended");
    
    
    // while loop
    let i = 20;
    while (i <= 10) {
    console.log("Apna College");
    i++;
    }
    //do wile loop
    
    do {
    console. log("Apna College");
    i++;
    } while (i < 10);
    
    // for-of loop used for string array
    let names="srujan, monkey"
    for(let i of names){
        console.log("i=",i);
    }
    
    let size =0;
    for( let i of names){
        console.log("i=",i);
        size++;
    }
    console.log("string size",size);
    
    
    // for in loop used for object and arrays
    let student ={
        name : "srujan ",
        age : 23,
        roll_number :45,
        usn : "4al22cs164",
    };
    
    for(let i in student){
        console.log( i );// return vale
        console.log(student[i]);// return key
        console.log(student.i);// we can not write these
    };
    
    //Qs1. Print all even numbers from 0 to 100.
    for(let num =1;num<=100;num++){
        num % 2 == 0 ? console.log(num): "not print";
    };
    /*Create a game where you start with any random game number. Ask the user to keep
    guessing the game number until the user enters correct value.*/
    // let gameNum = 25;
    // let userNum = prompt("Guess the game number : ");
    // while (userNum != gameNum){
    // userNum = prompt("You entered wrong number. Guess again : ");
    // }
    // console.log("congratulations, you entered the right number");
    }
    