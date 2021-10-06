$(function (){
    $(window).on('scroll',function(){
        //script for sticy menu;
        var scroolpostion=$(window).scrollTop();
        if(scroolpostion > 0){
            $('#main-nav').addClass('stickynav');
        }else{
            $('#main-nav').removeClass('stickynav');
        }
    
        //back to top
        if(scroolpostion > 600){
            $('#back').fadeIn(1000);
        }else{
            $('#back').fadeOut(1000);
        }
        
        
    })
    $('#back').on('click',function(){
        $("html,body").animate({
            scrollTop:0
        },1000)
    })
    $('.active ').slick({
        prevArrow:"<i class='fas fa-chevron-left banner_arrow'></i>",
       nextArrow:"<i class='fas fa-chevron-right banner_arrow'></i>",

    })
    $('.slider ').slick({
        prevArrow:"<i class='fas fa-chevron-left banner_arrow'></i>",
       nextArrow:"<i class='fas fa-chevron-right banner_arrow'></i>",
       slidesToShow: 3,
    })
})