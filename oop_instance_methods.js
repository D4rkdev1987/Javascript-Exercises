class Instructor {
    constructor({ name, role = 'assistant' }) { //role with defaukt value as assistant
      this.name = name;                         
      this.role = role;                         //this now finishes setting up the attributes
    }
  
    renderDetails() {  //instance method- no arguments taken in
      console.log(`${this.name}: ${this.role}`); //console log-string interpolation-must use 'this'
    }
  }
  
  const jon = new Instructor({name: 'Jon Snow'});
  const brayden = new Instructor({name: 'Brayden', role: 'teacher'});
  jon.renderDetails(); //parens are needed because you call it like a function-prints the default assistant
  brayden.renderDetails(); //prits Brayden teacher
  //instance methods add behavior-you can add to classes-whatever you perform then object can have instance methods called on it