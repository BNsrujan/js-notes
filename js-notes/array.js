
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
    