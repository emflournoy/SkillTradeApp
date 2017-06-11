$(document).ready(function() {


//API CALL FUNCTION TO LOAD ALL CARDS====================
$.getJSON('http://localhost:3000/skilbuild')
    .done((allCards) => {
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
    let indId= 'Card' + `${e.id}`;
    $tradeCard.attr("id", indId);
    $('#tradeCardsContainer').append($tradeCard);
  })
}




//END DOC READY
});
