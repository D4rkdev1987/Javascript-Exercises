// FOR LOOP
// FOR IN LOOP
// FOR EACH LOOP

var players = [      //players array of strings here
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  for (player in players) {         //for in loops- interator variable next-common to use singular player in players
    console.log(players[player]);   //then console.log (player represents the index in the array players)
                                    //dont have to place in conditions or incrementor-above only loops over what is in the collection
  }
  
  for (var i = 0; i < players.length; i++) {   //variable i and set to zero-i is less than players(players array and know we can call length -loop through array until i is greater than length)
                                               // i changes using i++ i starts at 0 then keeps going until it hits the 4 
                                                
    console.log(players[i]);                   // in curly brackets place the console.log i represents the index
  }                                            // if <= will return one greater and return undefined hence why we just use < in the incrementor
  
  players.forEach(function(element) {  // call it players-forEach inside then (passing functions around) now the function and takes in an argument 
    console.log(element);              //for each is new-function being called on a collection
  });


