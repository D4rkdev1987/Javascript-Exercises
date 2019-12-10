var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa'); //index called foundElement set it equal to array and use indexOf- allows you to search by value and return the index of Correa
foundElement; // 2

arr.splice(foundElement, 1); // ["Correa"] //to pull out and remove-takes 2 argument, index first and then how many we want to remove
arr; // ["Altuve", "Bregman", "Springer"]

//to pull off as many items as we want below
arr.splice(1, 2); // ["Bregman", "Springer"] // start at 1 and take out 2 items-removing items
arr; // ["Altuve"]

// splice always returns an array-above returned an array of length of 1