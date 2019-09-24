//check for Data Types
//case statemtn -ability to build your own scenarios
var dataPoint = {};  //create variable dataPoint with an empty string
            // remember typeof - lets you know what type of data type it is
switch (typeof dataPoint) {   //switch then put inside whatever value you want
  case "string":              //case string-anything inside returns the type
    console.log("It's a string");
    break;                   //found case and scenario-skip everything else-to end here
  case "number":             //case for number-everything inside will out number
    console.log("It's a number");
    break;                  //-to end here
  case "boolean":
    console.log("It's a boolean");
    break;
  default:                  //default-ex-error message
    console.log('No matches');
}