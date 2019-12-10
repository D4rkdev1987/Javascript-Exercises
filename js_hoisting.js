// Hoisting
// is a very specific way the interpreter reads variables
//hoisted
name = 'Kristine';
console.log(name); // 'Kristine'
var name;

// Initializers not hoisted
console.log(age); // undefined-it is decalred and assigned at the same time here
var age = 33; // does not get hoisted to the top


// 1st assign the variable name to kristine 

// hoisting is a specific way the interpreter reads
// it only works with declarations 
// AVOID HOISTING ISSUES and assign declare your variables at the top

