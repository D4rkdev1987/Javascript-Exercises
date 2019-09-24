var guide = {                                   //object named guide
    title: 'Guide to Programming',              //give it a title
    content: 'Content goes here...',            //and the content
    visibleToUser: function (viewingUserRole) { //build the methods visableToUser(anon function) takes in 1 arg viewingUserRols
      if (viewingUserRole === 'paid') {         //
        return true;                            //
      }
    },
    renderContent: function(userRole) {                 //rendering content-takes in a userRole
      if (this.visibleToUser(userRole)) {               //check to see-this.visiableToUser(needs to know exact instance to refer to)
        console.log(this.title + " - " + this.content); //if true-then use this,title and add the this.content
      } else {                       
        this.content = '';     //change values  // if not visable user and is false
        console.log(this.title + " - " + this.content); //
      }
    }
  }
  
  user = { role: 'paid' };           //basic object
  guide.renderContent(user.role);    //call guide and renderContent and pass in user.role