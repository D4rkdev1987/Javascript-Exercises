//Guide to Adding Default Object Values to JavaScript Function Arguments 

const blog = {                  //create object names blog and pass in title
  title: 'My great post',       
  summary: 'Summary of my post' //remember if there isn't a summary here it will use the default 'A daily smarty post'
}

const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => { 
    // opengraph-links to pass in data to twitter ect.-inside arrow function pass in title 
    // then pass in sumamry and then an equals and pass in a string 
    //if we pass in reular blog object will override the defualt
  console.log(`
    og-title=${title}         
    og-description=${summary} 
  `);
   //for above console log
   //opengraph title using backticks and pass in the title with string interpolation
   //same syntax as title- with the summary
}

openGraphMetadata(blog); //pass in the blog object here