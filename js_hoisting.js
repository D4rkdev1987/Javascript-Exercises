// Hoisting
// is a very specific way the interpreter reads variables
//hoisted
name = 'Kristine';
console.log(name); // 'Kristine'
var name;

// Initializers not hoisted
console.log(age); // undefined
var age = 33;
// 


// 1st assign the variable name to kristine 
// what this interpreter does is looks for var name and loads at the top
// it only works with declarations 
// 
// AVOID HOISTING ISSUES and decalare your variables at the top
