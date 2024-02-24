
{
    //Conditional Statements
    let age = 16;

    if (age >= 18){
        console.log("you can vote");
    }

    if (age <= 19){
        console.log("you can not vote ");
    }

    let mode ="dark";
    let colour; 

    if(mode === "dark"){
        colour = "black";
    }
    else{
        colour = "white";
    }

    console.log(colour);

    // To implement some condition in the code


//syntax ->rules
if(age < 18) {
    console.log("junior");
    } else if (age > 60) {
    console. log("senior");
    } else {
    console.log("middle");
    }

    
    let color;
    if (mode == "dark") {
    color = "black";
    } else if (modes == "blue") {
    color = "blue";
    } else if (mode == "pink") {
    color = "pink";
    } else {
    color = "white";
    console.log(color);
}

// condition ? true output : false output

let ages = 35;
age >18 ? "you can do " :"you can not do it ";


//switch statment
const expr = 'Papayas';
switch (expr){
case 'Oranges': console. log('Oranges are $0.59 a pound.');
break;
case 'Mangoes':
case 'Papayas': console.log('Mangoes and papayas are $2.79 a pound.');

//Expected output: "Mangoes and papayas are $2.79 a pound."
break;
default:
console.log(`Sorry, we are out of ${expr}.`,alert("hellow"));
}

// problum 1
//let newage=prompt("enter your age");
//newage > 18 ? "show the age " : alert("you can not visit")
//problum 1
//let num = prompt("enter a number");
//num % 5 === 0 ? console.log("it is a multiple of 5"):console.log("it is not a multiple of 5");

//problum 2
let monkeys = 34;
monkeys <= 90 && monkeys >= 20 ? console.log("you are right"):console.log( "you are wrong") ;
}
