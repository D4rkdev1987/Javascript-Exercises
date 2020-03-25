const prettyPrice = (grossPrice, extension) => {   // create a function that takes in 2 args (first gross price and the extension) arrow function
    if (Number.isInteger(extension)) {             // conditional if number isInteger pass in the extension ( is a whole number)
      extension = extension * 0.01;                // reassign extension   extension is equal to extension times 0.1 (pretty)
    }
    return Math.floor(grossPrice) + extension;     // say return Math floor and pass in the gross price and then plus the extension
  };
  
  prettyPrice(2.2, 0.95); //?
  prettyPrice(2.2, 95); //?
  prettyPrice(2.2, 0); //?
  prettyPrice(2.2, 99); //?