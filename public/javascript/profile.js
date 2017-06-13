<<<<<<< HEAD
=======

>>>>>>> dbd108fe3a5efcc1c9cc46fdb50fd289d5855624
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
