const login = () => {                          //const variable stores the arrow function no args
    return new Promise((resolve, reject) => {  //return a promise takes in resolve and reject arg
      setTimeout(() => {                       //setTimeout arrow function
        resolve('User logged in...');          //return the resolve a string User logeed in(would communicate with db and return data)
      }, 2000);
    });
  }
  
  const updateAccount = () => {                //variable updateAccount stores the arrow function no args
    return new Promise((resolve, reject) => {  //return the new Promise passes in resolve and reject
      setTimeout(() => {                       //
        resolve('Updating last login...');     //
      }, 2000);
    });
  }
  
  async function loginActivities() {            //start with async before function declaration
    const returnedLogin = await login();        //then inside store a variable inside that say await login-this calls login function, waits for login is completed first
    console.log(returnedLogin);                 
  
    const returnedUpdateAccount = await updateAccount(); 
    console.log(returnedUpdateAccount);                  
  }
  
  loginActivities();

  //this is great for callback
  //why the above is best case using aysnc and await
  //exmaple
  //user login system
  //verify credentials
    //redirect to dashboard page
        //update the db account
            //Api calls to bring user data