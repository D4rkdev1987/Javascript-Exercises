const removeFirstAndLast = arr => {  // create the arrow function takes in an arr as an argument
    if (arr.length >= 3) {         //  if the array length is greater than or equal to 3
      return arr.slice(1, -1);     // return the array and then use the slice function 1, -1 (starts at index of 1 then goes to end of array and removes that element)
    } else {
      throw "You need at least three elements in the array"; // throw the error that says " "
    }
  };
  //above is adding a validator if it doesn't work it will throw an error
  
  removeFirstAndLast([1, 2, 3, 4]); //? returns [2, 3, 4]
  removeFirstAndLast(["<h1>", "Some content", "</h1>"]); //? returns [ "some Content"]
  removeFirstAndLast(["Some content", "</h1>"]); //? returns the error because there aren't 3 elements here