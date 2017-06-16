$(document).ready(function() {
  //THIS CALL CHECKS IF THEY HAVE COOKIES AND IF NOT SENDS THEM TO THE LOGIN PAGE WHICH GETS THE LOGIN COOKIES===================
  $.ajax({
    type: "GET",
    url: '/profile'
  })
  .done((data) => {
    // console.log("info about if they have a cookie when going to skillmanager", data);
    if(data === "no cookies"){
      window.location.replace("../index.html");
    }
  })
  .fail(() => {
    console.log('/GETnot working');
  });
//END OF COOKIE CHECKING AND REDIRECTING =======================
$('#modalbtn').on('click', (event)=>{
  $('.modal').modal('show');
});
//LOGOUT FUNCTIONALITY ===============================
$('#logoutButton').on('click', function(){
  $.ajax({
    contentType: 'application/json',
    type: "DELETE",
    url: '/',
  })
  .done((req, res, next) => {
      FB.logout();
    window.location.replace("../index.html");
  })
  .fail((err) => {
    console.log('not logging out');
  });
});

//SUBMIT PROFILE FORM========================

$('#profileSubmit').on('click', (event)=> {

let profileFormObj = {
  first_name: $('#first_name').val(),
  last_name: $('#last_name').val(),
  email: $('#email').val(),
  phone: $('#phone').val(),
  city: $('#city').val(),
  state: $('#state').val(),
  zip: $('#Zip-Code').val(),
  avatar: $('#photoAvatar').val(),
  login: ''
};
LoginStatus();
function LoginStatus() {

  FB.getLoginStatus(function(response) {
      if (response.status == "connected" && response.status!==undefined){
        loginResponse = response.authResponse.userID;
        profileFormObj.login = loginResponse;
        // userInputs.email = loginResponse;           // this line was added to overcome the database table that wants a unique email (too hard to correct the table format)
        loggedin = true;
        console.log(profileFormObj.login);
        return profileFormObj.login;
      }
  });
}

  $.ajax({
    contentType: 'application/json',
    type: "PATCH",
    url: '/profile',
    data: JSON.stringify(profileFormObj),
    dataType: 'json',
  })
  .done((data) => {
    console.log(data);
    $('#newCardModal').modal('hide');
    createProfile(data);
    // emptyForm();
  })
  .fail((err) => {
    console.log('not updating profile');
  });


});

//CREATE PROFILE PAGES=========================
function createProfile (data) {
  let $profileCard = $('#profilePage');
  let $name = $profileCard.find('profile-name');
  $name.text(data.first_name + " " + data.last_name);
  let $profileBody = $('.panel-body');
  let $profileImg = $('#profileImg').attr('src', data.avatar);
  let $email = $('#profileEmail').val(data.email);
  let $phone = $('#profilePhone').val(data.phone);
  let $city = $('#profileCity').val(data.city);
  let $state = $('#profileState').val(data.state);
  let $zip = $('#zip').val(data.zip);
}



});//END OF DOCREADY=========================
