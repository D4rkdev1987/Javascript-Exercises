const login = () => {                          //const variable login stores the arrow function no args
    return new Promise((resolve, reject) => {  //return a promise takes in resolve and reject args
      setTimeout(() => {                       //setTimeout arrow function passed in
        resolve('User logged in...');          //return the resolve --a string User logged in(real world would communicate with db and return data)
      }, 2000);
    });
  }
  
  const updateAccount = () => {                //variable updateAccount stores the arrow function no args
    return new Promise((resolve, reject) => {  //return the new Promise passes in resolve and reject
      setTimeout(() => {                       //
        resolve('Updating last login...');     // updating last login (updating account function)
      }, 2000);
    });
  }
  
  async function loginActivities() {            // start with async then say function loginActivities
    const returnedLogin = await login();        // inside store a variable returnedLogin inside say await login(this calls login function-it will stop everything until login)
    console.log(returnedLogin);                 // now console log the returnedLogin     
  
    const returnedUpdateAccount = await updateAccount();      // variable returnedUpdateAccount and say await updateAccount
    console.log(returnedUpdateAccount);                       // now console log the returnedUpdateAccount
  }                                             // this will print the login first and then the updateAccount
  
  loginActivities();                            // call the function loginActivities

  //this is great for callback
  //why the above is best case using aysnc and await

  //exmaple
  //user login system
  //verify credentials
    //redirect to dashboard page
        //update the db account
            //Api calls to bring user data