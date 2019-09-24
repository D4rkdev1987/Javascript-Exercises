async function queryApis() {
    try {   //first is a try block-then wrap all 
      const postsPromise = fetch('http://api.dailysmarty.com/posts');
      const posts = await postsPromise.then(res => res.json());
      console.log(posts);
    } catch(err) {       //then the catch the error
      console.log(err);
      console.log('There was an error with the DailySmarty API');// put more information which will tell you the error
    }
       //mutiple try catch block below
       //same as below
    try {
      const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
      const repos = await reposPromise.then(res => res.json());
      console.log(repos);
    } catch(err) {
      console.log(err);
      console.log('There was an error with the GitHub API');// put more information which will tell you the error
    }
  }
  
  queryApis();


