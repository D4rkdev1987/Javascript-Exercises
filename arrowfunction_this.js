//Arrow function-using this

function Invoice(subTotal) {
    this.taxRate = 0.06;
    this.subTotal = subTotal;
 //object with a taxrate 
    this.total = setInterval(() => {
      console.log((this.taxRate * this.subTotal) + this.subTotal);
      // console.log(this);
    }, 2000);
  }
  
  const inv = new Invoice(200);
  inv.total();

  //why arrow functions are import-invoice function-arrow functions with 'this' keyword
  //create a base function called invoice-then create a tax rate assigned to this(tax rate is a keyvalue pair-object)
  //function this.total-then the tool setInterval(takes in two arguments)
  //after the setInterval create an arrow function
  