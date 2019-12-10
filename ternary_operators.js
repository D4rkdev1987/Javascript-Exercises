function ageVerification(age) {                //function called age verification takes in an age, and inside place the conditional (wrapping it in a function)
    if (age > 25) {                            // if the age is greater than 25 then
      console.log('can rent a car');
    } else {                                   // else statement
      console.log("can't rent a car"); 
    }
    ////////////////////////////////////////////////////////////////
    let answer = age > 25 ? "can rent a car" : "can't rent a car";
    console.log("answer");
    //above- ternary syntax-first part of ternary is the conditional age > 25
    //second part after question mark-(if) conditional is true run this "can rent a car"
    // 3rd part after colon if was false (else) : return what ever is there "cant rent a car"
    //

  }
  
  ageVerification(30); //? //they can rent a car
  ageVerification(10); //? not old enough
  /////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////
  

  function adminControls(user) {                 //function adminControls and it expects a user
    if (user) {                                  //if user logged in-you know you have a user here
      if (user.admin) {                          //another conditional here-if user.admin -true or false value if user is admin
        console.log('showing admin controls...'); 
      } else {
        console.log('You need to be an admin');  // if not an admin
      }
    } else {
        console.log('You need to be logged in'); // if user is a guest user or not logged in
    }

    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    //TERNARY OPERATOR FOR ABOVE CODE below-a compunded one 
    let response = user ? user.admin ? "showing admin controls" : "you need to be admin" : "you need to be logged in";
    // user ? (is user true) now another ternary operator- user.admin ?(is user admin) and then the console logs each followed by a colon
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////

    let userOne = {
        name: 'kristine',
        admin: true
    }

    let userTwo = {
        name: 'Tiffany',
        admin: false
    }

    let userThree = null

    adminControls(userOne);
    adminControls(userTwo);
    adminControls(userThree);
  }
  
  //ternary operator line 34
  //from top check if user exist
  //if yes drop into another conditonal same thing if and if not
  // if user doesn't exist it skips everything else and finds final colon
  // and says you need to be logged in (guest)

  //
  // example from beginning 
  //ternary operator example below-ternary allows you to write entire condition on a single line
  <div className={hasPermission ? 'active' : diasabled}></div>
  //if has permission i want you to return active and if not return disabled
