//Array Destructuring 
//below is the array
const apiList = [
    'https://api.dailysmarty.com/posts',
    'https://api.github.com/users/jordanhudgens/repos',
    'https://api.github.com/users/jordanhudgens'
  ]
  
  const [posts, repos, profile] = apiList;  // finds first element assigns to posts 2nd to repos and 3rd to profile
  
  console.log(posts, repos, profile);
  console.log(repos);
  console.log(profile);

  //array of links of api endpoints above
  //start off with const then wrap the variables that we want in brackets (posts repos profile) then set it to the apilist
  