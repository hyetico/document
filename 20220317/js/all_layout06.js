$(function(){
///////////////////////////////////

// topBanner : kang 2022.03.17 m

function topBannerHandler(){
   //$('.topBanner').hide(); - display-none;
   $('.topBanner').slideUp();
}
$('.topBanner .container i').on('click',topBannerHandler);

$('.visualSlide').slick({
   arrows:false,
   autoplay:true,
   autoplayspeed:1000,
   dots:true,
});
//slick 애니메이션에 첫 이미지에 글씨가 움직이지 않는다.
//afterchange callback 현재 슬라이드가 바뀌는 순간 글씨를 움직여줄수 있다.
/* $('.visualSlide').on('beforeChange',function(){
   console.log('슬라이드시작 전');;
})
$('.visualSlide').on('afterChange',function(){
   console.log('슬라이드시작 후');;
})
 */
/* $('.visualSlide').on('afterChange',function(){
   var currentSlide = $('.visualSlide').slick('slickCurrentSlide');
   $('.visualSlide').eq(currentSlide).addClass('클래스이름을정해준다').siblings().removeClass('클래스이름을정해준다');
}) */
$('.visualSlide figure').eq(1).addClass('oo');
$('.visualSlide').on('afterChange',function(e,s,c){
   console.log(e,s,c); //1
  $('.visualSlide figure').eq(c+1).addClass('oo').siblings().removeClass('oo');
})

$('.eProductSlide').slick({
   arrows:false,
   autoplay:true,  
});
$('.eventProduct .allows i:first-child').on('click',function(){
   $('.eProductSlide').slick('slickPrev')
});
$('.eventProduct .allows i:last-child').on('click',function(){
   $('.eProductSlide').slick('slickNext')
});
   

$('.aproductSlide').slick({
   arrows: false,
   dots: true,
   slidesToShow: 5,
   centerMode: true,
});

$('.allProduct i:first-child').on('click',function(){
   $('.aproductSlide').slick('slickPrev')
});
$('.allProduct i:last-child').on('click',function(){
   $('.aproductSlide').slick('slickNext')
});


}); // ready end