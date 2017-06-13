$(document).ready(function(){

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
     checkLoginState();
    var loginResponse;
    function checkLoginState() {
      FB.getLoginStatus(function(response) {
          if(response.status == 'connected' && response.status != undefined){
          loggedin = true;
          loginResponse = response.authResponse.userID;
          userInputs.login = Number(loginResponse);
          return userInputs.login;
          }
          else{
            loggedin = false;
          }

      });
    }
    if(loggedin){

      $.ajax({
        contentType: 'application/json',
        type: "POST",
        url: '/login',
        data: JSON.stringify(userInputs),
        dataType: 'json',
      })
      .done((user) => {

      })
      .fail((err) => {

      });
      window.location.replace("html/skillsManager.html");
      return;
    }else if (!loggedin){
      FB.login(function(inResponse){
        checkLoginState();
          if (inResponse.status == 'connected'){
            $.ajax({
              contentType: 'application/json',
              type: "POST",
              url: '/login',
              data: JSON.stringify(userInputs),
              dataType: 'json',
            })
            .done((user) => {
            })
            .fail(() => {
            });

          }
      },{scope: 'public_profile'})
      return;

  } else {

  }
  });

});
