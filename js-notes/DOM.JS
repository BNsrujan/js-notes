
{
    // The window object represents an open window in a browser. It is browser's object (not JavaScript's)
    // & is automatically created by browser.
    // It is a global object with lots of properties & methods.
//     What is DOM?
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page
    //                                              window
    //                                                 |
    //                                             document
    //                                                 |
    //                                                html    
    //                 |--------------------------------------------------------------|
    //             Head                                                              body
    //     |-------|-----|-----|                                            |----------------|
    //   meta     meta  title link                                        div                 script    
    //                                                                     |
    //                                                             |----|-----|----| 
    //                                                             img  h1   p    div           
// comands we can uses in console
// window   => it will open all the element of the Websit
// windows.document   => it will open all the codes of the Website 
// console.dir()  => it will open all the  examplale =>console.dir(window.document)
// DOM manipulation
console.dir(document.body.childNodes[1].inner);

// Selection with id
document.getElementById("heading")
let heading = document.getElementById("heading");
console.dir(heading)

// selcting with class
let classs = document.getElementsByClassName("class");
console.dir(classs)// it will return html colection
let n1 = document.getElementsByClassName("myClass");
console.dir(n1)

//selcting with tag
let n2 = document.getElementsByTagName("p");
console.dir(n2);



// Query Selector
// document.querySelector("myld I myClass I tag") 1st element
// returns first element
let n3 = document.querySelector("p")
console.dir(n3)
let n6= document.querySelector(".myClass")
let n7 = document.querySelector("#heading")
console.dir(n6)
console.dir(n7)

// document.querySelectorAll("myld I myClass I tag") all element
// returns a NodeList
let n4 = document.querySelectorAll("p")
console.dir(n4)



// {
// // Properties
// // tagName : returns tag for element nodes
// let n3 = document.querySelector("p").tagName;
// console.dir(n3)
// // innerText : returns the text content of the element and all its children
// // we can chanje the text in the spacific area
// let n8= document.querySelector(".myClass");
// console.dir(n8.innerText="hellow");
// // innerHTML : returns the plain text or HTML contents in the element
// let n7 = document.querySelector(".bodys").innerHTML;
// console.dir(n7);
// // textContent : returns textual content even for hidden elements
// //we van applay changes
// let n6= document.querySelector(".bodys");
// console.dir(n6.textContent= "world");
// let n9= document.querySelector(".bodys").textContent= "hellow";
// console.dir(n9);
// }

{
    
// Qs. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College
// students" to this text using Js.
let h2 = document.querySelectorAll("h2");
console.dir(h2.innerText);
h2.innerText= h2.innerText + "adding the new line";;



// Qs. Create 3 divs with common class name - "box". Access them & add some unio"
// of them.
// let  div = document.querySelectorAll("box");
// div[0].innerText = "new unique value 1";
// div[1].innegText = "new unique value 2";//////////////////////////////////////////////////////////////////////////////////////////////////////
// div [2].innerText = "new unique value 3";
// console.log(div[0]);
// console.log(div[1]);
// console.log(div[2]);

let divs = document.querySelectorAll(".box");
let idx = 1;
for (let divs1 of divs) {
    divs1.innerText = `new unique value ${idx}`;
idx++;
console.log(divs1);
}



// Element.setAttribute(name, value);//////////////////////////////////////////////////////////////////////////////////////////////////////
// Element.setAttribute("style", “css properties: value");

// p.setAttribute("id","mydiv");
// p.setAttribute("style", "font-size: 80px");
// let div = document.querySelector("div");
// div.style. backgroundColor = "green"
// div.style.backgroundColor = "purple";
// div.style.visibility = "hidden";
// div.style. fontSize = "26px";
// div.innerText = "Hello!";
// let para = document.querySelector("h2");
// console.log(para)

// let id =para.getAttribute("class")
// console.log(id);

}





{
// Insert Elementslet el = document.createElement("div")


let newBtn =document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn)

//  node.append( el ) adds at the end of node (inside)
let div = document.querySelector("div");
div.append(newBtn);
//  node.prepend( el ) adds at the start of node (inside)
div.prepend(newBtn)
//  node.before( el ) adds before the node (outside)
div.before(newBtn)
//  node.after( el )adds after the node (outside)
div.after(newBtn)
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";
document. querySelector("body"). prepend(newHeading);

// Delete Element
//  node.remove() Ilremoves the node
let para = document.querySelectorAll("p");
para.remove();//////////////////////////////////////////////////////////////////////////////////////////////////////
newHeading.remove();
}



}
