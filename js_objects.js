//objects gives you the ability to query data-basically making a blueprint
//ability to call using decimal points console.log(user.name)
//gives you ability to call multiple values
// using decimal type notiation gives you ability to call -  
//( console.log(user.name) )



var user = {          //use curly braces-variable is user 
    name: 'Kristine',  //key value pairs-name age and city and don't forget the comma to add more key value pairs
    age: 12,
    city: 'Scottsdale',
    grades: {         //nested objects -objects in objects-grades is a key
      math: 90,       //key value pairs
      science: 80,
      languageArts: 100
    }
  }
    //to get the grades use 
        //console.log(user.grades)
    //to grab the subject 
        //console.log(user.grades.math)

  user.age = 13;           
  user.grades.coding = 95; // adds a new key value pair inside grades object

  