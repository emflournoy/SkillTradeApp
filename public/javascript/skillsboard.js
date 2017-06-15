$(document).ready(function() {

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

  $('#modalbtn').on('click', (event)=>{
    $('.modal').modal('show');
  });


//API CALL FUNCTION TO LOAD ALL CARDS====================
$.getJSON('http://localhost:3000/skillboard')
    .done((allCards) => {
      createTradeCard(allCards);
    })
    .fail(() => {
      console.log('not loading cards');
    });

//FUNCTION TO CREATE SKILL CARDS========================
function createTradeCard(arr){

  arr.map((e)=>{
    let $tradeCard = $("#skillCardSB").clone();
    $tradeCard.removeAttr("id");
    let indId= 'Card' + e.id;
    $tradeCard.attr("id", indId);
    // Put in content from api call
    let $category = $tradeCard.find('#card-category')
    $category.text(`${e.cat}`);
    let $title = $tradeCard.find("#cardTitle");
    $title.text(e.title);
    let $environment = $tradeCard.find("#cardEnvironment");
    $environment.text(e.env);
    let $photo = $tradeCard.find('#photo')
    $photo.attr('src', e.photo);
    let $text = $tradeCard.find("#cardDescription");
    $text.text(e.description);
    let $contactInfo = $tradeCard.find("#card-contact");
    $contactInfo.text(e.contact);
    $('#tradeCardsContainer').append($tradeCard);
  }); //END OF MAP

}


//API CALL FUNCTION TO LOAD ALL CATEGORIES==========
$.getJSON('/skillboard')
    .done((response) => {
      let allArr = response['allArr'];
      let skillCards = response['skillCards'];
      createFilterButtons(allArr[0], 'catButton', 'catFilters');
      createFilterButtons(allArr[1], 'envButton', 'envFilters');
      for(let i=0; i<skillCards.length; i++){
        createTradeCard(skillCards[i]);
      }
    })
    .fail(() => {
      console.log('not loading API');
    });

//POPULATE FORM DROPDOWNS==========================
function createFilterButtons(arr, idName, appendTo){
  for(let i=0; i<arr.length; i++){
    let $clonedItem = $(`#${idName}`).clone();
    $clonedItem.removeAttr("id");
    $clonedItem.attr("buttonId", arr[i].id);
    $clonedItem.text(`${arr[i].type}`);
    $(`#${appendTo}`).append($clonedItem);
  }
}



//END DOC READY
});
