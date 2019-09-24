class Instructor {
    constructor({ name, role = "assistant" }) {
      this.role = role;
      this.name = name;
    }
  
    // Instance method
    renderDetails() {
      console.log(`${this.name} - ${this.role}`);
    }
    //////////////////////////////////////////////////////

    // Base case static method
    static helloWorld() {        //static method-helloworld nothing passed in
      console.log('Hi there');
    }
    Instructor.helloWorld(); // "Hi there"// static method does not require instance(instance won't work here)
    //////////////////////////////////////////////////////

    // Static method
    static canTeach(instructor) {         //canTeach can take in a Instructor as an arg
      return (instructor.role === 'classroom'); //return the value -true or false instructor.role === 'if they can teach in a classroom here
    }
  }
   ///////////////////////////////////////////////
  let juniorInstructor = new Instructor({ 'name' : 'Brian' });
  let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });
  
  juniorInstructor.renderDetails(); // "Brian - assistant"
  seniorInstructor.renderDetails(); // "Alice - classroom"
  

  
  // "Brian can teach: false"
  console.log(
    `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
  );
  
  // "Alice can teach: true"
  console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`