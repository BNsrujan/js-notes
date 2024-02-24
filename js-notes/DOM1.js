// Qs. Create a new button element. Give it a text "click me", background color of red & text color
// of white.
// Insert the button as the first element inside the body tag. 
{
    let newbut=document.createElement("button");
    newbut.innerText ="click me"
    newbut.style.backgroundColor = "red"
    newbut.style.color = "white"
    console.log(newbut)
    let div = document.querySelector("div")
    div.append(newbut)

}
// Qs. Create a <p> tag in html, give it a class & some styling. 
// Now create a new class in CSS and try to append this class to the <p> el
// Did you notice, how you overwrite the class name when you add a nev
// Solve this problem using classList.
{
    let para = document.querySelector("p")
    para.getAttribute("class");
    // para.setAttribute("class","newClass"); it will delet the old class and add a new class
    para.classList.remove("content");
    para.classList.add("newClass");
}