//promises to communicate with ouside services
//asycronis behavior --ability to call api without stopping the api for the data flow
//store in a const variable

//each console log with print out in the JS console----->
//Starting fetch call
//after fetch call
//promise>
//after program has run

console.log('Starting fetch call');                               // console log for starting the fetch call
const postsPromise = fetch('https://api.dailysmarty.com/posts')   //created const variable called post promise-next call fetch(built in promise gives a promise back) one arg the api
console.log('After fetch call');                                  // then console log after the fetch call
console.log(postsPromise);                                        // then console log the actual fetch call
console.log('After program has run');                             // then console log the After program runs

postsPromise                                         
    .then(data => data.json())            // .then(expects) data with an arrow function now say data.json--which converts the data into json data
    .then(data => {                       // now add a then data with an arrow function to get to posts now
        data.posts.forEach((item) => {    // now say data.posts(parsing json data-because there was a post object) now use a forEach loop which takes the item which we iterate over
            console.log(item.title);      // now console log the item.title(access to the array which has a title-iterating over above)
        });                                
    })
    .catch((err) => {                     // this part is for if it gets rejected and we need to pass in the error
        console.log(err);                 // just console log what ever the error is here
    })                                    