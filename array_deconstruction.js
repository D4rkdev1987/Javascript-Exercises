//Array Destructuring 
//below is the array
const apiList = [
    'https://api.dailysmarty.com/posts',
    'https://api.github.com/users/jordanhudgens/repos',
    'https://api.github.com/users/jordanhudgens'
  ]
  
  const [posts, repos, profile] = apiList;
  
  console.log(posts);
  console.log(repos);
  console.log(profile);

  //array of links of api endpoints above
  //start off with const then wrap the variables that we want in brackets (posts repos profile) then set it to the apilist
  