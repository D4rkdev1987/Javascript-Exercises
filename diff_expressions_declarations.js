//anonymous function/function expressions
//why use-
var greeting = function () {         //function stored in a variable var greeting
    return "Hi there!";              // 
   }; //don't forget the semi colon
   
   var age = 4;                      //variable called age set to 4
   
   if (age <= 10) {                  //conditional if age is less than or euqal to 10
     var buildMenu = function () {   //function expression = var build menu set equal to the function
       return "Kids' Menu";          //
     };
   
     function wrongMenuBuilder () {  // 
       return "Wrong Kids' Menu";    //
     }
   
     console.log(buildMenu());       //
     console.log(wrongMenuBuilder());
   }

   //function expressions are more modular