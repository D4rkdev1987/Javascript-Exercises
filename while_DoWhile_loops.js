//WHILE
//DO WHILE

var players = [                 // players array
    'Altuve',                   
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  var i = 0;                   // first declare an interator variable call it what ever you want
  while (i < players.length) { // now... while loop--> while i is less than players.length (similar to conditional in for loop)
    console.log(players[i]);   // then console log the players and then grab the index indiex(i)
    i++;                       // manually create the incrementor..--->  i++(everytime it goes through loop it increases, it checks if i is less than players length)
  }
  
  var i = 21;                  
  do {                         // when you have do here - it gives a diferent set of behavior-reason for-condition is checked after the iteration
    console.log(players[i]);   
    i++;                       
  } while (i < players.length) // place while loop at the end

  //do while goes through program first
  //-do while performs atleast one time---game example-you want process atleast runs one time then use do while loop