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

// function addStockElement(event) {
//   //Primary elements
//   let elementRow = $('<div>').addClass("row stuff");
//   let elementStock = $('<div>').addClass("stock col-md-10 col-md-offset-1 col-xs-12");
//   //first - ticker
//   let elementTicker = $('<div>').addClass("tickerDiv col-md-2 col-md-offset-1");
//   let elementLabelTicker = $('<div>').addClass("tickerText mobileActive col-xs-6").html('Ticker:');
//   let elementBoxTicker = $('<div>').addClass("col-md-12 col-xs-6");
//   let elementInputTicker = $('<input>').addClass("tickerInput col-md-12 inOut ltblu").attr('style','border:none;').attr('type','text').attr('name','ticker').attr('value','');
//
//   $(elementTicker).append(elementLabelTicker);
//   $(elementBoxTicker).append(elementInputTicker);
//   $(elementTicker).append(elementBoxTicker);
//   $(elementStock).append(elementTicker);
//
//   //second - allocation
//   let elementPercent = $('<div>').addClass("allocationDiv col-md-2");
//   let elementLabelPercent = $('<div>').addClass("allocationText mobileActive col-xs-6").html('Allocation:');
//   let elementBoxPercent = $('<div>').addClass("col-md-12 col-xs-6");
//   let elementInputPercent = $('<input>').addClass("allocationVal col-md-12 inOut ltblu").attr('style','border:none;').attr('type','text').attr('name','percent').attr('value','0%');
//
//   $(elementPercent).append(elementLabelPercent);
//   $(elementBoxPercent).append(elementInputPercent);
//   $(elementPercent).append(elementBoxPercent);
//   $(elementStock).append(elementPercent);
//
//   //third  - current shares
//   let elementCurShar = $('<div>').addClass("currentSharesDiv col-md-2");
//   let elementLabelCurShar = $('<div>').addClass("currentSharesText mobileActive col-xs-6").html('Current shares:');
//   let elementBoxCurShar = $('<div>').addClass("col-md-12 col-xs-6");
//   let elementInputCurShar = $('<input>').addClass("currentSharesInput col-md-12 inOut ltblu").attr('style','border:none;').attr('type','text').attr('name','currentShares').attr('value','0');
//
//   $(elementCurShar).append(elementLabelCurShar);
//   $(elementBoxCurShar).append(elementInputCurShar)
//   $(elementCurShar).append(elementBoxCurShar);
//   $(elementStock).append(elementCurShar);
//
//   //fourth - price
//   let elementPrice = $('<div>').addClass("priceDiv col-md-2");
//   let elementPriceText = $('<div>').addClass("priceText mobileActive col-xs-6").html("Price:");
//   let elementBoxPrice = $('<div>').addClass("col-md-12 col-xs-6");
//   let elementPriceInput = $('<input>').addClass("currentPriceOutput col-md-12 inOut grayText orange").attr('style','border:none').attr('value','--');
//
//   $(elementPrice).append(elementPriceText);
//   $(elementBoxPrice).append(elementPriceInput);
//   $(elementPrice).append(elementBoxPrice);
//   $(elementStock).append(elementPrice);
//
//   //fifth - recommended shares
//   let elementRecomShares = $('<div>').addClass("sharesDiv col-md-2");
//   let elementRecomSharesText = $('<div>').addClass("sharesText mobileActive col-xs-6").html("Recommended shares:");
//   let elementBoxRcomShares = $('<div>').addClass("col-md-12 col-xs-6");
//   let elementRecomSharesOutput = $('<input>').addClass("sharesOutput col-md-12 inOut grayText orange").attr('style', 'border:none').attr('value','--');
//   $(elementRecomShares).append(elementRecomSharesText);
//   $(elementBoxRcomShares).append(elementRecomSharesOutput)
//   $(elementRecomShares).append(elementBoxRcomShares);
//   $(elementStock).append(elementRecomShares);
//
//   // append all to form
//   $(elementRow).append(elementStock);
//   $('.newSkills').append(elementRow);
// }
//
// $('.addBtn').on('click',function(event){
//   addStockElement();
// });

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
