<<<<<<< HEAD



  window.fbAsyncInit = function() {
=======
window.fbAsyncInit = function() {
>>>>>>> a91e5b3fc979e1da05a5177cc22d8d1f2015e140
    FB.init({
      appId      : '286590885139405',
      status     : true,
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
