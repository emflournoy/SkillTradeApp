$(document).ready(function() {


$('#modalbtn').on('click', (event)=>{
  $('.modal').modal('show');
});


//API CALL FUNCTION TO LOAD ALL CATEGORIES==========
$.getJSON('/skillManager')
    .done((catsEnvArr) => {
      createDropdowns(catsEnvArr[0], 'catItem', 'categoryDropdown');
      createDropdowns(catsEnvArr[1], 'envItem', 'environmentDropdown');
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



$('#skillSubmit').on('click', (event)=> {

  let skill_card_obj = {
    title: $('#title-Box').val(),
    description: $('#descriptionTextBox').val(),
    photo: $('#photo-box').val(),
    categories_id: $('#categories').attr('dataId'),//need to access
    environment_id: $('#environments').attr('dataId'),//need to access
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
  })
  .fail(() => {
    console.log('not working');
  });
});

function addNewSkill(data){
  let userCard = $("#userCard").clone();
  userCard.removeAttr("id");
  let individualID = 'userCard' + `${data.id}`;
  userCard.attr("id", individualID);
  let $title = userCard.find("h4");
  $title.html(data[0].title);
  let $image = userCard.find("img");
  $image.attr('src', data[0].photo);
  userCard.children(".card").children("#card-category").text($('#categories').html());
  // userCard.children(".card-block").children("#cardTitle").text(data[0].title);
  let $environment = userCard.find("h5");
  $environment.html($('#environments').html());
  let $description = userCard.find("#cardDescription");
  $description.html(data[0].description);
  let $contact = userCard.find("#card-contact");
  $contact.html(data[0].contact);

  $('#userContainer').append(userCard);
}


});
