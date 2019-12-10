//Arrow function-using this-using this syntax because they are objects
//tax rate is something built in

function Invoice(subTotal) {    //base function called invoice
    this.taxRate = 0.06;        // tax rate assigned to "this" 
    this.subTotal = subTotal;   // add subtotal attribute
 //object with a taxrate 
    this.total = setInterval(() => {     //function expression this.total set equal to setInterval-then create a function inside(set interval takes in 2 args)
      console.log((this.taxRate * this.subTotal) + this.subTotal); // multiply the tax rate by the subtotal then add this subtotal
      // console.log(this);
    }, 2000);
  }
  
  const inv = new Invoice(200);  // const variable inv and create the new invoice
  inv.total();

  //why arrow functions are import-invoice function-arrow functions with 'this' keyword
  //create a base function called invoice-then create a tax rate assigned to this(tax rate is a keyvalue pair-object)
  //function this.total-then the tool setInterval(takes in two arguments)
  //after the setInterval create an arrow 
  
  