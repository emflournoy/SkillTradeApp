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

  var loggedin;

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
    function checkLoginState() {
      FB.getLoginStatus(function(response) {
          loginResponse = response.authResponse.userID;
          userInputs.login = loginResponse;
          loggedin = true;
          return userInputs.login;
      });
    }
    checkLoginState();
    if(!loggedin){
      FB.login(function(inResponse){
          if (inResponse.status == 'connected'){
            $.ajax({
              contentType: 'application/json',
              type: "POST",
              url: '/login',
              data: JSON.stringify(userInputs),
              dataType: 'json',
            })
            .done((user) => {
              console.log(user);
            })
            .fail(() => {
              console.log('not working');
            });
            window.location.replace("html/skillsManager.html")
          }
      },{scope: 'public_profile'})
      //TODO check if they already have an account if not make one THEN redirect
    }else if (loggedin){
      //TODO check if they already have an account if not make one THEN redirect
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
     window.location.replace("html/skillsManager.html")
  } else {
    console.log('not sure');
  }
  });

    // function checkLoginState() {
    //   FB.getLoginStatus(function(response) {
    //     if(response.status == "connected"){
    //       loggedin = true
    //     }
    //     console.log(loggedin);
    //   });
    // }

});
