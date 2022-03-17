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















}); // ready end