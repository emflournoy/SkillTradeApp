$(document).ready(function() {


//API CALL FUNCTION TO LOAD ALL CARDS====================
$.getJSON('postgres://localhost/skilbuild')
    .done((allCards) => {
      createTradeCard(allCards);
    })
    .fail(() => {
      Materialize.toast('Unable to retrieve cards', 3000);
    });




//FUNCTION TO CREATE SKILL CARDS========================
function createTradeCard(arr){
  arr.map((e)=>{
    let $tradeCard = $("#blankTradeCard").clone();
    $tradeCard.removeAttr("id");
    let indId= 'Card' + `${e.id}`;
    $tradeCard.attr("id", indId);
    $('#tradeCardsContainer').append($tradeCard);
  })
}




//END DOC READY
});
