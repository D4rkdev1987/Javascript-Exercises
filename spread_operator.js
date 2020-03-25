//syntax for spread operator is three dots and then the word
//
// Combining Arrays
//-shopping cart
let shoppingCart = [345, 375, 765, 123];    //variable called shopping cart and has a number of product ids
let newItems = [98, 123];                   //new variable called new items set equal to new product ids
                                            //push adds new element to the array
shoppingCart.push(...newItems);             //...newItems is the spread operator adds items to the end-spreads them out
console.log(shoppingCart); // [345, 375, 765, 123, 98, 123] //

// Copying Arrays-don't make changes to a data structure                           
const shoppingCart = [345, 375, 765, 123];  
// const updatedCart = shoppingCart.slice()   //only changed the updated cart-create a copy to variable and store it in a cart
const updatedCart = [...shoppingCart];      //place the brackets around and three dots for the spread operator to work
updatedCart.push(5);                        
console.log(updatedCart);                   
console.log(shoppingCart);                  

//function arguments-math library-max-works used by passing it arguments and it will output the top value
//COMBINING ARRAYS
let shoppingCart = [345, 456, 765, 123]; // 4 product id's an array-
let newItems = [98, 123] //how to add this to the shopping cart

//if used
shoppingCart.push(...newItems); ///using the spread operator here and finds the elements in the array and SPREADS the new items in it
console.log(shoppingCart);// returns the products but added the array into the array

//////////////////////////////////////////////////////////////////////
const shoppingCart = [345, 456, 765, 123];
const updatedCart = shoppingCart;// what you thinnk is we are making a copy-
updatedCart.push(5);
console.log(updatedCart)//shopping cart is just passed a reference, still changing the source array (don't want to DO THIS)

/////////////////////////////////////////COPY ARRAYS/////////////////
const shoppingCart = [345, 456, 765, 123];
const updatedCart = shoppingCart.slice();/// using slice here is cutting it out and DOESN"T CHANGE THE SOURCE ARAAY
updatedCart.push(5);
console.log(updatedCart)


const shoppingCart = [345, 456, 765, 123];
const updatedCart = [...shoppingCart];/// using spread operator.. logs what we want
updatedCart.push(5);
console.log(updatedCart)
//////////////////////////////////////////////////////////////////////
//max works by passing a list of arguments
const orderTotals = [1, 5, 1, 10, 2, 3]; //an array of order totals-check which one is the largest
console.log(Math.max(...orderTotals));   //spread operator takes the array and spreads it out and converts into function arguments
//what is going on
// [1, 5, 1, 10, 2, 3]    //started here with array orderTotals
// ...[1, 5, 1, 10, 2, 3] //after spread added to array-JS takes everything inside and spreads it's own set of function arguments
// 1, 5, 1, 10, 2, 3      //six integers



//spread operator to work with object deconstruction
const { starter, closer, ...relievers } = {   //object created here (baseball lineup)add curlybraces-spread operator relievers-any number of relievers
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}
//spread operator places everything else in an object ( object {relief_1: 'Morton', relief_2: 'Gregerson' } )
console.log(starter);
console.log(closer);
console.log(relievers);

