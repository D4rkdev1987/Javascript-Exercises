//bind function

const userOne = {           //user object
    firstName: "Kristine",  //has a first name
    lastName: "Hudgens"     //has a last name
  };
  
  const userTwo = {        //user object
    firstName: "Tiffany",
    lastName: "Hudgens"
  };
  // Function expression-anonymouse function stored in a variable
  const fullName = function() {                    //fullName set equal to function        
    return `${this.lastName}, ${this.firstName}`;  //string literal syntax (backticks)
  };
  
  ////Nope!-can't use arrow function because returns undefined
  ////expression vs arrow-the arrow changes the way it works-references the single function not what is bound to it
  //// const fullName = () => {
  ////   return `${this.lastName}, ${this.firstName}`;
  //// };

  //JS allows you to connect a function with an object below
  const kristine = fullName.bind(userOne);//variable kristine-cal the function fullName then bind userOne
  const tiffany = fullName.bind(userTwo); //same as above
  
  kristine();
  tiffany();

  // created 2 user objects
  // now created a function expression(anon function stored in a variable)
  // inside it return with string literal syntax last name and first name
  // (what we want to inject and bind the function and the objects together now--call this and have it reference our object)
  // now say const and variable kristine equal to fullname bind and pass in userOne( and do the same for userTwo) 
  // call kristine() and it will return/print out Hudgens, Kristine 