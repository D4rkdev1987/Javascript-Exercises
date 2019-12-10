//pass data into functions/function parameters

function fullName(firstName, lastName, language) {  //3 arguments here or parameters
    var language = language || 'English'; // say var language || pipes means "or" and then pass in English-(language is equal to langauage or English)
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;  // remember the + is concat
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish')); // call the fullname function and pass in the values

//first create a function-takes in a first name and a last name and(function arguemnts)
////when you pass in the words you can use them how ever you want inside the function block in the { } -like a variable
//to over write- set variable language to language then 2 pipes(or)
//var language equals language OR English
