$(function(){

    $("#content").load("content.html"); //content불러오기


    // gnb style

    $(".wrapper").on("mouseover",".menu li a",function(){
        var _this = $(this);
        $(".menu li a").removeClass("on");
        _this.addClass("on");
    });


    // subMenu open & close


    $(".wrapper").on("mouseover", ".menu li a, header.top .gnb .subGnb", function(){
        var sub = $("header.top .gnb .subGnb");
        sub.show(); 
    });

    $(".wrapper").on("mouseout", "header.top .gnb .subGnb", function(){
        var sub = $("header.top .gnb .subGnb");
        sub.hide();
        $(".menu li a").removeClass("on"); 
    });


    //submenu and menu hover

    $(".wrapper").on("mouseover",".subGnb .subMenu .wrap .sub",function(){
        var idx = $(".subGnb .subMenu .wrap .sub").index(this);
        var menu = $(".menu li a");

        menu.eq(idx).addClass("on");
        
    });


    var slider = $('.items').bxSlider({
        auto: false,
        slideWidth: '1040px',
        slideHeight: '250px',
        minSlides: 6,
        maxSlides: 6,
        moveSlides: 1,
        slideMargin: 10,
        pager:false,
        controls:false,
        delay:500,
        autoHover:true,
        responsive:true,
        nextSelector: '.cl01_list .right-arrow',
        prevSelector: '.cl01_list .left-arrow',
        useCSS: true
    });

});
