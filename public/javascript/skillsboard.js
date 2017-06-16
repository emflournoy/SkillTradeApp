$(document).ready(function() {


  var blankCard = '<div class="col-sm-4" id="blankTradeCard"><div class="card skillCard" id="skillCardSB"><div class="card-header" id="card-category">Category</div><div class="card-block scroll-box"><div class="row" id="cardTopSection"><div class="col-md-6" id="titleSection"><h4 class="card-title" id="cardTitle">Activity Title</h4><h5 class="card-environment" id="cardEnvironment">Environment</h5></div><div class="col-md-6"><img class="img-fluid" src ="http://lorempixel.com/200/200" alt="picture" id= "photo"></div></div><p class="card-text" id="cardDescription">With supporting text below as a natural lead-in to additional content.</p><p class = "card-contact">Contact: <span id="card-contact">Contact Info</span></p></div></div></div>'


    //THIS CALL CHECKS IF THEY HAVE COOKIES AND IF NOT SENDS THEM TO THE LOGIN PAGE WHICH GETS THE LOGIN COOKIES+++++++++++++++++++++++++++++++++++++++++++++++++
    $.ajax({
      type: "GET",
      url: '/skillManager'
    })
    .done((data) => {
      console.log("info about if they have a cookie when going to skillmanager", data);
      if(data === "no cookies"){
        window.location.replace("../index.html");
      }
    })
    .fail(() => {
      console.log('/GETnot working');
    });
//-------------------------------------------------------------------------------------------------------------


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




//API CALL FUNCTION TO LOAD ALL CARDS====================
$.getJSON('/skillboard')
    .done((allCards) => {
      createTradeCard(allCards);
    })
    .fail(() => {
      console.log('not loading cards');
    });

//FUNCTION TO CREATE SKILL CARDS========================
function createTradeCard(e){
   if(e.photo===''){
    e.photo = '../photos/paul-morris-223786.jpg';
   }
  let $tradeCard = $("#skillCardSB").clone();
  $tradeCard.removeAttr("id");
  let indId= 'Card' + e.id;
  $tradeCard.attr("id", indId);
  // Put in content from api call
  let $category = $tradeCard.find('#card-category');
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
  $('.intButton').on('click', (event)=>{
    console.log(event.target);
    $('#interestedModal').modal('show');
  });
}
//API CALL FUNCTION TO LOAD ALL CATEGORIES==========
var allCardsArr = [];

$.getJSON('/skillboard')
    .done((response) => {
      let allArr = response['allArr'];
      let skillCards = response['skillCards'];
      allCardsArr = skillCards;
      createFilterButtons(allArr[0], 'catButton', 'catFilters');
      createFilterButtons(allArr[1], 'envButton', 'envFilters');
      for(let i=0; i<skillCards.length; i++){
        createTradeCard(skillCards[i]);
      }
    })
    .fail(() => {
      console.log('not loading API');
    });


//MAKE FILTER BUTTONS==========================
function createFilterButtons(arr, idName, appendTo){
  for(let i=0; i<arr.length; i++){
    let $clonedItem = $(`#${idName}`).clone();
    $clonedItem.removeAttr("id");
    $clonedItem.attr("buttonId", arr[i].id);
    $clonedItem.text(`${arr[i].type}`);
    $(`#${appendTo}`).append($clonedItem);
    //make filter option
  $clonedItem.on('click',function(event){
    $('.btn').removeClass('activeFilter');
    var $target = $(event.target)
    $target.addClass('activeFilter');
    $('#tradeCardsContainer').children().remove();
    $('#tradeCardsContainer').html(blankCard);
    var filtered = allCardsArr.filter((obj)=>{
      if(obj.cat===$clonedItem.text() || obj.env===$clonedItem.text()){
        return obj;
      }
    })
    console.log(filtered);
    if(filtered.length===0){
      $('#filterStatus').text('No results found. Try again!');
    } else {
      $('#filterStatus').text('What sounds like fun?');
      for(let i=0; i<filtered.length; i++){
        createTradeCard(filtered[i]);
      }
    }
  });
  }
}

$('#clearEnv').on('click', ()=>{
  makeCards();
});

$('#clearCat').on('click', ()=>{
  makeCards();
});

function makeCards(){
  $('#tradeCardsContainer').children().remove();
  $('#tradeCardsContainer').html(blankCard);
  for(let i=0; i<allCardsArr.length; i++){
    createTradeCard(allCardsArr[i]);
  }
}

// SUBMIT NEW CARD TO DATABASE AND CREATE CARD=======
$('#intSubmit').on('click', (event)=> {
  let interested_obj = {
    message: $('#intMessage').val(),
    skill_id: $()
  };

  $.ajax({
    contentType: 'application/json',
    type: "POST",
    url: '/skillBoard',
    data: JSON.stringify(interested_obj),
    dataType: 'json',
  })
  .done((data) => {
    $('#interestedModal').modal('hide');
    addNewSkill(data);
    emptyForm();
  })
  .fail(() => {
    console.log('not submitting message');
  });
});







//END DOC READY
});
