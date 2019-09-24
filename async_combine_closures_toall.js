const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('User logged in...');
      }, 4000);
    });
  }
  
  const updateAccount = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Updating last login...');
      }, 2000);
    });
  }
  //closures-simply a function that can be wrapped in a variable and passed into another function
  async function loginActivities(login, updateAccount) {  //first pass in Login and the updateAccount
    const returnedLogin = await login; //treating like a normal argument passed in with the login
    console.log(returnedLogin);
  
    const returnedUpdateAccount = await updateAccount;
    console.log(returnedUpdateAccount);
  }
  //async wraps the entire process-it won't show anything on the screen until all is complete-then will print both at the same time
  loginActivities(login(), updateAccount()); //pass in the acual function with parens no arg