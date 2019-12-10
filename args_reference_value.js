//reference vs Value
//arguments you pass in objects you actually pass in a reference 
//when you pass an object as an argument its passed as an reference

var someUser = {       //variable an object here
    name: 'Jordan'
}

function nameFormatter (user) {  //function declaration takes in a user
    return user.name = 'Oops';   //returns the user.name
}

nameFormatter(someUser); // "Oops"   

someUser; // Object {name: "Oops"}  
//                                       PASSING AN OBJECT AS AN ARGUMENT ABOVE
//////////////////////////////////////////////////////////////////////////////////

var someName = 'Tiffany';       //variable named some name named Tiffany

function someOtherNameFormatter(name) {  // create the function and takes in the name not the full object
    return name = 'Oops';
}

someOtherNameFormatter(someName); // "Oops"

someName; // "Tiffany"
//////////////////////////////////////////////////
function nameFormatter (userName) { 
    return userName = 'Oops';
}
//to change the value for this example use user.name = 'kristine'
someUser.name; // "Oops"

someUser.name = 'Kristine';

nameFormatter(someUser.name); // "Oops"

someUser.name; // "Kristine"