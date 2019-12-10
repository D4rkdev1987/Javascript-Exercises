//VARIABLE DECONSTRUCTION
let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;
//temp variables above

//performing the swap below
playerOne = tempPlayerTwo;
playerTwo = tempPlayerOne;
/////////////////////////////////
//variable deconstruction to swap values below
[playerOne, playerTwo] = [playerTwo, playerOne];
console.log(`Player One: ${playerOne} Player Two: ${playerTwo}`);
