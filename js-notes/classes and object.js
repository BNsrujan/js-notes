// Prototypes in JS
// A javaScript object is an entity having state and behavior (properties and method).
// JS objects have a special property called prototype.
// We can set prototype using __ proto __
// *If object & prototype have same method,
// object's method will be used.


const student = {
    fullName: "shradha khapra",
    marks: 94.4,
    printMarks: function(){
    console.log("marks = ", this.marks); //this.marks =>student.marks
    },
}

const employes ={
    calcTax(){
        console.log("tax rate is 10%");
    },
}
const KaranArjun ={
    salary : 500000,
};

KaranArjun.__proto__ = employes;