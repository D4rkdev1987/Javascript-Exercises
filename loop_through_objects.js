//loop over an object
//ex-api call pulling tweets-sent in an object form-below is how to iterate over

var student = {                //  object student
    name: 'Kristine',          //
    age: 12,   
    city: 'Scottsdale'
  };
  
  for (var key in student) {                  // say for var (always put var or it will be global remember)
    console.log(key + " => " + student[key]); // print key plus (which key and value), then student(bracket notattion) pass in key
                                       //above-brackets then key 
  }