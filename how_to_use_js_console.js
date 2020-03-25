const allTopics = document.querySelectorAll('.topics')

allTopics

copy(allTopics)

const arrtopicssample = Array.prototype.slice.call(allTopics);

arrtopicssample

arrtopicssample[0]

arrtopicssample[0].textContent

const sampleTopicList = arrtopicssample.map(e => e.textContent)

copy(saampleTopicList)

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