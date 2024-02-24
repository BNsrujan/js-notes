
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
    