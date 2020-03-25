// let variable doesn't allow you to change the declared variable-strict framework
// var allows you to replace it and change it-temporary container very loose      
var age = 12;       //new variable age set to equal 12
console.log(age);   

var age = 15; // yep!  //redefined to set it equal to 15
console.log(age);
////////////////////////////////////////////////////////////
let age = 12;       //the let variable age set to 12
console.log(age);
                   //age is declared already
let age = 15;     // nope! you cannot redefine the variable
console.log(age);
                  //gives a more strict framework-when you want to have a datapoint you dont want overridden 

             