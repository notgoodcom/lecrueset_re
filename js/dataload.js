

//데이터 불러오기

window.onload = function () {
    startDateFile();
};

function startDataFile(){
    $.ajax({
        url: './data/data.json',
        type: 'GET',
        dataType : 'json',
        cache : false,
        async: true,
        success : function (data) {
            createData(data)
        }
    });
}

// JSON 포멧 데이터 처리
function createData(objImageInfo) {
    var cs = objImageInfo.cs; //cs
    var str01 = "";

    for (var i = 0; i < cs.length; i++) {
        // N번째 이미지 정보를 구하기
        var obj = cs[i];

        //  N번째 이미지 패널을 생성
        str01 += '<div class="itemWrap" style="background-image:url('+ cs.image +')">';
        str01 += '<div class="itemTxtWrap">';
        str01 += '<h6 class="itemTitle">' + cs.name +'</h6>';
        str01 += '<p class="itemPriceWrap"><em class="discountBefore">' + cs.price +'</em><span class="discount">' + cs.finalPrice +'</span></p>';
        str01 += '</div>';
        str01 += '</div>';
    }

    // 이미지 컨테이너에 생성한 이미지 패널들을 추가하기
    var $sec01Container = $(".itemSlider");

    $sec01Container.append(str01);


}