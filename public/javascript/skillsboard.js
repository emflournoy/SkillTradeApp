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
    $('.skillCardBtn').on('click', (event)=>{
      console.log(event.target)
      var id = e.id;
      // console.log(id);
      event.stopPropagation();
      // createModal(arr, id);

      $('.modal').modal('show');
    });
  }); //END OF MAP
}

  function createModal(arr, id){

  var modalContent = {}

    arr.filter(function(e){
      if (e.id === id){
        modalContent = e;
      }
      return modalContent
    });
    // console.log(modalContent);
  }


//END DOC READY
});
