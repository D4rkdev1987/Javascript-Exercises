async function queryApis() {                 //async function then function declaration queryApis no args
    const postsPromise = fetch('https://api.dailysmarty.com/posts');  //promises--fetch method-const variable fetching the dailysmarty api
    const posts = await postsPromise.then(res => res.json()); //variable post equals await then call then and pass in a function-response arrow function json(to tell it what to return and how)
    console.log(posts);                      
    //second promise below
    const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos'); // fetch everything from the github repo
    const repos = await reposPromise.then(res => res.json());                       // variable repos equals await then call reposPromise then and pass in a function-response arrow function json(to tell it what to return and how)
    console.log(repos);
  }
  //above would return api posts and then AFTER should return the repos-and would return everything together because it is wrapper in the async function queryApis
  queryApis();       //call the function here
  // returns posts first then the repos
  //https://bottega.devcamp.com/12/guide/1347