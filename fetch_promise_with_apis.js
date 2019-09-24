//promises to communicate with ouside services
//store in a const variable

console.log('Starting fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts')  //variable namd postsPromise -promise built in fetch
console.log('After fetch call');
console.log(postsPromise);
console.log('After program has run');

postsPromise
         //.then(data => console.log(data));  // this will return the headers and status 200 that things worked
    .then(data => data.json())            //converting from a promise and returning json
    .then(data => {
        data.posts.forEach((item) => {
            console.log(item.title);
        });                       //to parse json data in JS   
    })
    .catch((err) {
        console.log(err);
    })//for an error

//asycronis behavior
//each console log with print out in the JS console----->

//Starting fetch call
//after fetch call
//promise>
//after program has run
//open the promise in the console-returns the promise object for it 