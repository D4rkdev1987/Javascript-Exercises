//pass data into functions/function parameters

function fullName(firstName, lastName, language) {  //2 arguments here
    var language = language || 'English'; //   2 || pipes means "or"
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));

//first create a function-takes in a first name and a last name and(function arguemnts)
////when you pass in the words you can use them how ever you want-like a variable
//to over write- set variable language to language then 2 pipes(or)
//var language equals language OR English
