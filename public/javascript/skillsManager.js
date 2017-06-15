$(document).ready(function() {
// checkLoginState();
//
//
// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//       if (response.status != "connected"){
//         window.location.replace("../index.html")
//       };
//     })
//   }

//LOGOUT FUNCTIONALITY===============================
$('#logoutButton').on('click', function(){
  $.ajax({
    contentType: 'application/json',
    type: "DELETE",
    url: '/',
  })
  .done((req, res, next) => {
    req.session = null;
      FB.logout();
    window.location.replace("../index.html")
  })
  .fail(() => {
    console.log('not logging out');
  });
});


$('#modalbtn').on('click', (event)=>{
  $('.modal').modal('show');
});


//API CALL FUNCTION TO LOAD ALL CATEGORIES==========
$.getJSON('/skillManager')
    .done((response) => {
      let allArr = response['allArr'];
      let skillCards = response['skillCards'];
      createDropdowns(allArr[0], 'catItem', 'categoryDropdown');
      createDropdowns(allArr[1], 'envItem', 'environmentDropdown');
      for(let i=0; i<skillCards.length; i++){
        addNewSkill(skillCards[i]);
      }
    })
    .fail(() => {
      console.log('not loading API');
    });

//POPULATE FORM DROPDOWNS==========================
function createDropdowns(arr, idName, appendTo){
  for(let i=0; i<arr.length; i++){
    let $clonedItem = $(`#${idName}`).clone();
    $clonedItem.removeAttr("id");
    $clonedItem.attr("dataId", arr[i].id);
    $clonedItem.text(`${arr[i].type}`);
    $(`#${appendTo}`).append($clonedItem);
  }
}

$('#categoryDropdown').on('click', function(event){
    $('#categories').html(event.target.text);
    $('#categories').attr('dataId',event.target.getAttribute('dataId'));
});

$('#environmentDropdown').on('click', function(event){
    $('#environments').html(event.target.text);
    $('#environments').attr('dataId',event.target.getAttribute('dataId'));
});


// SUBMIT NEW CARD TO DATABASE AND CREATE CARD=======
$('#skillSubmit').on('click', (event)=> {
  let skill_card_obj = {
    title: $('#title-Box').val(),
    description: $('#descriptionTextBox').val(),
    photo: $('#photo-box').val(),
    categories_id: $('#categories').attr('dataId'),
    environment_id: $('#environments').attr('dataId'),
    contact: $('#contact-Box').val()
  };

  $.ajax({
    contentType: 'application/json',
    type: "POST",
    url: '/skillManager',
    data: JSON.stringify(skill_card_obj),
    dataType: 'json',
  })
  .done((data) => {
    $('#newCardModal').modal('hide');
    addNewSkill(data);
    emptyForm();
  })
  .fail(() => {
    console.log('not working');
  });
});

function addNewSkill(data){
  let userCard = $("#userCard").clone();
  userCard.removeAttr("id");
  let cardId = `${data.id}`;
  userCard.attr("id", cardId);
  let $title = userCard.find("h4");
  $title.html(data.title);
  let $image = userCard.find("img");
  $image.attr('src', data.photo);
  userCard.children(".card").children("#card-category").text(data.cat_type);
  let $environment = userCard.find("h5");
  $environment.html(data.env_type);
  let $description = userCard.find("#cardDescription");
  $description.html(data.description);
  let $contact = userCard.find("#card-contact");
  $contact.html(data.contact);
  $('#userContainer').append(userCard);

  // DELETE SKILL CARD FUNCTION ======================
  $('.close').on('click',function(event){
    var deleteCardId = $(this).parents('.deleteClass')[0].id;
    var $target = $(this).parents('.deleteClass');
    $target.hide('slow', function(){$target.remove();});

    $.ajax({
      contentType: 'application/json',
      type: "DELETE",
      url: '/skillManager/' + deleteCardId,
    })
    .done((data) => {
      console.log('deleted: ', data);
    })
    .fail(() => {
      console.log('not working');
    });
  });
}

// EMPTY FORM FUNCTION========================
function emptyForm (){
   $('#title-Box').val('');
   $('#descriptionTextBox').val('');
   $('#photo-box').val('');
   $('#contact-Box').val('');
}


//end of docReady
});
