
var timelineWidth = 0;
var panelWidth = 0;
var firstRun = true;
var totalPanels = 0;
var currentPanel = 0;


$(function(){

    panelWidth = $('.timeline .panel').width();
    timelineWidth = $('.timeline').width();
    totalPanels = $('.timeline .panel').length;

    adjustLayout();

});

function adjustLayout(){

    $('.timeline .panel').each(function(index){

      var newX = panelWidth * index;

      $(this).css('left', `${newX}px`);

      var newLabel = $(this).find('.label').html();

      $('.timeline-nav').append(`<div class="nav-link">${newLabel}</div>`);


    });


    currentPanel = $('.timeline-nav .nav-link:last-child()').index();

    activateNav();

}
//
function activateNav(){

  $('.timeline-nav .nav-link').on('click',function(){

    currentPanel = $(this).index();

    $('.timeline-nav .nav-link').removeClass('selected');
    $(this).addClass('selected');

    var timelineOffset = (timelineWidth-panelWidth)*.5;
    var newPosition = ((currentPanel*panelWidth) * -1)+timelineOffset;

    $('.panel-slider').animate({'left':newPosition + 'px'}, 1000);


    var backgroundWidth = $('.background-slider img').width();
    var moveAmount = (backgroundWidth - timelineWidth) / totalPanels;

    if(currentPanel != 0){
      var multiplier = currentPanel+1;
    }
    else {
      var multiplier = 0;
    }

    var newBgPosition = (moveAmount * multiplier)*-1;

    $('.background-slider img').animate({left:newBgPosition+'px'},1000);

  });

}
