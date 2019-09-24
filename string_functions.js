//create the variable below
var str = 'The quick brown fox jumped over the lazy dog';

str.length(); // VM2349:1 Uncaught TypeError: str.length is not a function
// below is an attribute not a function
str.length; // 44 - able to check the length of the string you are working with
//everything below are functions
str.charAt(2); // "e" -whatever element is at index of 2-ZERO INDEX-starts with zero

str.charAt(200); // ""
//concatenate-combines what we put as an argument-right on the end
str.concat(' again and again'); // "The quick brown fox jumped over the lazy dog again and again"
//does not perm. add to the end-just the value that was returned
str; // "The quick brown fox jumped over the lazy dog"
//to check if any values are included in the string use includes
str.includes('quick'); // true
// checks end of string-it checks for the characters 
str.endsWith('dog'); // true
// startswith just looks at the very front and checks if what we pass in starts at the point
str.startsWith('Foo'); // false

//////////////////////////////////////////////////////////////////////
//as an argument you can repeat how many times you want to repeat the line-does not altar original string
str.repeat(5); // "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"
//match-regular expression pattern matching system-
//takes in a regular expression-if string contains a phone number
//its a pattern matching system
//this is compared to our string-does the pattern match whats in the string-returns null
str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // null
//below returns a full object back
'555-555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // (4) ["555-555-5555", "555-", undefined, "555-", index: 0, input: "555-555-5555"]0: "555-555-5555"1: "555-"2: undefined3: "555-"index: 0input: "555-555-5555"length: 4__proto__: Array(0)
// if you want to replace something-takes in 2 arguments 
// if you want to replace fox with the word wolf
str.replace('fox', 'wolf'); // "The quick brown wolf jumped over the lazy dog"
//search below- what search does looks for a pattern that it matches with it returns the index
//below returns at the zeroeth index because it's the beginning 
'555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 0
'Hi, 555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 4
//indexof-returns the index of 20
str.indexOf('jumped'); // 20

str.lastIndexOf('jumped'); // 20

var str2 = str.concat('again and again');

str2.indexOf('again'); // 44
str2.lastIndexOf('again'); // 54
//////////////////////////////////////////////////////////////////////////////

//slice function -grab a slice inside of string-pass 2 arguments-start at 4 and ends at 10
str.slice(4, 10); // "quick "

//slice function -to work from right to left
str.slice(-8); // "lazy dog"

//slice function -grabs from b all the way to the end-left to right return
str.slice(10); // "brown fox jumped over the lazy dog"

str.toUpperCase(); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"
str.toLowerCase(); // "the quick brown fox jumped over the lazy dog"

//trim-removes empty space/clean up user data
var messyString = '    Hi there    ';
messyString.trim(); // "Hi there"



