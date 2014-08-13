var tooltip = $('#tools');
var tipAdjustX = -47;
var tipAdjustY = 8;
//var scrollTo2 = "#scrollTo2";

//What happens when hovering over states
function mouseOnS(StateName, info){
  $(tooltip).html(StateName + ' ' +info);
  $(tooltip).css('background', 'white');
}
//What happens when hovering over cities
function mouseOnC(CityName, info){
  $(tooltip).html(CityName + ' ' +info);
  $(tooltip).css('background', '#ddd');
}

//Last Function that tells the div to animate down towards the desire content
//Destination is the ID of the HTML element.
// (Example: var scrollTo2 = "#scrollTo2";)

// function openTab(destination){
//   var goHere = $(destination);
//   var AmountOffset = goHere.offset(); 
//   $('.accordion').animate({scrollTop: AmountOffset.top}, 1000);
// }
function moveToTop(){
  $('.accordion').animate({scrollTop: 0 }, 500);
}
function openTab2(p){
  var sel = '#'+p;
  //console.log(sel);
  var AmountOffset = $(sel).offset(); 
  
  $('.accordion').animate({scrollTop: AmountOffset.top-237 }, 1000);
  setTimeout(function(){
    $(sel).addClass('activeItem');

  },800);
}


//Adds class when hovering over states & cities
$( ".states, .cities" ).hover(
  function() {
    $(tooltip).addClass('show');
  }, function() {
    $(tooltip).removeClass('show');
  });

//Updates location of Hovering Description
$( ".states, .cities" ).mousemove(function(event) {
  var currentMousePos = { x: -1, y: -1 };
  currentMousePos.x = event.pageX;
  currentMousePos.y = event.pageY;

  $(tooltip).css({
    'top':(currentMousePos.y + tipAdjustX),
    'left':(currentMousePos.x+ tipAdjustY)
  });
});

//Simple Hover effect.
//Uses function to change color and HTML text. 
//See functions above
$( ".states" ).hover(function() {
    var stateName = $(this).data('statename');
    var info = $(this).data('info');
    mouseOnS(stateName, info);
  }, function() {mouseOnS(); } );

$( ".cities" ).hover(function() {
     var cityName = $(this).data('cityname');
     var info = $(this).data('info');
     mouseOnC(cityName, info);
}, function() {mouseOnC(); } );


// Accordion

var slideSpeed = 1000;

$(function () {
    //  Show and Hide
    $(".accordion div").show();
    $('.accordion div').slideToggle(800);
    $(".accordion h3").click(function () {  
      $(this).next(".pane").slideToggle(slideSpeed).siblings(".pane:visible").slideUp(slideSpeed);
      $(this).delay( slideSpeed*1.2 ).toggleClass("currentz");
      $(this).siblings("h3").removeClass("currentz");
      $(this).next().children("h1").removeClass('activeItem'); //remove active class from the entry
      //openTab();
    });

  });



    $('.states').click(function(){
      //var currentCategory = (this).data('category'); //pass this to the accordion, so it knows what to open and close
      //var currentItem = (this).data('title'); //pass this to the openTab function, so it knows where to scroll to!

      $('#places').next(".pane").siblings(".pane:visible").slideUp(slideSpeed);
      $('#places').next(".pane").slideToggle(slideSpeed);
      $('#places').toggleClass("currentz");
      $('#places').siblings("h3").removeClass("currentz");
      moveToTop();

      // openTab2('places-scroll-2');
      setTimeout(function(){openTab2('places-scroll-2');},1300);

      

    });

    $('#links-list li').click(function(){

      var currentItem = $(this); // get data below
      var whereToScroll = currentItem.data('title');
      var currentCategory = currentItem.data('category');
      currentCategory = '#'+currentCategory;
      //var currentScrollID = '#'+whereToScroll;

      if($(currentCategory).hasClass('currentz')){

        $(currentCategory).next().children("h1").removeClass('activeItem'); //remove active class from the entry
        moveToTop();
        setTimeout(function(){openTab2(whereToScroll);},1300);
      } else{

      //var totalEntries = $(currentCategory).next().children('h1').length); //get total number of entries in the current category. This is used to automate scrolling function
      //currentEntry =  //which entry are we scrolling to?
      //window.alert($(currentCategory).next().children('h1').index(currentItem));
      
      $(currentCategory).next().children("h1").removeClass('activeItem'); //remove active class from the entry
      $(currentCategory).next(".pane").siblings(".pane:visible").slideUp(slideSpeed); // collapse all other tabls
      setTimeout(function(){
      $(currentCategory).next(".pane").slideToggle(slideSpeed);
        setTimeout(function(){
          $(currentCategory).toggleClass("currentz");
          },100);
      },1000); // open current slide
      
      $(currentCategory).siblings("h3").removeClass("currentz"); //remove any effects before the scrolling takes place
      $(currentCategory).children("h1").removeClass('activeItem');
      moveToTop();
     

      //setTimeout(openTab2('people-scroll-4'),2000);

      setTimeout(function(){openTab2(whereToScroll);},1500);
      }

    });

