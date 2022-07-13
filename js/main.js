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

    //

    var instaItem = $(".instagramList .listWrap") 
    $.getJSON('./img.json', function(imgData){
        $.each(imgData[3], function(i, inObj){
            var instItem = '';
            instItem += '<div class="insta-item '+ inObj.class +'" style="background-image:url('+ inObj.src +')">';
            instItem += '</div>';
            instaItem.append(instItem);
        });        

        $("#instItemWrap").slick({
            autoplay: true,
            accessibility: true,
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            adaptiveHeight: false, 
            arrows: true
        });

        $('.instaPrev').click(function(){
            $("#instItemWrap").slick('slickPrev');
        });
        $('.instaNext').click(function(){
            $("#instItemWrap").slick('slickNext');
        });

    });

});
