///////AAROW FUNCTION!//////////

// Same function written as function declaration
function fullName (fName, lName) { 
    console.log(`${lName}, ${fName}`);  //string interpolation-remember it uses the $ followed by { }
  }
  fullName('Tiffany', 'Hudgens');  //then call the function- it will return the names you give it
  
  // Same function written as function expression-declare a function but store inside a variable
  fullName = function (fName, lName) {             //function expression //variable fullName 
    console.log(`${lName}, ${fName}`);
  }
  fullName('Kristine', 'Hudgens');
  
  // Basic arrow function-always stored in a variable or excuted right away-similar like function expressions
  // first say helloWorld with no params(which are the parens-args go here) then the arrow then a code block in { } and say console log and hi there
  helloWorld = () => { console.log("Hi there"); }  //set with no perameters then the arrow then a code block in curly braces
  helloWorld();                                    //then call helloWorld just like a function
  
  
  // Arrow function with shorthand function argument for single arguments
  firstName = fname => { console.log(fname.toUpperCase()); }  //name of function, pass a single arg, then the arrow function, then inside the fname and toUpperCase function
  firstName('Jordan');                                        // call the function here and pass in the value here
  //for a single argument-first name then fname then the arrow function then console log and call fname 
  //then call first name and pass in the value
  // for single arg you don't need to have parens like fname


  // Arrow function with multiple arguments
  fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
  fullName('Kristine', 'Hudgens');
  //for the arguments wrap in parens then the arrow and the process we want to run
  //then call full name and pass in the values
  //an arrow function is just another way to defining a function-cleaner way
