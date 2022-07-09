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
            var bn = objImageInfo.middleBanner; //main slider
            var strDOM = "";
            var strDOM02 = "";
            var strDOM03 = "";

            // for (var i = 0; i < images.length; i++) {
            //     // N번째 이미지 정보를 구하기
            //     var image = images[i];
        
            //     //  N번째 이미지 패널을 생성
            //     strDOM += '<a class="imgWrap" href="' + image.src + '"style="background-image:url(' + image.url + ')">';
            //     // strDOM += '<img src="' + image.url + '" alt="' + image.name +'">';
            //     strDOM += '</a>';
            // }

            // for (var i = 0; i < slide.length; i++) {
            //     // N번째 이미지 정보를 구하기
            //     var sd = slide[i];
        
            //     //  N번째 이미지 패널을 생성
            //     strDOM02 += '<div class="slider" style="background-image:url(' + sd.imageUrl + ')">';
            //     strDOM02 += '<div class="wrap">';
            //     strDOM02 += '<div class="sliderInfo">';
            //     strDOM02 += '<div class="cate">' + sd.cate + '</div>';
            //     strDOM02 += '<div class="line"></div>';
            //     strDOM02 += '<div class="slideTitle">' + sd.title + '</div>';
            //     strDOM02 += '<div class="slideTxt">' + sd.txt + '</div>';
            //     strDOM02 += '<a class="btn btn-line" href="' + sd.url + '">VIEW MORE</a>';
            //     strDOM02 += '</div>';
            //     strDOM02 += '</div>';
            //     strDOM02 += '</div>';
            // }

            // for (var i = 0; i < bn.length; i++) {
            //     // N번째 이미지 정보를 구하기
            //     var banner = bn[i];
        
            //     //  N번째 이미지 패널을 생성
            //     strDOM03 += '<a class="bnBox" href="' + banner.src + '">';
            //     strDOM03 += '<img src="' + banner.imageUrl + '" alt="' + banner.name +'">';
            //     strDOM03 += '</a>';
            // }
                
            var strDOM = images.name[0];
            var strDOM02 = slide.name[0];
            var strDOM03 = bn.name[0];

            // 이미지 컨테이너에 생성한 이미지 패널들을 추가하기
            var $bnContainer = $(".topBanner");
            var $imageContainer = $(".sliderWrap");
            var $midBnContainer = $(".bannerWrap");

            // $bnContainer.append(strDOM);
            // $imageContainer.append(strDOM02);
            // $midBnContainer.append(strDOM03);

            console.log(strDOM);
            console.log(strDOM02);
            console.log(strDOM03);

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


});
