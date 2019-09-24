//Promises
//communicating with outside api's
//promises allows you to go to page show page and show things when outside services when is available

let sleepyGreeting = new Promise((resolve, reject) => {  //let sleeping greeting creating a new Promise and storing in sleepy greeting and 2 arguments resolve and reject
    setTimeout(() => {          //arrow function setTimeout pass it in a code block
      resolve('Hello....')      //call resolve-whatever in here will run if sleepyGreeting works
    }, 2000);                   //2 seconds then returns hello
  
    setTimeout(() => {          
      reject(Error('Too sleepy...'))     //return Error(module in js and takes in an arg for our case it says Too Sleepy)
    }, 2000);                            //2 seconds and returns Too sleepy
  });
  
  sleepyGreeting               //now call sleepyGreeting like a fucntion-then use multiple lines        
    .then(data => {            //then is a reserved word and promise expects-then data with a code block and function
                               //when you call sleepy greeting THEN return-data is in this case Hello
        console.log(data);       //IF EVERYTHING GOES RIGHT IT GETS THE DATA AND WE HAVE ACCESS
    })
    .catch(err => {            //catch is mapped to reject-it tries to catch the err and use an arrow function
      console.error(err);      
    });

    

