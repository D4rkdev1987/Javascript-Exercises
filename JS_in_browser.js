function fullName(first, last) {  // function called fullName pass in first and last as arguments here
    return `${first} ${last}`;    // return the first name and then the last
  }
  
  fullName('Kristine', 'Hudgens');  // call fullName and pass in the strings with the names
  
  
  newFullName = (first, last) => {  // another functionarrow function pass in first and last then the arrow
    return `${first} ${last}`;      // use backticks and then the string interpolation
  }
  
  newFullName('Kristine', 'Hudgens');  // call newFullName and pass in the names as strings

  