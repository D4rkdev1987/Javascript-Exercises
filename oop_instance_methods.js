class Instructor {
    constructor({ name, role = 'assistant' }) { //role with default value as assistant
      this.name = name;                         
      this.role = role;                         //this now finishes setting up the attributes
    }
  
    renderDetails() {  //instance method- no arguments taken in
      console.log(`${this.name}: ${this.role}`); //console log-string interpolation-must use 'this'//prints out details of instructor
    }
  }
  
  const jon = new Instructor({name: 'Jon Snow'});
  const brayden = new Instructor({name: 'Brayden', role: 'teacher'});
  jon.renderDetails(); //parens are needed because you call it like a function-prints the default assistant
  brayden.renderDetails(); //prints Brayden teacher

  //instance methods add behavior-you can add to classes-whatever you perform, then object can have instance methods called on it

  //what we did above
  //we added instance--which are functions within a class-- ways to add behavior, and you can add them to your classes
  //in the constructor function we added a role with a default value as assistant--auto default
  //then we said this.role = role which sets the attributes up

  //now we are creating the instance method and not having any arguments in it
  //simply console log and use string interpolation with this.name and this.role --will print out the details for instructor MUST USE THIS
    //(when you instantiate a new instrcutor it goes from the call to the object constructor-then redirected to the values--why this is important)
  //now just say jon then renderDetails just like you are calling a function