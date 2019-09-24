//beginning and basics of comparision 
var age = 10;  //variable age is equal to 10
var ageTwo = '12';
//to check if equal say if age is equal to ageTwo 
//then use curly braces and console.log 
if (age == ageTwo) {
    console.log('They are equal');
}
//strict equal-checks not only value but on type
if (age === ageTwo) {
  console.log('They are equal');
}
//to check if age is not equal to ageTwo
if (age != ageTwo) {
    console.log('Not equal');
}
//strict not equals-best pratice
if (age !== ageTwo) {
  console.log('Not equal');
}
//if age is greater than or equal to
if (age >= 25) {
  console.log('Old enough to rent a car');
}
// if age is less than or equal to 
if (age <= 10) {
  console.log('You can eat from the kid menu');
}