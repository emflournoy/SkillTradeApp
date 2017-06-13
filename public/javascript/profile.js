
$(document).ready(function(){



$("#checklogin").click(function(){
  console.log("checking loging");
    checkLoginState();
})

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    console.log(response);
    //statusChangeCallback(response);
  });
}

});
