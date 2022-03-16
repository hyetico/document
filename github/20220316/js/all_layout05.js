$(function(){
//////////////
/* function 탭메뉴작동(){
    var idx = $(this).index();
    $('.tabLink li').removeClass('active');
    $(this).addClass('active');
    $('.tabContent > div').removeClass('active');
    $('.tabContent > div').eq(idx).addClass('active');

}
$('.tabLink li').on('click', 탭메뉴작동); */

function tabMenu(){
    var idx = $(this).index();
    $('.tabLink li').removeClass('active');
    $(this).addClass('active');
    $('.tabContent > div').eq(idx).addClass('active')
    .siblings().removeClass('active');   
    }

    $('.tabLink li').on('click',tabMenu);

    $('.xi-touch').on('click',function(){
    $('.headerWrap').slideToggle();
    

    })
      


});
