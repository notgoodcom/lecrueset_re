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

    //section01 hover 

    $(".wrapper").on("mouseenter", ".itemSlider .items .itemBox", function(){
        var _this = $(this);
        if(_this.hasClass('on')){
            $(".itemSlider .items .itemBox").removeClass("on");
        }else{
            _this.addClass("on");
        }
    });

    $(".wrapper").on("mouseleave", ".itemSlider .items .itemBox", function(){
        $(".itemSlider .items .itemBox").removeClass("on");
    });



});
