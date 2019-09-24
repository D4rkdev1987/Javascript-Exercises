const getAverage = arr => {
    //sum values from array
    //get length of array
    //then divide the length(array sum) by the length
    const reducer = (total, currentValue) => total + currentValue;
    //const sum = arr.reduce(reducer)--variable he used in the video
    const total = arr.reduce(reducer);
    return total / arr.length;
  };
  
  const arr = [1, 2, 3, 4, 5, 6];  
  getAverage(arr);


//to take a values add them up and then divide them(average is total up values then divide sum by total number elements)

//create a function called getAverage and takes in a single variable as an array
//next make an arrow function 
//reduce-function specific to js
//then const reducer(takes in two arguments) set it equal to total, currentValue -> value 
//create a new variable called sum and set equal to arr.reduce-function avaialable to array
///////reduce above its argument is a function so you have to pass it a function-up to 4 arguments
///////when you pass in reduce first argument is acccumilator expects value second is what you are working with
//for the length of array
