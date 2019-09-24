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
  
  // Nope!-can't use arrow function because returns undefined
  //expression vs arrow-arrow changes the way it works-references the single function not what is bound to it
  // const fullName = () => {
  //   return `${this.lastName}, ${this.firstName}`;
  // };

  //JS allows you to connect a function with an object below
  const kristine = fullName.bind(userOne);//variable kristine-cal the function fullName then bind userOne
  const tiffany = fullName.bind(userTwo); //same as above
  
  kristine();
  tiffany();