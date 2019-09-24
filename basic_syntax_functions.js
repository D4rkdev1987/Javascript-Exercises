function hiThere () {         //say function and then what you want to call it-then put perens-this one has no arguments
    console.log('Hi there');  //then inside of the curly brackets place a console.log saying hi there
}
hiThere(); // Hi there        //to print it out call hithere function with open close perens
                              //void function-function runs but returns nothing back-process starting a server or something(just example)
function hiThereTwo() {       //new function names hiThereTwo
    return 'Hi there again';  //to be able to use the value of the function use return
}
hiThereTwo(); // "Hi there again"        //

var storedText = hiThere(); // Hi there  // new variable called storedText
storedText; // undefined                 //no value

var storedTextTwo = hiThereTwo();        //place in the function from above passed into the variable
storedTextTwo; // "Hi there again"       //