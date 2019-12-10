const user = {                   //create an object called user
    name: 'Kristine',            //keys -name and email
    email: 'kristine@devcamp.com'
  }
  
  const renderUser = ({ name, email }) => {    //arrow syntax to create a function called renderUser-inside the first argument now pass in an object
                                               //has to say name and email keys from the object-for the deconstruction-runs check to find those attributes
    console.log(`${name}: ${email}`);          //inside of the curly brackets string interpolation in the console log
  }                                            
  
  renderUser(user);    //just render user and then pass in the user itesef-it passes in the entire object