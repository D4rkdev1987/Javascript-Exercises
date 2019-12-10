//loop over an object
//ex-api call pulling tweets-sent in an object form-below is how to iterate over

var student = {                //  object student with key value pairs inside
    name: 'Kristine',          //
    age: 12,   
    city: 'Scottsdale'
  };
  
  for (var key in student) {                  // say for var (always put var or it will be global remember)
    console.log(key + ": " + student[key]); // print key plus (which key and value), then student(bracket notattion) pass in key
                                              //above-brackets then key very important NOT student.key
  }

  //instructions
  //created the Object
  //then say for and var key in student-DON"T FORGET VAR
  // inside of it you want to print out the key then => to show which key is associated, then student and calling the key in brackets
  //
  // name => kristine
  // age => 12
  // city => Scottsdale