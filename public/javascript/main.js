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

    var response;

      function checkLoginState() {
        FB.getLoginStatus(function(response) {
            response = response.authResponse.userID;
            userInputs.login = response;
            return userInputs.login;
          });
      }

      checkLoginState();

      if(!loggedin){
        FB.login(function(inResponse){
            if (inResponse.status == 'connected'){
            console.log(JSON.stringify(userInputs));
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


      }
      else{
        //TODO check if they already have an account if not make one THEN redirect
       window.location.replace("html/skillsManager.html")
      console.log(JSON.stringify(userInputs));
      $.ajax({
        contentType: 'application/json',
        type: "POST",
        url: '/login',
        data: JSON.stringify(userInputs),
        dataType: 'json',
      })
        .done((allCards) => {
          console.log("request");
        })
        .fail(() => {
          console.log('not working');
        });
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
