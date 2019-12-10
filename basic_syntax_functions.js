function hiThere () {         //say function and then what you want to call it-then put perens-this one has no arguments
    console.log('Hi there');  //then inside of the curly brackets place a console.log saying hi there
}
hiThere(); // Hi there        //to print it out call hiThere function with open close perens
                              //void function-function runs but doesn't return anything back-process starting a server or something(just example)
function hiThereTwo() {       //new function names hiThereTwo no arguments
    return 'Hi there again';  //say return now -to be able to use the value of the function use return
}
hiThereTwo(); // "Hi there again"        //

var storedText = hiThere();              // Hi there  // new variable called storedText function
storedText; // undefined                 //no value placed in the variable storedText

var storedTextTwo = hiThereTwo();        //place in the function from above passed into the variable
storedTextTwo; // "Hi there again"       //because there is a return not a console log like in the first example above it will store it and give you ability to print it out