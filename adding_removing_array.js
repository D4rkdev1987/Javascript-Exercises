var arr = ['Altuve', 'Bregman', 'Correa', 'Springer']; //basic array-baseball players 

arr.pop(); // "Springer"   //is a function- and returns the very last item from the array and pops it off
                           //cleaning or popping items off the array
arr; // ['Altuve', 'Bregman', 'Correa']

arr.push('Bagwell'); // 4 -this adds Bagwell to the array
arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']
                     // var elementPopped = arr.pop();   returns what you popped up


arr.shift(); // ['Bregman', 'Correa', 'Bagwell'] //to pull Altuve off the list-will return altuve but new array starts with Bregman

arr.unshift('Kyle'); // 4  to add to the beginning of the array

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']

//array has a built in length but length is not a function its a property of the array

