// toThePowerOf(2, 3) => 8
//reducer process-function is called reduce
const toThePowerOf = (num, exp) => {     // create an arrow function takes in 2 arguments num and the expononet
    const items = Array(exp).fill(num);  //data structure-an array, take the exponent value and fill with the number
                                         //Array(exp).fill(num) creates an array and pre populates it [2, 2, 2]
    const reducer = (accumulator, currentValue) => accumulator * currentValue; //reducer function-descriptive name
                                                                // we have a total and a current value then the arrow function 
                                                                //total times the current value-reducer is a function that takes 2 arguments and multiplies them
    return items.reduce(reducer);        //
  };
  
  toThePowerOf(2, 3); //?
  toThePowerOf(3, 3); //?
  toThePowerOf(4, 2); //?
  toThePowerOf(10, 10); //?
  10 ** 10; //?