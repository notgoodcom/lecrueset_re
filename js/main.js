$(function(){

    $("#content").load("content.html"); //content불러오기
    $(".popUpArea").load("popUp.html"); //popup 불러오기



    // price comma

    function comma(str) {
        str = String(str);
        var minus = str.substring(0, 1);
        str = str.replace(/[^\d]+/g, '');
        str = str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,'); 
        //음수일 경우   
        if(minus == "-") str = "-"+str;
            return str;
    }
         
        


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


    //cate effect

    $(".wrapper").on("click",".cateNav li button",function(){
        var _this = $(this);
        $(".cateNav li button").parents("li").removeClass("on")
        if(_this.parents("li").hasClass("on")){
            $(".cateNav li button").parents("li").removeClass("on")
        } else {
            _this.parents("li").addClass("on");
        }
    });

});
