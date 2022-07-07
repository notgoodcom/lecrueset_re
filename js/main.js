$(function(){

    $("#content").load("content.html"); //content불러오기


    // top배너 불러오기

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
        var images = objImageInfo.topBanner;
        var strDOM = "";
        for (var i = 0; i < images.length; i++) {
            // N번째 이미지 정보를 구하기
            var image = images[i];
    
            //  N번째 이미지 패널을 생성
            strDOM += '<a class="imgWrap" href="' + image.src + '">';
            strDOM += '<img src="' + image.url + '" alt="' + image.name +'">';
            strDOM += '</a>';
        }
        // 이미지 컨테이너에 생성한 이미지 패널들을 추가하기
        var $imageContainer = $(".topBanner");
            $imageContainer.append(strDOM);
    }
});
