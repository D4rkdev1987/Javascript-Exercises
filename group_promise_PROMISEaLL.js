const greeting = new Promise((resolve, reject) =>{  //first promise is const greting new Promise add resolve and reject arrow function
    resolve('Hi there');                    //it works hi there
    reject('Oops, bad greeting');           //doesn't work oops bad greeting
  });
  
  const updateAccount = new Promise((resolve, reject) => {  //updateAccount promise
    resolve('Updating last login...');                      //it works
    reject('Error updating account with login.');           //doesn't work
  });
  //process web or mobile app greeting example for login above --rendering out a greeting to user

  const loginActivities = Promise.all([greeting, updateAccount]);  // loginActivites set it equal to Promise.all and pass in an array of promises(greeting and updateAccount)
  
  loginActivities.then(res => {     //iterate over above-call then directly on it(promise all returns a promise itself) then(res)response arrow function-returns data for that promise
    res.forEach(activity => {       // the res then call for each on it activity then pass the arrow function
      console.log(activity);        //now you have access to it so console log it and call activity
    })
  })

  //foreach above gives you ability to iterate of the array
  //res data we get back-contains the array
  //activity is the iteration variable