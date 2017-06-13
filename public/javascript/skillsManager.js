$(document).ready(function() {


//API CALL FUNCTION TO LOAD ALL CATEGORIES==========
$.getJSON('http://localhost:3000/skillManager')
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
  };
}




$('#skillSubmit').on('click', (event)=> {
  let skill_card_obj = {
    title: $('#title-Box').val(),
    description: $('#descriptionTextBox').val(),
    photo: $('#photo-Box').val(),
    user_id: 'dog',//need to access userID
    categories_id: $('#category-results').val(),//need to access
    environment_id: $('#environment-results').val(),//need to access
    contact: $('#contact-results').val()
  };
  console.log(skill_card_obj);
//Option 1
  $.post( 'http://localhost:3000/skillManager/' + skill_card_obj.user_id, skill_card_obj)
  .done((data) => {
    addNewSkill(data);
  })
  .fail(() => {
    console.log('not working');
  });
//Option 2
// $.ajax({
//   type: "POST",
//   url: url,
//   data: skill_card_obj,
//   success: success,
//   dataType: dataType
// });
})


function addNewSkill(event){
  let $smBody= $('#sManagerBody');
    let $skillCard = $("#skillCard").clone();
    $skillCard.removeAttr("id");
    let indId= 'skillCard' + `${e.id}`;
    $skillCard.attr("id", indId);
    $($smBody).append($skillCard);
}


}); //end of document ready//


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
