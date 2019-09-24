//objects gives you the ability to query data
//ability to call using decimal points console.log(user.name)
//gives you ability to call multiple values
//


var user = {          //use curly braces 
    name: 'Kristine',  //key value pairs-name age and city
    age: 12,
    city: 'Scottsdale',
    grades: {         //nested objects -objects in objects-grades is a key
      math: 90,       //key value pairs
      science: 80,
      languageArts: 100
    }
  }
                    //to get the grades use console.log(user.grades)
                    //to grab the subject console.log(user.grades.math)

  user.age = 13;
  user.grades.coding = 95; // adds a new key value pair to grades