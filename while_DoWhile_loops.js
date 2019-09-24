//WHILE
//DO WHILE

var players = [                 //
    'Altuve',                   //
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  var i = 0;                   // first declare an interator variable
  while (i < players.length) { // now while loop while i is less than players.length
    console.log(players[i]);   // then conole log the players and the indiex(i)
    i++;                       // manually create the incrementor i++(everytime it goes through loop it increases)
  }
  
  var i = 21;                  
  do {                         // when you have do here - it gives a diferent-do  loop condition is checked after
    console.log(players[i]);   
    i++;                       
  } while (i < players.length) // place while loop at the end

  //do while goes through program-do while performs atleast one time-game example-process runs one time use do while loop