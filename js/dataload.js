

//데이터 불러오기

window.onload = function () {
    startDataFile();
};

function startDataFile(){
    $.ajax({
        url: 'data/data.json',
        type: 'GET',
        dataType : 'json',
        cache : false,
        success : function (data) {
            createData(data)
        }
    });
}

// JSON 포멧 데이터 처리
function createData(objImageInfo) {
    var cs = objImageInfo.newItem; //cs
    var best = objImageInfo.bestItem; //cs
    var str01 = "";
    var str02 = "";

    for (var i = 0; i < cs.length; i++) {
        // N번째 이미지 정보를 구하기
        var obj = cs[i];

        //  N번째 이미지 패널을 생성
        str01 += '<div class="item" style="background-image:url('+ obj.image +')">';
        str01 += '<div class="itemTxtWrap">';
        str01 += '<h6 class="itemTitle">' + obj.name +'</h6>';
        str01 += '<p class="itemPriceWrap"><em class="discountBefore">' + obj.price +'</em><span class="discount">' + obj.finalPrice +'</span></p>';
        str01 += '</div>';
        str01 += '</div>';
    }

    for (var i = 0; i < best.length; i++) {
        // N번째 이미지 정보를 구하기
        var bs = best[i];

        //  N번째 이미지 패널을 생성
        str02 += '<div class="itemWrap">';
        str02 += '<div class="itemImg" style="background-image:url('+ bs.image +')"></div>';
        str02 += '<div class="itemInfo">';
        str02 += '<p class="itemCate">' + bs.cate +'</p>';
        str02 += '<a class="itemName">' + bs.name +'</a>';
        str02 += '<p class="itemPrice"><em class="discountBefore">' + bs.price +'</em><span class="discount">' + bs.finalPrice +'</span></p>';
        str02 += '</div>';
        str02 += '</div>';
    }

    // 이미지 컨테이너에 생성한 이미지 패널들을 추가하기
    var $sec01Container = $(".items");
    var $sec02Container = $(".bestItem");

    $sec01Container.append(str01);
    $sec02Container.append(str02);


}