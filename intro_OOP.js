class Instructor {             //instructor class 
    constructor({ name }) {    //build a cunstructor function-role is to run processes everytime a new instructor is created
                               //pass in name as an object ({ name })
        this.name = name;      //say this.name = name -we have name passed in-you can add it in as part of the class
                               //this.name references the instance of instructor-this-you want to store what ever name is passed in with the object
    }
  }
  //in OOP a class is a blueprint remember-'instantiation'-below tell class and create something that matches
  const jon = new Instructor({ name: 'Jon Snow' }); //variable named Jon set equal to new instructor- then a new object
  // console.log(jon); prints out an object { name: "Jon Snow"} -Jon is an instance of instructor
  console.log(jon.name);                            //prints out "Jon Snow"