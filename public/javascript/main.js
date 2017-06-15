$(document).ready(function(){


// THIS CHANGES THE LOGIN BUTTON from logn to continue if they aready have cookies (which they get from being logged in)---------------------------------------
  $.ajax({
    type: "GET",
    url: '/continue'
  })
  .done((data) => {
    console.log("info about if they have a cookie when getting to the login page", data);
    if(data === "yes cookie"){
      $('#login').html('Continue');
    }
    else if (data === "no cookie"){
      $('#login').html('Login')
    }
  })
  .fail(() => {
    console.log('/GETnot working');
  });
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
            userInputs.email = loginResponse;           // this line was added to overcome the database table that wants a unique email (too hard to correct the table format)
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
