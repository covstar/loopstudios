$(document).ready(function(){


    $(".hamburger").click(function(){
        $('.mobile-nav').slideDown(300);
        $(this).hide();
        $('.close').show();
    })

    $(".close").click(function(){
        $('.mobile-nav').slideUp(300);
        $(this).hide();
        $('.hamburger').show();
    })

});