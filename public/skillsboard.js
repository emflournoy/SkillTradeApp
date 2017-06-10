$(document).ready(function() {


//API CALL FUNCTION=====================================
  function planetGetData(planetsArr){
    var promises = [];
    for(let i=0; i<planetsArr.length; i++){
      promises.push($.getJSON(`https://g-solarsystem.herokuapp.com/json/page-json.cfm?URLPath=planets/${planetsArr[i]}`));
    }
    Promise.all(promises).then(function (results) {
      for (planet of results) {
        planetsData[planet.path[1]] = planet.sidebar.subnav;
      }
      modalIdCreator(planetsData);
      popButtons(planetsData);
      navPopups(planetsData);
    });
  }
  planetGetData(planets);


//FUNCTION TO CREATE SKILL CARDS========================
function createTradeCard(arr){
  arr.map((e)=>{
    let $tradeCard = $("#blankTradeCard").clone();
    $tradeCard.removeAttr("id");
    let indId= 'Card' + `${e}`
    $tradeCard.attr("id", indId);
    $('#tradeCardsContainer').append($tradeCard);
    console.log($('#tradeCardsContainer'));

  })
  // for(let i=0; i<arr.length; i++){
  // // Build Modal;
  // // Append to body and show
  // }
}


createTradeCard(testArr);




});
