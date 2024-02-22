{
console.log("monkey");
console.log('monkey')
//This is a single line comment
/* This is a multi-line
comment. */
nameg_$12 = "moneky";
age = 45;
age = age +1;
price =99.99;
x=null;
y=undefined;
isfollow = true;
console.log(nameg_$12 );
console.log(age);
fun = "abc" + 123;
console.log(fun);
console.log("your are a \n monkey" );//\n new line
console.log("your are a \t monkey" );//\n tab space
let str ="your are a \t monkey" ;//\t is a singal charecter
console.log(str.length);
console.log("moneky","donkey");// , will give a space between monkey and donkey
console.log("moneky"+"donkey");// + will not give a space between monkey and donkey
// alert give warrnig massig at the top
//let age = alert("hellow");
//prompt give the alert and it can take iput from an user which we can store it in an variabal
}


{
/*var : Variable can be re-declared & updated. A global scope variable.*/
var name =12;
var name =13;

/*let: Variable cannot be re-declared but can be updated. A block scope variable.*/
{
    let names = 233;
}
{
let namess = 34;
}
/*const: Variable cannot be re-declared or updated. A block scope variable.*/
const monkeys =23;
//you cannot initals
}


{
//Data Types in JS
//number
let age =24 ;
console.log(typeof age);
let percent = 344.3 ;
console.log(typeof percent) ;

//string
let fullName ="tony stark";
console.log(typeof fullName) ;

//boolean
let isFollow =true;
console.log(typeof isFollow );

//undefined
let x;

//null
let a = null;

//BigInt
let d = BigInt("1222222222");
console.log(typeof d);

//symbol
let y = Symbol(" hello!")
console.log(typeof y);
}

{
//non-primitive data type

const student = {
    key:"value",
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true 
    };
// printing
console.log(student);
console.log(student["age"]);
console.log(student.age);
student ["age"] = student ["age"] + 1;
student ["name"]= "Rahul Sharma";
console.log(student.age);
console.log(student.name);
// if we have const object we can change the key
}

{
//project 1
const product ={
    name : "ball pen",
    rating: 4,
    offer: 5,
    price: 270,
    };
console.log (product);
}

{
//project2
const profile ={
    name : "shradhakhapra",
    posts:195 ,
    followers : 569,
    following : 4,
    follow: true,
    massage : false,
    };
console.log       (profile);
console.log(typeof profile ["followers"]);
}

{
/* Operators in JS =Used to perform some operation on data*/
{
//Arithmetic Operators = + , - , * , / 
let a = 5;
let b = 2;
console.log("a = ", a, " & b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ",a * b);
console.log("a / b = ", a / b);
// Modulus
console.log("a % b = ", a % b);
//   Exponentiation
console.log("a ** b = ",a ** b); 
//unary operaters = uses singal element for operat
console.log("a--",a--);//the value will change from next line,first it will print then it will subtract
console.log("a++",a++);// the value will change from next line,first it will print then it will add
console.log("--a",--a);// the value will change from that line,first it will subtract then it will print
console.log("--a",++a);// the value will change from that line,first it will add then it will print 
}
{
//assinment operators => = , += , -= , *= , **= 

let a = 5;
let b = 2;
a+=4 ;//a=a+4
console.log("a=",a);
a-=4 ;//a=a-4
console.log("a=",a);
a*=4 ;//a=a*4
console.log("a=",a);
a**=4 ;// a=a**4
console.log("a=",a);
a/=4 ;// a=a/4
console.log("a=",a);
a%=4 ;// a=a%4
console.log("a=",a);
}
{
//Comparison Operators => = , == , === , >= , <= , != , < , >
let a = 5;
let b = 5;
console.log("5==5",a==b);//true
console.log("5!=5",a!=b);//fals
console.log("5 >= 5", a >= b);//true
let x = 5; //number
let y = "5"; //string -> number
console. log("x == y", x == y); //true 
console. log("x === y", x === y); //fals 
}

{
// logical operators => AND && , OR || , NOT !
let a = 6;
let b = 5;
let cond1 = a > b; //true
let cond2 = a === 6; //true
console. log("cond1 && cond2 = and", cond1 && cond2);
console. log("cond1 && cond2 = and", a < b && a === 6);
console. log("cond1 || cond2 = or", a < b || a === 6);
console.log("! (a<b) = ", !(a < b)); //false
}
}

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

{
//string 
let str ="srujan";
console.log(str.length);
console.log(str[0]);
console.log(str[2]);

// Template Literals in JS
// A way to have embedded expressions in strings
//  `this is a template literal` 
// String Interpolation
// To create strings by doing substitution of placeholders
// `string text ${expression} string text`
let obj = {
    item: "pen",
    price: 10,
    };
    let output = `the cost of ${obj.item} is ${obj.price} rupees`;

    console.log(output);
{
// string methods

let strs ="                        yo! what are you doning"
strs.toUpperCase()
strs.toLowerCase()
strs.trim( ) // removes whitespaces
console.log("string can not be Immutable",strs);

// for the working it 
let newstring = strs.toUpperCase();
console.log(newstring);

let str1 = "0123456";
let str2 = "0123456";
// str.slice(start, end?) II returns part of string
console.log(str1.slice(2,5));
 
ris =str1.concat( str2 ); // joins str2 with str1
console.log( ris);

// str.replace( searchVal, newVal)
  console.log(str1.replace("0","1"));
  // str.charAt( idx )
  console.log(str1.charAt(1));


//Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their ful name and ending with the fullname length.
// eg: user name = "shradhakhapra", username should be "@shradhakhapra13"
// let block = prompt("enter the name");
// let at = "@";
// console.log(at.concat(block)+block.length);
};


}

{
{
//array => colection of similler data type array is an object in js
// array are mutabale 

let array = ["moneky","donkey","dog","cat"];
let m = console.log(array+array.length)//output moneky,donkey,dog,cat4
let n =console.log(array,array.length)//outout >(4) ['moneky', 'donkey', 'dog', 'cat']
console.log(typeof[m])
console.log(typeof[n])
console.log(typeof[array])

console.log(array[0])
array[2] = 66;
console.log(array)

// lopping over an Array
let array1= [1,3,4,5,6,7,8,9,4,43,2,34,];
for(let i =0 ;i<array1.length;i++){
    
console.log(array1[1]);

}
//for of
for (let i of array1){
    console.log(i);
}

let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];
for(let city of cities) {
console.log(city.toUpperCase());
}

// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.
students =[85, 97, 44, 37, 76, 60];
sum =0;
for(let i of students)
    sum = sum + i;//sum +=i

let average = sum/(students.length);
console.log(`the average of sudents are ${average}`);

// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after
// applying offer.
let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items) {
console.log(`value at index ${i} = ${val}`);
items[i] = val-(val/10);
console.log(`value after offer = ${items[i]}`);
i++;
}
console.log(items);
}



{
let items=["potato","apple","litchi",66,"tomato"];
    //pus():add to end
    items.push("chips","burger","paneer");
    console.log("pushed ",items);
    //pop():delete from end and return
    items.pop();
    console.log("poped",items)
    //tostring():converts arry items to string 
    console.log(items.toString());//new array is creaated to display the toString
    console.log("toString",items)
    //concat():joins mutiple arrays and returns newstring
    new_items=["bananna","mango","papay"];
    new_item=["banannachips","mango_chips"];
    console.log("cocat three string",items.concat(new_items,new_item))//it is a new array
    //unshift():add to start it is like push
    items.unshift("chips","burger","paneer");
    console.log("upshift",items);
    //shift():delete from start and return it is like pop
    items.shift();
    console.log("shift",items)
// Slice(): returns a piece of the array
// slice(startldx, endldx ) it will not change original array 
   console.log("slice",items.slice(1,3));
// Splice(): change original array (add, remove+1, replace)
// splice( startldx, deletCount, if we want to add newElements. at the place of deletedarry);
    console.log("splice",items.splice(1,3,"add_frute"))
    console.log(items)

// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(companies.shift());
console.log(companies);
companies.splice(2,1,"ola");
console.log(companies)
companies.push("amazon")
console.log(companies)
}
}

{
//     Functions in JS
// Block of code that performs a specific task, can be invoked whenever needed
//exampals are log(),toupperCase(),push()
console.log("HELLO");
"abc".toUpperCase();
[1,2,3].push(4);


//function functionName(){
    // local variabals
    //do some work
// }
// or
// funtion functioName(parameater1,parameater2......){
    // do some work
// }

// funtion calling 
// fnctionName();

function myFunction(){
    console.log("we are fleaxra");
    console.log("flixara")
    console.log("flixara");
    console.log("flixara");
    console.log("flixara")
}

myFunction();


function newFunction(massage){
    //parameter -> input
    console.log(massage);
}
// NaN error =>not a number
newFunction("moneky"); // argument



function newFunction(x,y){
    console.log(x*y);

}
newFunction(10,50); 


function newFunction(massage) {
    // Check if the input is a number
    if (isNaN(massage)) {
        console.log("Input is not a number");
    } else {
        // Perform operations with the numeric value
        console.log(massage);
    }
}

// Example usage
newFunction("monkey"); // Output: Input is not a number
newFunction(42); // Output: 42

function sum(x, y){
    s = x+ y;
    console. log("before return");
    return s; // return will alwas return one value
    console. log("after return");//these is an unreachabal code
}
    let val = sum(3, 4);
    console.log(val);

{


// arrow functions => compact way of writing a function

// const functionName =(parameater1,parameater2... )=>{
    // contrent 
// }
let container =(a,b)=>{
    console.log(a+b);
}
console.log(container)
container(2,3)//it will print the value

// or
let containers = (a,b)=>{
    return a*b
}
containers(2,3)//it will not print the value
console.log(containers(2,3))

const printhello =()=>{console.log("hellow");}
printhello();

// Qs. Create a function using the "function" keyword that takes a String as an argument &
// returns the number of vowels in the string.
// Qs. Create an arrow function to perform the same task.
const strings =(str)=>{
    let count =0;
    for (let i of str){
        if ( i === "a"||i ==="e"||i ==="i"||i ==="o"||i==="u"){
         count++;
        }
        
    }
    return count
}
let m =strings("flixara")
console.log(m)
}





{
// forEach loop in array   it is a merthods
let  arr = [1,2,3,4,5,6,7,8];

arr.forEach(function display(val){//forEach is used to take the input from the anothe funtion one by one and do the oparation which is writen in the container
    console.log(val);
})
// or  
arr.forEach((val)=>{
    console.log(val);
})











}
}