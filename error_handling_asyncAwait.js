async function queryApis() {
    try {                           // say try and wrap all promises in the try and catch block
      const postsPromise = fetch('http://api.dailysmarty.com/posts');
      const posts = await postsPromise.then(res => res.json());
      console.log(posts);
    } catch(err) {                  // say catch and pass in err for the error
      console.log(err);             // now console log the err
      console.log('There was an error with the DailySmarty API');  // console log there was and error with the Api
    }
    //multiple try catch blocks
    try {                            // say try and wrap all promises in the try and catch block
      const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
      const repos = await reposPromise.then(res => res.json());
      console.log(repos);
    } catch(err) {                   // say catch and pass in err for the error
      console.log(err);              // now console log the err
      console.log('There was an error with the GitHub API');     // console log there was an error with the Github api
    }
  }
  
  queryApis();

  // using multiple try catch blocks
  // use if you want to have the process stop and not continue on!
  //https://bottega.devcamp.com/12/guide/1348