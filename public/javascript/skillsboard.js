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
    console.log(e.cat);
    let $tradeCard = $("#skillCard").clone();
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
    $('#skillContainer').append($tradeCard);
  }); //END OF MAP

}



//END DOC READY
});
