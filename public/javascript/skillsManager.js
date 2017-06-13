$(document).ready(function() {


$('#modalbtn').on('click', (event)=>{
  console.log('button clicked');
  $('.modal').modal('show');
});


//API CALL FUNCTION TO LOAD ALL CATEGORIES==========
$.getJSON('/skillManager')
    .done((catsEnvArr) => {
      createDropdowns(catsEnvArr[0], 'catItem', 'categoryDropdown');
      createDropdowns(catsEnvArr[1], 'envItem', 'environmentDropdown');
    })
    .fail(() => {
      console.log('not working');
    });

//POPULATE FORM DROPDOWNS==========================
function createDropdowns(arr, idName, appendTo){
  for(let i=0; i<arr.length; i++){
    let $clonedItem = $(`#${idName}`).clone();
    $clonedItem.removeAttr("id");
    let indId= 'item' + `${arr.id}`;
    $clonedItem.attr("id", indId);
    $clonedItem.text(`${arr[i].type}`);
    $(`#${appendTo}`).append($clonedItem);
    console.log('working');
  }
}
// =======API CALL TO MAKE SKILL CARD===============
$('#skillSubmit').on('click', (event)=> {
  let skill_card_obj = {
    title: $('#title-Box').val(),
    description: $('#descriptionTextBox').val(),
    photo: $('#photo-box').val(),
    categories_id: 1,// $('#category-results').val(),//need to access
    environment_id: 1, //$('#environment-results').val(),//need to access
    // contact: $('#contact-Box').val()
  };
  $.ajax({
    contentType: 'application/json',
    type: "POST",
    url: '/skillManager',
    data: JSON.stringify(skill_card_obj),
    dataType: 'json',
  })
  .done((data) => {
    console.log(data);
    addNewSkill(data);
  })
  .fail(() => {
    console.log('not working');
  });
});

function addNewSkill(event){
  let $smBody= $('#sManagerBody');
  let $skillCard = $("#skillCard").clone();
  $skillCard.removeAttr("id");
  let indId= 'skillCard' + `${e.id}`;
  $skillCard.attr("id", indId);
  $($smBody).append($skillCard);
}


});
