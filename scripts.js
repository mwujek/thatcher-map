var tooltip = $('#tools');
var tipAdjustX = 25;
var tipAdjustY = -18;
var slideSpeed = 1000;
//var scrollTo2 = "#scrollTo2";
//click to add SVG File



//What happens when hovering over button
function mouseOnButton(itemLocalz, moreInfo, elementCategory){
  $(tooltip).html('<h1>'+itemLocalz+'</h1>' + '<h2>'+moreInfo+'</h2>');
  if(elementCategory === 'people'){
    $(tooltip).removeClass('misc-tooltip');
    $(tooltip).removeClass('traditions-tooltip');
    $(tooltip).addClass('people-tooltip');

  } else if (elementCategory === 'traditions'){
    $(tooltip).removeClass('misc-tooltip');
    $(tooltip).removeClass('people-tooltip');
    $(tooltip).addClass('traditions-tooltip');
  } else {
    $(tooltip).removeClass('people-tooltip');
    $(tooltip).removeClass('traditions-tooltip');
    $(tooltip).addClass('misc-tooltip');
  }
  
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
$( ".button, .circle-cities" ).hover(
  function() {
    $(tooltip).addClass('show');
  }, function() {
    $(tooltip).removeClass('show');
  });

//Updates location of Hovering Description
$( ".button, .circle-cities" ).mousemove(function(event) {
  var currentMousePos = { x: -1, y: -1 };
  currentMousePos.x = event.pageX;
  currentMousePos.y = event.pageY;

  $(tooltip).css({
    'top':(currentMousePos.y + tipAdjustY),
    'left':(currentMousePos.x+ tipAdjustX)
  });
});

//Simple Hover effect.
//Uses function to change color and HTML text. 
//See functions above
$( ".button, .circle-cities" ).hover(function() {
    var menuAttr = $(this).data('element');
    var info = $(this).data('info');
    var category = $(this).data('category');
    mouseOnButton(menuAttr, info, category);
  }, function() {mouseOnButton(); } );



//map circle functions

function openTab3(scrollHere, category){

      //var currentItem = $(this); // get data below
      //var scrollHere = currentItem.data('title');
      //var category = currentItem.data('category');
      category = '#'+category;
      //var currentScrollID = '#'+whereToScroll;

      if($(category).hasClass('currentz')){

        $(category).next().children("h1").removeClass('activeItem'); //remove active class from the entry
        moveToTop();
        setTimeout(function(){openTab2(scrollHere);},1300);
      } else{

      $(category).next().children("h1").removeClass('activeItem'); //remove active class from the entry
      $(category).next(".pane").siblings(".pane:visible").slideUp(slideSpeed); // collapse all other tabls
      setTimeout(function(){
      $(category).next(".pane").slideToggle(slideSpeed);
        setTimeout(function(){
          $(category).toggleClass("currentz");
          },100);
      },1000); // open current slide
      
      $(category).siblings("h3").removeClass("currentz"); //remove any effects before the scrolling takes place
      $(category).children("h1").removeClass('activeItem');
      moveToTop();
     
      setTimeout(function(){openTab2(scrollHere);},1500);
      }

  
}



   


  //$('.circle-map').html('c!!!!');
  
  $('.circle-map, .circle-cities').on('click', function(){
    var scrollHere = $(this).data('title');
    var category = $(this).data('category');
    openTab3(scrollHere, category);
    //window.alert(scrollHere);
  });


// Accordion


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

