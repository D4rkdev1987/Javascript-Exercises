//Guide to Adding Default Object Values to JavaScript Function Arguments 
//openGraph is used to tie in links and data
const blog = {                  //create object names blog and pass in title and summary
  title: 'My great post',       
  summary: 'Summary of my post' //remember if there isn't a summary here it will use the default 'A daily smarty post'
}

const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => { 
    // opengraph-links to pass in data to twitter ect.-inside arrow function pass in title 
    // then pass in sumamry and then an equals and pass in a string 
    //if we pass in regular blog object, then the value for sumamry will override the defualt
  console.log(`
    og-title=${title}         
    og-description=${summary} 
  `);
   //for above console log
   //opengraph(og) title using backticks and pass in the title with string interpolation
   //same syntax as title except use desciption- with the summary
}

openGraphMetadata(blog); //pass in the blog object here