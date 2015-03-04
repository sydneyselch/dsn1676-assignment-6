var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $list = $('.list');




$btnShowHide.on('click', function (){
    $box.toggleClass('js-btn-show-hide');
});


$btnMove.on('click', function (){
    $diamond.toggleClass('js-btn-move');
});


$btnCollapseExpand.on('click', function (){
    $panel.toggleClass('js-btn-collapse-expand');
});

    
$btnBounce.on('click', function (){
    $circle.addClass('js-btn-bounce');
});

$circle.on('webkitAnimationEnd animationend', function (){
    $circle.removeClass('js-btn-bounce');
});
    


$btnAppend.on('click', function (){
    var $theLi = $('<li> Text here </li>')
    $list.append($theLi)
    
    $theLi.addClass('js-li')
    
});

