function ageVerification(age) {  //function called age verification takes in age
    if (age > 25) {       
      console.log('can rent a car');
    } else {
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
  

  function adminControls(user) {     //function adminControls expects a user
    if (user) {               //if user logged in
      if (user.admin) {       //another conditional here-if user.admin
        console.log('showing admin controls...');  //
      } else {
        console.log('You need to be an admin');
      }
    } else {
        console.log('You need to be logged in');
    }

    //ternary operator below-a compunded one 
    let response = user ? user.admin ? "showing admin controls" : "you need to be admin" : "you need to be logged in";
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
    /////////////////////////////////////////////////////////
  }
  
  //ternary operator line 34
  //from top check if user exist
  //if yes drop into another conditonal same thing if and if not
  // if user doesn't exist it skips everything else and finds final colon
  // and says you need to be logged in (guest)

  //
  //
  //ternary operator example below-entire condition on a single line
  <div className={hasPermission ? 'active' : diasabled}></div>
  //if has permission i want you to return active if not return disabled
