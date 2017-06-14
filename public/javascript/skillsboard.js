$(document).ready(function() {


  // $("#checklogin").click(function(){
  //   console.log("checking loging");
  //     checkLoginState();
  // })

  // function checkLoginState() {
  //   FB.getLoginStatus(function(response) {
  //     console.log(response);
  //     //statusChangeCallback(response);
  //   });
  // }


//API CALL FUNCTION TO LOAD ALL CARDS====================
$.getJSON('http://localhost:3000/skillboard')
    .done((allCards) => {
      console.log(allCards);
      createTradeCard(allCards);
      // createModal(allCards);
        // $('#skillCardModal').modal('hide');
    })
    .fail(() => {
      console.log('not working');
    });

//FUNCTION TO CREATE SKILL CARDS========================
function createTradeCard(arr){

  arr.map((e)=>{
    let $tradeCard = $("#blankTradeCard").clone();
    $tradeCard.removeAttr("id");
    let indId= 'Card' + e.id;
    $tradeCard.attr("id", indId);
    // Put in content from api call
    let $category = $tradeCard.find('.category')
      $category.text(e.cat);
    let $title = $tradeCard.find("#cardTitle");
      $title.text(e.title);
    let $text = $tradeCard.find("#cardText");
      $text.text(e.description);
    $('#tradeCardsContainer').append($tradeCard);
  }); //END OF MAP

  $('.skillCardBtn').on('click', (event)=>{
    console.log($(event.target).closest('.col-sm-4').attr('id'))
    $('.modal').modal('show');
  });
}
  //POPULATE MODAL========================
function createModal(arr){
  arr.map((e)=>{
    let $modalCard = $(".sManagerBody").clone();
    $modalCard.removeAttr("id");
    let indId= 'Modal ' + e.id;
    $modalCard.attr("id", indId);
    // Put in content from api call
    let $photo = $modalCard.find('.pic')
      $photo.attr('src', e.photo);
    let $description = $modalCard.find(".desc");
      $description.text(e.title);
    let $category = $modalCard.find(".cat");
      $category.text(e.cat);
    let $environment = $modalCard.find(".env");
      $environment.text(e.env);
    let $contactInfo = $modalCard.find(".contactInfo");
      $contactInfo.text(e.contact);
    // $('.modal-body').append($modalCard);
  });
}


//END DOC READY
});
