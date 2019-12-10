var age = 30;

if (age <= 10) {
  console.log("You can eat from the kid's menu");
  console.log("You are not old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 16 && age < 25) {  
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are old enough to rent a car");
}

//conditional-range
//line 7
////else if and put in a range---> age is greater than or equal to 16 and(&&) age is greater than 25
//line 11 
///else if ---> if the age is greater than or equal to 25 