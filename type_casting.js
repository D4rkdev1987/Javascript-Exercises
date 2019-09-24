"100" + 42; // "10042"  - a string of 100 plus 42-js doesn't know if we are appending on the end or computation
42 + "100"; // "42100"  - same thing as above,
            //anytime you have a string and a number it won't work
"100" - 42; // 58
100 + null; // 100      - returns 100 because js sees the null
                        // above js performs automatic type casting 
                        // manual type casting below
var ageOne = 12;
String(ageOne);    // '12' - call the string function and call ageOne
ageOne.toString(); // '12' -pass in ageOne as a function argument- then toString
// convert strings into numbers
var ageTwo = '33'; // -set to eqaul a string of 33
Number(ageTwo); // 33
parseInt(ageTwo); // 33 //parseInt 
parseFloat(ageTwo); // 33  //this returns a decimal point and regualr integers
+ ageTwo; // 33-unary operator
parseInt('5555555555 is my phone number'); // 5555555555
parseInt('foo 5555555555 is my phone number'); // NaN-not a number
Number("100") + 42; // 142
//boolean's below
Number(true); // 1
Number(false); // 0






















