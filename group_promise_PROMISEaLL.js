const greeting = new Promise((resolve, reject) =>{  //first promise is const greting new Promise add respve and reject arrow function
    resolve('Hi there');                    //it works
    reject('Oops, bad greeting');           //doesn't work
  });
  
  const updateAccount = new Promise((resolve, reject) => {  //updateAccount promise
    resolve('Updating last login...');             //it works
    reject('Error updating account with login.');  //doesn't work
  });
  //web or mobile app greeting example for login above
  const loginActivities = Promise.all([greeting, updateAccount]);  // set it equal to Promise.all and pass in an array of promises
  
  loginActivities.then(res => {               //iterate over above-call then directly on it(promise all returns a promise itself)
                                              //then response arrow function-
    res.forEach(activity => {                 //get back the response from the promise then pass in an arrow function
      console.log(activity);                  //now you have access to it by caling activity
    })
  })

  //foreach above gives you ability to iterate of the array
  //res contains the array