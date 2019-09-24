//calculate batting average

function battingAverage () {    // function declaration takes no arguments
    var hits = 100;             //local variables-set hits to 100
    var atBats = 300;           // set atBats to 300
  
    return {                    //a closer is being able to wrap behavior in a function and able to use it and call it
      getCurrentAverage: function () {       //returns an object on return-functions caled methods-getCyrrentAverage
        return (hits/atBats);                //return hits devided by at bats
      },//first method above
      updateHitsAndAtBats: function (hit, atBat) {   //second is name updateHits-anonymous function assigned-hit and atbat are the arguments
        hits += hit;                         //take hits and increment by 1
        atBats += atBat;                     //take atbats increment by atbat
      }
    }
  }
  //everytime something is added you can keep track of it below
  var altuve = battingAverage();       //new instance-altuve variable and storing battingAverage inside
  console.log(altuve.getCurrentAverage());  //we can call altuve.getCurrentAverage we are able to call the function like a normal attribute
  altuve.updateHitsAndAtBats(0, 20);   //now updating here-change values-pass in no hits and 20 atBats
  console.log(altuve.getCurrentAverage()); // this is dynamic so 0.33 above and for this one it returns 0.3125

  //declared batting average takes in no args
  //function returns 2 methods getCurrent and updateHits-which takes in 2 args hit and atBat


  