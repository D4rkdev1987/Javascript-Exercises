//build a class and then a method that alternates which side of an array it pops off


class ArrayPopper {            // create a class called array popper -class can have data inside
    constructor(arr) {         //create a constructor anticipates to have an array
      this.arr = arr;          //then inside the constructor set up the instance variable
      this.atBeginning = true; //then pass in a second value-defualt value(boolean when created it keeps track of it from the beginning of array)
    }
  
    togglePopper() {                             //now create the toggle poopper method with no arguments
      this.atBeginning = !this.atBeginning;      //at beginning-toggles the value being true-whatever at beginning ! reverse it
      return this.atBeginning ? this.arr.pop() : this.arr.shift();  //ternary operator conditional- return this at beginning-if value is true ? perform the task then : not true
    //whenever you call toggle popper I want you to return array pop(last element in array) if false return this.array shift(returns first element array)
    }
  }
  
  const ap = new ArrayPopper([1, 2, 3, 4, 5]);  //call const variable then new arrayPopper and pass in the array
  
  ap.togglePopper(); //? 1 when we create a new array popper it hits the ternary operator-shift(return) first value(array number 1)
  ap.togglePopper(); //? 5 
  ap.togglePopper(); //? 2
  ap.togglePopper(); //? 4
  ap.togglePopper(); //? 3
  ap.togglePopper(); //?