$(document).ready(function(){

  // $("#logout").click(function(){
  //   FB.logout(function(response) {
  //     console.log(response);// Person is now logged out
  //   });
  // })
  // //
  // // //
  // checkLoginState();




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
          console.log("get data", data);
          window.location.replace("html/skillsManager.html");


        })
        .fail(() => {
          console.log('/GETnot working');
        });
      }
    })
    .fail(() => {
      console.log('post not working');
    });

}
