
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
    