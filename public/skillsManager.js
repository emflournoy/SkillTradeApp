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
