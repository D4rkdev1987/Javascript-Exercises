// 
// an array is a collection of data
// (large number of stings)
// js stores items in an array
// ex(api-js puts in array)
// (analogy grocery store-shopping cart-in js uses arrays)
// you can store array in the variable
//arrays are handy for database queries-data sent as an array
// 
//three ways
//array object
var generatedArray = new Array(3); // [undefined, undefined, undefined] //if you want an array with 3 elements
// generatedArray; generatedArray.lenghth;
var literalArray = [1, 2, 3];  //common way-array liertal syntax-uses the brackets-three items

                    //nested array below       //object below-key value pair
var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }];
// above-for mixed elements data types- combine anything-

//to get things out of arrays below
//getting out is called bracket syntax literArray[0];-prints 1, literArray[1];-prints 2
//complex arrays- mixedArray[2][2];-when you have nested just use double bracket-returns C
//mixedArray- mixedArray[3].name; prints Kristine
//to call a greeting mixedArray[4](); prints Hey there
