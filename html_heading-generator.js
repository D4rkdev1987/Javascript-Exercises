const headingGenerator = (title, typeOfHeading) => {       // create a function heading generator an arrow function and have a title and typeofHeading as args
    return `                                               
      <h${typeOfHeading}>${title}</h${typeOfHeading}>
    `
  }
  // above you want to return a string
  // say h (then string literals) use the dollar sign and pass in typeofHeading then the same with title...then close it off with </h and the typeofHeading
  
  headingGenerator('Greetings', 1); // now call the function here  this will return <h1>Greetings</h1>