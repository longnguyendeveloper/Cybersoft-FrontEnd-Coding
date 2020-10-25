var tinhChuVi = function (cDai, cRong) {
    var cv = (Number(cDai) + Number(cRong)) * 2;
    return cv;
}


var tinhDienTich = function (cDai, cRong) {
    var dt = Number(cDai) * Number(cRong);
    return dt;
}

// Get id querySelector
document.querySelector('#btnTinh').onclick = function () {
    var inputChieuDai = document.querySelector('#txtInputLength').value;
    console.log(inputChieuDai);
    var inputChieuRong = document.querySelector('#txtInputWidth').value;

    var outputChuVi = document.querySelector('#txtOutputChuVi');
    var outputDienTich = document.querySelector('#txtOutputDienTich');

    var tChuVi = tinhChuVi(inputChieuDai, inputChieuRong);
    var tDienTich = tinhDienTich(inputChieuDai, inputChieuRong);
    outputChuVi.innerHTML = tChuVi();
    outputDienTich.innerHTML = tDienTich();
}


