$(function(){
//////////////////////////////////

$('.mainSlide').slick({
    arrows:false, /*화살표를 없애준다*/
    autoplay:true, /* 자동으로 돌아준다*/
    autoplaySpeed:2000,
    /* speed : 1000*/
     dots:true,
});

$('.mainVisual .slideArrows i:first-child').on('click',function(){
    $('.mainSlide').slick('slickPrev')
});
$('.mainVisual .slideArrows i:last-child').on('click',function(){
    $('.mainSlide').slick('slickNext')
});

//////////////////////////////////
}); 