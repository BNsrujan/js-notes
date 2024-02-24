// Events in JS
// The change in the state of an object is known as an Event 
// Events are fired to notify code of "interesting changes" that may affect code execution.
// . Mouse events (click, double click etc.)
// . Keyboard events (keypress, keyup, keydown)
//  Form events (submit etc.)
// . Print event & many more
// Node.event =() =>{
//handle here
// }
// if we write a cod in inlineevent and js then the priyority go's to js code
let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}
// we cannot write the same function twise because it will override
// btn1.onclick = () =>{
//     console.log("chader the text")
// }

// let div= document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are inside div");
// };

// Event Object
// It is a special object that has details about the event.
// All event handlers have access to the Event Object's properties and methods.
// node.event = (e) => {
// /handle here
// e.target,e.type, e.clientX, e.clientY
let btn2 = document.querySelector("#btn2")
btn2.onclick = (evt)=> {
    console.log(evt);
    console.log(evt.type)
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    };

{
    // Event Listeners
    // node.addEventListener(event, callback) //callback => it is a function
    
    // we can write the same function twise
    let btn3 = document.querySelector("#btn3");
        btn3.addEventListener("click", ()=>{
            console.log("button is being clicked")
    })
    
        btn3.addEventListener("click", ()=>{
            console.log("button is being clicked-handler 2")
    })

// node.removeEventListener( event, callback)
    // *Note: the callback reference should be same to remove
let handler3 =()=>{
    console.log("button is being clicked-handler 3")
}

    btn3.addEventListener("click",handler3 )
    btn3.removeEventListener("click",handler3)
{



{
// Let's Practice
// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode
// when clicked again.
let body = document.querySelector("body")
let btn4 = document.querySelector("#btn4")
let currmode = "light-mode"
btn4.addEventListener("click",()=>{
    console.log("you are tring to change mode")
    if(currmode === "light-mode"){
        currmode = "dark-mode"
        body.style.backgroundColor ="black"
        body.style.color = "white"
    }
    else{
        currmode = "light-mode"
        document.querySelector("body").style.backgroundColor ="white"
        document.querySelector("body").style.color = "black"
    }
})


}





{
    //we can also takem the style from css throught classlist
   
    let body = document.querySelector("body")
    let btn5 = document.querySelector("#btn5");
    let currmode = "light"
    btn5.addEventListener("click",()=>{
    if (currmode === "light") {
    currmode = "dark";
    body.classList.add("dark");// 1st we write add then remove we can not interchange that 
    body.classList.remove("light")
    }
    else {
    currmode = "light";
    body.classList.add("light");
    body.classList.remove("dark")
    }})
}























}
}









