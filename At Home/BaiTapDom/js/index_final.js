
var tinhChuVi = function (cDai, cRong) {
    var cv = (Number(cDai) + Number(cRong)) * 2;
    return cv;
}

var tinhDienTich = function (cDai, cRong) {
    var dt = Number(cDai) * Number(cRong);
    return dt;
}


document.querySelector('#btnTinh').onclick = function () {
    var chieuDai = document.querySelector('#chieuDai').value;
    var chieuRong = document.querySelector('#chieuRong').value;
    var tChuvi = tinhChuVi(chieuDai, chieuRong);
    var tDienTich = tinhDienTich(chieuDai, chieuRong);

    var outputChuVi = document.querySelector('#chuVi');
    var outputDienTich = document.querySelector('#dienTich');

    outputChuVi.innerHTML = tChuvi;
    outputDienTich.innerHTML = tDienTich;
}