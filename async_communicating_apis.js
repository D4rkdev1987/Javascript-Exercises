async function queryApis() {                 //async function then function declaration no args
    const postsPromise = fetch('https://api.dailysmarty.com/posts');  //fetch method-const variable fetching the dailysmarty api
    const posts = await postsPromise.then(res => res.json()); //variable post equals await then call then and pass in a function-response arraw function json
    console.log(posts);
  
    const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
    const repos = await reposPromise.then(res => res.json());
    console.log(repos);
  }
  //above would return api posts and then AFTER should return the repos
  queryApis();