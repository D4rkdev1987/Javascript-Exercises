//fucntion to test if values of 2 objects are equal
//below function works for shallow work
const isEqual = (obj1, obj2) => {        //arrow function const is equal to obj 1 and obj 2  
    const obj1Keys = Object.keys(obj1);  // set it equal to Object class keys
    const obj2Keys = Object.keys(obj2);  //same as above
  
    if (obj1Keys.length !== obj2Keys.length) {  //test conditional-same number of keys-if length isn't equal
      return false;                             //  return false
    }
    //now check the values
    for (let objKey of obj1Keys) {              //for of loop- let variable-objkey of obj1keys
      if (obj1[objKey] !== obj2[objKey]) {      // conditonal here- if obj1(pass in key name)
        return false;
      }
    }
  
    return true;
  };
  
  const obj1 = {           
    name: "Kristine", //keys below
    age: 13,
    favorites: {      //nested object
      food: "Pizza",
      vacation: "Disneyland"
    }
  };
  
  const obj2 = {
    name: "Kristine",
    age: 13,
    favorites: {
      food: "Pizza",
      vacation: "Disneyland"
    }
  };
  
  obj1 == obj2;        //object 1 is equal to obj 2
  isEqual(obj1, obj2); //function called isEqual and takes 2 objects