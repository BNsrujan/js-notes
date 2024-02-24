
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
    let array = ["moneky","donkey","donkeys","function"];
    array.forEach((val,idx,arr)=>{ //idx => it will print the index of the array //arr => it print the arrray 
        console.log(val.toUpperCase(),idx,arr);
    });
    array.forEach((idx)=>{
        console.log(idx)
    })
    
    // A higher-order function in JavaScript is a function that either takes another function as an argument or returns a function as a result, or both
    let nums = [23,45,3,4,3,4,43,3,43];
    nums.forEach((num)=>{
        console.log(num *num);
    });
    // or
    let calcSquare = (num) =>{
        console.log(num*num);
    };
    nums.forEach(calcSquare)
    
    }
    
    {
    
    //     Map
    // Creates a new array with the results of some operation. The value its callback returns are
    // used to form new array
    // arr.map( callbackFnx( value, index, array)
    // let newArr = arr.map( ( val) =>{
    // return val * 2;
    // ]）
    
    let nums = [67,54,43,43];
    let newArr = nums.map((val)=>{
        return val * val ;
    
    });
    console.log(newArr);
    }
    
    
    
    
    
    {
    // fileter
    // creates a new array of elements that give true for a condition/Filer.
    // Eg:all even Element
    arr = [1,2,3,4,5,6,7,8,9,10]; 
    let newArr = arr.filter((val) => {
        return val % 2==0;
    });
    console.log(newArr);
    // or
    arr.filter((val)=>{
        console.log(val % 2 !=0);
    });
    
    // Qs. We are given array of marks of students. Filter outof the marks of students that scored 90+.
    
    let arrayss = [1,2,93,45,95,6,98,65,54];
    let newAr = arrayss.filter((num)=>{
        return num > 90 ;
        });
    console.log(newAr)
    
    
    }
    
    
    {
        // reduce
        // performs some  operations and reduces the array to a single value.it returns that single value.
        // adding all the numbers
        let array =[1,1,101,2,3,4,5,6];
    
        const newvalu =array.reduce((priveas,current)=>{
            return priveas + current ;
        });
    
        console.log(newvalu);
    
        
        // largest number
        const value = array.reduce((preveasvalue,presentvalue)=>{
            return preveasvalue  > presentvalue ? preveasvalue : presentvalue
        });
    
        console.log(value);
    
    }
    
    
    {
    // Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
    // Use the reduce method to calculate sum of all numbers in the array.
    // Use the reduce method to calculate product of all numbers in the array.
    let n = 45;// let n = prompt("enter a number");
    
    let arr = [];
    for(i = 1;i<=n;i++){
        arr[i-1]=i;
    }
    // or
    let array =[];
    for( i= 0; i<n;i++){
        array[i+1]=i;
    }
    // or
    for( i= 0; i<n;i++){
        array[i+1]=i;
    }
    // or
    let arrays=[]
    for( i= 0; i<n;i++){
        arrays[i]=i+1;
    }
    console.log(arr)
    console.log(array)
    console.log(arrays)
    
    let newnum = array.reduce((prec,curr)=>{
        return prec +curr;
    })
    console.log(newnum);
    
    let factorial = arr.reduce((prec,curr)=>{
        return prec * curr;
    })
    console.log("factorial",factorial);
    }
    }
    
    