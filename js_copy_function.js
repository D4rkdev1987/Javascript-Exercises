const allTopics = document.querySelectorAll('.topics') // create a variable and then use the selectorAll query selector and call the topics

allTopics  // now call allTopics returns a nodelist

copy(allTopics) // now use the copy function and call allTopics-returns an object with key value pairs

const arrtopicssample = Array.prototype.slice.call(allTopics); // array protoype(array class in js) say const use array prototype and use slice and then callallTopics

arrtopicssample //
arrtopicssample[0] // grab the first element by calling the zeroith index 
arrtopicssample[0].textContent // now grab the actual text content here using .textContent
//convert array belwo
const sampleTopicList = arrtopicssample.map(e => e.textContent) // variable set equal to arrtopic-then use map(an array is the object) pass in e with an arrow function and use the textContent

copy(saampleTopicList) //
//BELOW
/*
[
  "RUBY ON RAILS",
  "VIM",
  "VIM",
  "VIM",
  "VIMCTAGS",
  "VIMTUTORIAL",
  "LINUXZSHELL",
  "VIMWINDOWS",
  "TMUXVIMPATHOGEN",
  "LINUXUNIX",
  "RUBY ON RAILSAWS",
  "CODINGRUBY ON RAILSTUTORIALJQUERYJAVASCRIPT",
  "RUBY ON RAILSROUTING",
  "MACHINE LEARNING",
  "RUBY ON RAILS",
  "RUBY ON RAILSBOOTSTRAPBUG FIXES",
  "TUTORIALMACHINE LEARNING",
  "AWSTUTORIALLEXCHAT BOTMACHINE LEARNING",
  "RUBY ON RAILSACTIONCABLE",
  "JWTRUBY ON RAILS"
]
*/