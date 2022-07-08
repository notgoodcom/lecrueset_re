$(function(){

    $("#content").load("content.html"); //content불러오기


    // 이미지json 불러오기

    window.onload = function () {
        startLoadFile();
    };
    
        function startLoadFile(){
            $.ajax({
                url: './img.json',
                type: 'GET',
                dataType : 'json',
                success : function (data) {
                    createImages(data)
                }
            });
        }
        
        // JSON 포멧 데이터 처리
        function createImages(objImageInfo) {
            var images = objImageInfo.topBanner; //top banner
            var slide = objImageInfo.bannerNav; //main slider
            var strDOM = "";
            for (var i = 0; i < images.length; i++) {
                // N번째 이미지 정보를 구하기
                var image = images[i];
        
                //  N번째 이미지 패널을 생성
                strDOM += '<a class="imgWrap" href="' + image.src + '"style="background-image:url(' + image.url + ')">';
                // strDOM += '<img src="' + image.url + '" alt="' + image.name +'">';
                strDOM += '</a>';
            }

            for (var i = 0; i < slide.length; i++) {
                // N번째 이미지 정보를 구하기
                var sd = slide[i];
        
                //  N번째 이미지 패널을 생성
                strDOM += '<div class="slider" style="background-image:url(' + sd.imageUrl + ')">';
                strDOM += '<div class="wrap">';
                strDOM += '<div class="sliderInfo">';
                strDOM += '<div class="cate">' + sd.cate + '</div>';
                strDOM += '<div class="line"></div>';
                strDOM += '<div class="slideTitle">' + sd.title + '</div>';
                strDOM += '<div class="slideTxt">' + sd.txt + '</div>';
                strDOM += '<a class="btn btn-line" href="' + sd.url + '">VIEW MORE</a>';
                strDOM += '</div>';
                strDOM += '</div>';
                strDOM += '</div>';
            }
                
            // 이미지 컨테이너에 생성한 이미지 패널들을 추가하기
            var $bnContainer = $(".topBanner");
            var $imageContainer = $(".sliderWrap");

            $bnContainer.append(strDOM);
            $imageContainer.append(strDOM);

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


    //submenu hover

    // $(".wrapper").on("mouseover",".subGnb .subMenu .wrap .sub",function(){
    //     var _this = $(this);
    //     var menu = $(".menu li");

    //     if(_this == 0) {
    //         menu.eq(0).children(a).addClass("on");
    //     }
    // });

    $(".subGnb .subMenu .wrap .sub").each(function(index){
        var _this = $(this);
        var menu = $(".menu li");

        if(_this + index == menu + index) {
            _this.mouseover(function(){
                menu.eq(index).addClass("on");
            });
        }
    });

});
