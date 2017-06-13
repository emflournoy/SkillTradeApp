$(document).ready(function(){

// checkLoginState();
  // FB.getLoginStatus(function(response){
  //     if(res.status != "connected") {
  //       //have the button display "please log on"
  //     } else {
  //       //have button show "continue as facebook user"
  //     }
  //   });

    //   console.log("clicked");
    //   if(false) {   //this.html == "please log on"
    //     FB.login(function(inResponse){
    //       if (inResponse.status == 'connected'){
    //       toggleVisible();
    //       generateFriends(inResponse.authResponse.userID);
    //       generateMe();
    //     $.get('/skillManager')
    //     }
    //     },{scope: 'public_profile'})
    //   } else {
    //
    //    $.get('/skillManager')
    //   }
    // });


  //
  //
  // $('#login').click(function(){
  //   FB.login(function(inResponse){
  //     if (inResponse.status == 'connected'){
  //     toggleVisible();
  //     generateFriends(inResponse.authResponse.userID);
  //     generateMe();
  //   }
  // },{scope: 'public_profile'});
  // });
  //

  //
  // $("#logout").click(function(){
  //   FB.logout(function(response) {
  //     console.log(response);// Person is now logged out
  //   });
  // })
  // //
  // // //
  // checkLoginState();

  var loggedin;

    $('#login').click(function(){
      checkLoginState();
      if(!loggedin){
        FB.login(function(inResponse){
            if (inResponse.status == 'connected'){
            // toggleVisible();
            // generateFriends(inResponse.authResponse.userID);
            // generateMe();
            // $.getJSON('http://localhost:3000/login')
            //     .done((allCards) => {
            //       console.log("requeset");;
            //     })
            //     .fail(() => {
            //       console.log('not working');
            //     });
            window.location.replace("html/skillsManager.html")
          }

        },{scope: 'public_profile'})
        //TODO check if they already have an account if not make one THEN redirect


      }
      else{
        //TODO check if they already have an account if not make one THEN redirect
       window.location.replace("html/skillsManager.html")
      // $.getJSON('http://localhost:3000/login')
      //     .done((allCards) => {
      //       console.log("requeset");;
      //     })
      //     .fail(() => {
      //       console.log('not working');
      //     });
      }
    });


    function checkLoginState() {
      FB.getLoginStatus(function(response) {
        if(response.status == "connected"){
          loggedin = true
        }
        console.log(loggedin);
      });
    }

    $("#checklogin").click(function(){
      console.log("checking loging");
        checkLoginState();

    })

});
