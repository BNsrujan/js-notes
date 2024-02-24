
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
console.log(heading)

// selcting with class
let classs = document.getElementsByClassName("class");
console.log(classs)

//selcting with tag
document.getElementsByTagName("")










}
