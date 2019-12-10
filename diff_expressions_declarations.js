//anonymous function or named function expressions
//why use-
var greeting = function () {         //function stored in the variable var greeting
    return "Hi there!";              // now return the string hi there
   }; //don't forget the semi colon
 /////////////////////////////////////////////////////////////////////////////

   var age = 4;                      //variable called age set to 4
   
   if (age <= 10) {                  //conditional if age is less than or euqal to 10 then do....
     var buildMenu = function () {   //function expression = var build menu set equal to the function then inside it...
       return "Kids' Menu";          // return the string Kids Menu
     };
   
     function wrongMenuBuilder () {  // this won't work because declarations won't work inside of this block
       return "Wrong Kids' Menu";    // only use this outside of the block or the curly braces
     }
   
     console.log(buildMenu());       //
     console.log(wrongMenuBuilder());
   }

   //function expressions are more modular-if you need something to move around
   // expression is stored in a variable