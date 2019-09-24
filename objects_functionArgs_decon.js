const user = {                   //create an object called user
    name: 'Kristine',            //keys -name and email
    email: 'kristine@devcamp.com'//keys
  }
  
  const renderUser = ({ name, email }) => {    //arrow syntax to create a function called renderUser-now pass in an object
                                               //has to say name and email keys from the object
    console.log(`${name}: ${email}`);          //string interpolation in the console log
  }                                            
  
  renderUser(user);    //just render user and then user itesef-it passes in the entire object