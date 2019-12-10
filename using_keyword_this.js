var guide = {                                   //object named guide
    title: 'Guide to Programming',              //give it a title key and a value
    content: 'Content goes here...',            //and the content key and value
    visibleToUser: function (viewingUserRole) { //build the methods visableToUser(anon function) takes in 1 arg viewingUserRole
      if (viewingUserRole === 'paid') {         // if viewingUser(argument) Role IS definitely 'paid'
        return true;                            // then return true
      }
    },
    renderContent: function(userRole) {                 //rendering content-takes in a userRole
      if (this.visibleToUser(userRole)) {               //check to see-this.visiableToUser(needs to know exact instance to refer to)
        console.log(this.title + " - " + this.content); //if true-then use this.title and add the this.content
      } else {                                          // if false
        this.content = '';     //change values of attributes// if not visable user and is false- set equal to the empty string ( = ''; )
        console.log(this.title + " - " + this.content); //
      }
    }
  }
  
  user = { role: 'paid' };           //basic object with key value 
  guide.renderContent(user.role);    //call guide and renderContent and pass in user.role