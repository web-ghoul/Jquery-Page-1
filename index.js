$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('.header').css({
                "position":"fixed",
            })
        }
        else{
            $('.header').css({
                "position":"relative",
            })
        }
    })



    //Slide
    $('.slide .contain  .left').click(function(){
        $('.slide .contain .content .box').each(function(){
            $('.slide .contain .content .one').css({
                display:'none'
            })
            $('.slide .contain .content .four').css({
                display:'grid'
            })
        })
    })
    $('.slide .contain  .right').click(function(){
        $('.slide .contain .content .one').css({
            display:'grid'
        })
        $('.slide .contain .content .four').css({
            display:'none'
        })
    })


    //List
    $('.header .contain .list').click(function(){
        if($('.header .contain .tools').hasClass('hover2')){
            $('.header .contain .tools').addClass('hover1');
            $('.header .contain .tools').removeClass('hover2');
        }
        else{
            $('.header .contain .tools').addClass('hover2');
            $('.header .contain .tools').removeClass('hover1');
        }
    })
    $('.header .contain .tools .tool').each(function(){
        $(this).click(function(){
            $('.header .contain .tools').addClass('hover2');
            $('.header .contain .tools').removeClass('hover1');
        })
    })
})