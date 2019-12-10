let sleepyGreeting = new Promise((resolve, reject) => {   // greeting object now pass in the promise---new promise then it takes 2 args(resolve reject) now the arrow function
    setTimeout(() => {                              // now code block--setTimeout function-use an arrow function
      resolve('Hello....')                          // call resolve-anything inside will run if successful
    }, 2000);                                       // 2000 = 2 seconds will return hello
                                                    // if api doesn't work
    setTimeout(() => {                              // if not successful
      reject(Error('Too sleepy...'))                // now use reject and pass in Error which is a reserved function and takes in an arg--for this Too sleepy
    }, 2000);                                       // 2 seconds
  });
  
  sleepyGreeting                                    // now we call sleepy greeting liek a function
    .then(data => {                                 // then(reserved word expected by promise) data is a specific element-whenever promise comes back, what is returned is the data             
      console.log(data);                            // now we console log the data
    })                                              // now if it goes wrong
    .catch(err => {                                 // catch speaks to reject-which catches the err
      console.error(err);                           // then console log the err
    });

    //a promise allows you to call the api and show the page-and when items from API show it will populate(if there is an error you tell it what to return)