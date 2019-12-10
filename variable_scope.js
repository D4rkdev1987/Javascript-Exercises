//how variable scope works
//variable global scope-made available to everything-can lead to confusing bugs
//below is how to utilize it properly

//GLOBAL VARIABLE BELOW
var userObj = {                     //create a variable called userObj
    email: 'sample@example.com',    //email is key value is sample email
    fullName: 'Kristine Hudgens'    //full name attribute
  }
  //LOCAL VARIABLE BELOW-it is local to the function(inside it)-you can only use the values below when inside the function
  function dashboardGreeting() {    //build the function here-takes no args
    var userObj = {                 //variable declaration in the function -local variable
      email: 'sample2@example.com', //
      fullName: 'Jordan Hudgens'    //
    }
    console.log("Hi there, ".concat(userObj.fullName)); //concat -combines --then pass in the userOgn.fullname
  }
  
  dashboardGreeting();
  console.log(userObj.fullName);

  //you need to be careful with paluting the global variable scope
  //best pratice is not to have global variables-instead have local variables
  // always put var and let before variable in the function-you might accidentally create a global variable