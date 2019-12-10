"100" + 42; // "10042"  - a string of 100 plus 42-js doesn't know if we are appending on the end of 100 or computation
42 + "100"; // "42100"  - same thing as above, string and number won't work here
            //anytime you have a string and a number it won't work
"100" - 42; // 58
100 + null; // 100      - returns 100 because js sees the null-INSTEAD OF ERROR saw the null it returned the 100
                         // above js performs automatic type casting 
                         // manual type casting below
var ageOne = 12;         // create a variable ageOne and set equal to 12
String(ageOne);          // '12' - call the string function and call ageOne(passing in) returns 12 as a string
ageOne.toString();       // '12' -pass in ageOne as a function argument- then toString (which is a function so you need the parens on the end)

// convert strings into numbers
var ageTwo = '33';       // variable ageTwo -set to eqaul a string of 33
Number(ageTwo);          // 33- using Number
parseInt(ageTwo); // 33  //parseInt-
parseFloat(ageTwo);      // 33  //this returns a (floating) decimal point and regualar integers
+ ageTwo;                // 33-unary operator-converts string into a number (example var foo = + ageTwo)
parseInt('5555555555 is my phone number');     // 5555555555
parseInt('foo 5555555555 is my phone number'); // NaN-not a number-if you start with foo-can't parse into an integer because doesn't start with a number
Number("100") + 42;      // 142 -if you aren't sure what you are getting back use Number and wrap the string in parens 

//boolean's below
Number(true); // 1
Number(false); // 0






















