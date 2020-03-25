const login = () => {                             ////const variable login stores the arrow function no args
    return new Promise((resolve, reject) => {     ////return a promise takes in resolve and reject args
      setTimeout(() => {                          ////setTimeout arrow function passed in
        resolve('User logged in...');             ////return the resolve --a string User logged in(real world would communicate with db and return data)
      }, 4000);                                  
    });
  }
  const updateAccount = () => {                   ////variable updateAccount stores the arrow function no args
    return new Promise((resolve, reject) => {     ////return the new Promise passes in resolve and reject
      setTimeout(() => {                          
        resolve('Updating last login...');        //// updating last login (updating account function)
      }, 2000);
    });
  }
  //closures=are simply a function that can be wrapped in a variable and then can be passed into another function
  async function loginActivities(login, updateAccount) {  // created the arguments-login and then updateAccount
    const returnedLogin = await login;                    // remove parens because it's treated as an arg passed in
    console.log(returnedLogin);                           
  
    const returnedUpdateAccount = await updateAccount;    //// variable returnedUpdateAccount and say await updateAccount--took off parens in this line for update
    console.log(returnedUpdateAccount);                   //// now console log the returnedUpdateAccount
                                                          //// this will print the login first and then the updateAccount
  }
  //async wraps the entire process instead of 2 seconds-it won't show anything on the screen until all is complete-then will print both at the same time
  loginActivities(login(), updateAccount()); //when you pass in login you pass in the acual function with parens no arg

  // https://bottega.devcamp.com/12/guide/1346