<<<<<<< HEAD

=======
>>>>>>> a91e5b3fc979e1da05a5177cc22d8d1f2015e140
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
