
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
    