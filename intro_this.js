$('.btn-guide').click(function(event) {  // look for button guide then a click handler(handler waits for click)
    event.preventDefault();              //first take the event then preventDefualt(you don't want to go to next page)
    console.log($(this));                //the dollar is jquery then bring in(this)-
});
//jquery is javascript
//building a listener for something to happen (line 1)
//it found the courses in the video-btn-guide-
// 'this' refers to whatever your looking for whatever you click on
// 'this' finds the specific items to work with
// gives you the ability to make your code dynamic
