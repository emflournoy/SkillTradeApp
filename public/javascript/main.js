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


  const sbUserId= [];

  var loggedin = false;


  var userInputs = {
    first_name: '',
    last_name: '',
    email: '',
    phone: 0,
    state: '',
    city: '',
    zip: 0,
    avatar: '',
    login: '',
    hashed_password: ''
   };

   $('#login').click(function(){
    var loginResponse;
      checkLoginState();
    function checkLoginState() {
      FB.getLoginStatus(function(response) {
          if (response.status == "connected" && response.status != undefined){
            loginResponse = response.authResponse.userID;
            userInputs.login = loginResponse;
            loggedin = true;

            return userInputs.login;
          }
      });
    }
    if(!loggedin){
      FB.login(function(inResponse){
        // window.location.replace("html/skillsManager.html");
        checkLoginState();
        runRouteAfterLogin(userInputs, loginResponse)

      },{scope: 'public_profile'})
    }
    else if(loggedin){
      runRouteAfterLogin(userInputs, loginResponse);
    }

    //  window.location.replace("html/skillsManager.html")
  });
});



function runRouteAfterLogin(userInputs, loginResponse){



    $.ajax({
      contentType: 'application/json',
      type: "POST",
      url: '/login',
      data: JSON.stringify(userInputs),
      dataType: 'json',
      complete: function(){
        $.ajax({
          contentType: 'application/json',
          type: "GET",
          url: '/login/' + loginResponse,
          dataType: 'json'
        })
        .done((data) => {
          sbUserId.push(data)
        })
        .fail(() => {
          console.log('not working');
        });
      }
    })
    .fail(() => {
      console.log('not working');
    });



}
