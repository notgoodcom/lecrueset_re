// 이미지json 불러오기

// window.onload = function () {
//     startLoadFile();
// };

//     function startLoadFile(){
//         $.ajax({
//             url: './img.json',
//             type: 'GET',
//             dataType : 'json',
//             success : function (data) {
//                 createImages(data)
//             }
//         });
//     }
    
//     // JSON 포멧 데이터 처리
//     function createImages(objImageInfo) {
//         var images = objImageInfo.topBanner; //top banner
//         var slide = objImageInfo.bannerNav; //main slider
//         var bn = objImageInfo.middleBanner; //main slider
//         var strDOM = "";
//         var strDOM02 = "";
//         var strDOM03 = "";

//         for (var i = 0; i < images.length; i++) {
//             // N번째 이미지 정보를 구하기
//             var image = images[i];
    
//             //  N번째 이미지 패널을 생성
//             strDOM += '<a class="imgWrap" href="' + image.src + '"style="background-image:url(' + image.url + ')">';
//             // strDOM += '<img src="' + image.url + '" alt="' + image.name +'">';
//             strDOM += '</a>';
//         }

//         for (var i = 0; i < slide.length; i++) {
//             // N번째 이미지 정보를 구하기
//             var sd = slide[i];
    
//             //  N번째 이미지 패널을 생성
//             strDOM02 += '<div class="slider" style="background-image:url(' + sd.imageUrl + ')">';
//             strDOM02 += '<div class="wrap">';
//             strDOM02 += '<div class="sliderInfo">';
//             strDOM02 += '<div class="cate">' + sd.cate + '</div>';
//             strDOM02 += '<div class="line"></div>';
//             strDOM02 += '<div class="slideTitle">' + sd.title + '</div>';
//             strDOM02 += '<div class="slideTxt">' + sd.txt + '</div>';
//             strDOM02 += '<a class="btn btn-line" href="' + sd.url + '">VIEW MORE</a>';
//             strDOM02 += '</div>';
//             strDOM02 += '</div>';
//             strDOM02 += '</div>';    

//             var strDOM02 = "<div class='slider' style='background-image:url('" + sd.imageUrl + "')'></div>"


//         }

//         for (var i = 0; i < bn.length; i++) {
//             // N번째 이미지 정보를 구하기
//             var banner = bn[i];
    
//             //  N번째 이미지 패널을 생성
//             strDOM03 += '<a class="bnBox" href="' + banner.src + '">';
//             strDOM03 += '<img src="' + banner.imageUrl + '" alt="' + banner.name +'">';
//             strDOM03 += '</a>';
//         }

//         // 이미지 컨테이너에 생성한 이미지 패널들을 추가하기
//         var $bnContainer = $(".topBanner");
//         var $imageContainer = $(".sliderWrap");
//         var $midBnContainer = $(".bannerWrap");

//         $bnContainer.append(strDOM);
//         $imageContainer.append(strDOM02);
//         $midBnContainer.append(strDOM03);



//     }


// const jsonUrl = "./img.json";
// $.getJSON(jsonUrl,function(data){
// 	const items = data.bannerNav;
    
//     var strDOM02 = "";


//     for (var i = 0; i < items.length; i++) {
//         const sd = items[i]; //code, name
    
        
//         strDOM02 += '<div class="slider" style="background-image:url(' + sd.imageUrl + ')">';
//         strDOM02 += '<div class="wrap">';
//         strDOM02 += '<div class="sliderInfo">';
//         strDOM02 += '<div class="cate">' + sd.cate + '</div>';
//         strDOM02 += '<div class="line"></div>';
//         strDOM02 += '<div class="slideTitle">' + sd.title + '</div>';
//         strDOM02 += '<div class="slideTxt">' + sd.txt + '</div>';
//         strDOM02 += '<a class="btn btn-line" href="' + sd.url + '">VIEW MORE</a>';
//         strDOM02 += '</div>';
//         strDOM02 += '</div>';
//         strDOM02 += '</div>';   
    
//       }
    
//       $(".sliderWrap").append(strDOM02);

// })



var data = {
    "topBanner" : [
        {
            "name" : "topBanner",
            "url" : "images/bannerTop.jpg",
            "src" : "#"
        }
    ],
    "bannerNav": [
        {
            "name" : "nav01",
            "imageUrl" : "images/slider01.jpg",
            "num" : "1",
            "cate" : "sale",
            "title" : "Summer Lovin'",
            "txt" : "올 여름 식탁, 시원하고 청량한 컬러감으로 찾아갑니다.",
            "url" : "#"
        },
        {
            "name" : "nav02",
            "imageUrl" : "images/slider02.jpg",
            "num" : "2",
            "cate" : "new",
            "title" : "북유럽 컬렉션",
            "txt" : "베스트 아이템 단품 출시"
        },
        {
            "name" : "nav03",
            "imageUrl" : "images/slider03.jpg",
            "num" : "3",
            "cate" : "best",
            "title" : "르크루제 시그니쳐",
            "txt" : "부엌의 여왕"
        }
    ],
    "middleBanner" : [
        {
            "name" : "middleBanner",
            "imageUrl" : "images/middleBn.jpg",
            "num" : "1",
            "src" : "#"
        }
    ],
    " collection": [
        {
            "name" : "le creuset pet",
            "imageUrl" : "images/collic_bn01.jpg",
            "src" : "#"
        },
        {
            "name" : "북유럽 컬렉션",
            "imageUrl" : "images/collic_bn02.jpg",
            "src" : "#"
        }
    ]
};

data.topBanner.forEach( function(obj) {
    var img = new Image();
    img.src = obj.url;
    img.setAttribute("class", "banner-img");
    img.setAttribute("alt", "effy");
    document.getElementById("topBanner").append(img);
  });

