2 + 2; // 4

2 - 2; // 0

2 / 2; // 1

2 * 10; // 20

5 % 2; // 1  modulus-remainder of something

10 % 2; // 0

8 % 2; // 0

2 ** 10; // 1024  using exponents here-use two **

var num = 2;
// incrementer operator
//post fix notation-operator is placed at the end
num++; // 2  
//prefix notation 
++num; // 4

num; // 4
//decrementor operator-decreases by one
num--; // 4
// return value what we want
--num; // 2
num; // 3


// 2++; // VM3506:1 Uncaught ReferenceError: Invalid left-hand side expression in postfix operation
// ++2; // VM3508:1 Uncaught ReferenceError: Invalid left-hand side expression in prefix operation

var someNum = 10;
// if you want the opposite of 10 meaning -10 use -someNum
var someOtherNum = -someNum;
someOtherNum; // -10

var strNum = '100';
//to convert it to a number type and not a string '100'
var convertedNum = + strNum;
convertedNum; // 100   notice it's no longer a string here