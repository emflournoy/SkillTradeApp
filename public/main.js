$(document).ready(function(){

  $('#login').click(function(){
    FB.login(function(inResponse){
      if (inResponse.status == 'connected'){
      toggleVisible();
      generateFriends(inResponse.authResponse.userID);
      generateMe();
    }
  },{scope: 'public_profile'});
  });

  $("#checklogin").click(function(){
    console.log("checking loging");
      checkLoginState();
  })

  $("#logout").click(function(){
    FB.logout(function(response) {
      console.log(response);// Person is now logged out
    });
  })
  //
  //
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      console.log(response);
      //statusChangeCallback(response);
    });
  }
  
});
