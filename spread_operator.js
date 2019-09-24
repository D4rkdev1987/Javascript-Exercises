//syntax is three dots and then the word
//
// Combining Arrays-shopping cart
let shoppingCart = [345, 375, 765, 123];    //variable called shopping cart and has a number of product ids
let newItems = [98, 123];                   //new variable called new items set equal to new produt ids
                                            //push adds new element to the array
shoppingCart.push(...newItems);             //...newItems is the spread operator adds items to the end-spreads them out
console.log(shoppingCart); // [345, 375, 765, 123, 98, 123] //

// Copying Arrays-don't make changes to a data structure                           
const shoppingCart = [345, 375, 765, 123];  
// const updatedCart = shoppingCart.slice()   //only changed the updated cart-create a copy/change to variable
const updatedCart = [...shoppingCart];      //place the brackets around and three dots for the spread operator to work
updatedCart.push(5);                        
console.log(updatedCart);                   
console.log(shoppingCart);                  

//function arguments-math library-max-works used by passing it arguments and it will output the top value
const orderTotals = [1, 5, 1, 10, 2, 3]; //an array of order totals-check which one is the largest
console.log(Math.max(...orderTotals));   //spread operator takes the array and spreads it out and converts into function arguments

// [1, 5, 1, 10, 2, 3]    //started here
// ...[1, 5, 1, 10, 2, 3] //after spread added-JS takes everything inside and spreads it's own set of elements
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