                                     //Document object model-DOM
const user = {                       // variable user -plain object
    name: 'Kristine',                // keys
    email: 'kristine@devcamp.com',   
    favorites: [
      'Chipotle',
      'Chik fil a'
    ]
  }
  
  user.email              // to see what the user looks like(email)
  user.favorites[1]      
  
  document                // returns a document object-takes all HTML code in
  
  document.location.href  // ocation-attribute  - href gives you URL
  
  // On dailysmarty
  document.location.protocol  // .protocol gives you the http
  
  // On wsj
  document.location.protocol  // https:  is returned
  
  document.body.parentElement // the body selects the body tag-parentElement selects the entire HTML document
  
  document.getElementsByClassName('topics')   // pass in the class name topics-it returns the collection of topics
                                                // brackets mean an array of topics
  document.getElementsByClassName('topics')[2] // to select the elemnt with the id of 2
  
  document.getElementsByClassName('topics')[2].children  // to get more detailed-use .children a nested array is returned
  
  document.getElementsByClassName('topics')[2].children.length  //length tells you how many elements are there
  
  document.getElementsByClassName('topics')[2].children[0].text // gives you the first link and you can grab the .text it returns the text