///////AAROW FUNCTION!//////////

// Same function written as function declaration
function fullName (fName, lName) { 
    console.log(`${lName}, ${fName}`);  //string interpolation
  }
  fullName('Tiffany', 'Hudgens');  //will return the names you give it
  
  // Same function written as function expression-declare a function but store inside a variable
  fullName = function (fName, lName) {        //variable fullName
    console.log(`${lName}, ${fName}`);
  }
  fullName('Kristine', 'Hudgens');
  
  // Basic arrow function-always stored in a variable or excuted right away-similar like function expressions
  helloWorld = () => { console.log("Hi there"); }  //set with no perameters then the arrow then a code block in curly braces
  helloWorld();        //then call helloWorld just like a function
  
  
  // Arrow function with shorthand function argument for single arguments
  firstName = fname => { console.log(fname.toUpperCase()); }
  firstName('Jordan');
  //for a single argument-first name then fname then the arrow function then console log and call fname 
  //then call first name and pass in the value


  // Arrow function with multiple arguments
  fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
  fullName('Kristine', 'Hudgens');
  //for the arguments wrap in parens then the arrow and the process we want to run
  //then call full name and pass in the values
  //an arrow function is just another way to defining a function-cleaner way
