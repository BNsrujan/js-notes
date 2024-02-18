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
console.log(fun)
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
console. log("cond1 && cond2 = ", cond1 && cond2);
console. log("cond1 && cond2 = ", a < b && a === 6);
console. log("cond1 || cond2 = ", a < b || a === 6);
console.log("! (a<b) = ", !(a < b)); //false
}
}

{
    //Conditional Statements
    //To implement some condition in the code
}