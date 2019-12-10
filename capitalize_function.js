const toCapital = str => { //  fucntion takes in a string as an arg and it's a arrow function
    const words = str.split(" "); // variable words set equal to string.split and the argument is where you want to split it
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" "); 
    //above code-return words and map over and word takes a function-say map(loops through) then grab the first element of the word
    //above cont.- then change to upper case, then add on the rest of the word and use slice and pass in 1(will start whatever index you pass in and return the rest of the string)
    //above cont.-lastly add the join function to return as a string not an array
  };
  
  const shortStr = "Hi there"; //
  toCapital(shortStr); // Hi There //
  
  const longStr = "the quick brown fox jumped over the lazy dog"; //
  toCapital(longStr); // The Quick Brown Fox Jumped Over The Lazy Dog //