// Hoisting
// is a very specific way the interpreter reads variables

//hoisted-declarations get hoisted to the top (DOES NOT WORK WITH ASSIGNMENT)
//first assign the variable
//then console log it
//now with hoisting you put var name at the bottom
//reasoning for this-interpreter it tries to find every spot where variable is
name = 'Kristine';
console.log(name); // 'Kristine'
var name;

// Initializers not hoisted
console.log(age); // undefined-it is decalred and assigned it to a value at the same time here
var age = 33; // does not get hoisted to the top


// 1st assign the variable name to kristine 

// hoisting is a specific way the interpreter reads
// it only works with declarations 
// AVOID HOISTING ISSUES and assign declare your variables at the top

