
var tinhChuVi = function (cDai, cRong) {
    var cv = (Number(cDai) + Number(cRong)) * 2;
    return cv;
}

var tinhDienTich = function (cDai, cRong) {
    var dt = Number(cDai) * Number(cRong);
    return dt;
}
var radio = '';
document.querySelector('#red').onclick = function () {
    radio = 'red';
}

document.querySelector('#orange').onclick = function () {
    radio = 'orange';
}

document.querySelector('#blue').onclick = function () {
    radio = 'blue';
}

document.querySelector('#btnTinh').onclick = function () {
    // giá trị default 
    // lấy thông số
    var chieuDai = document.querySelector('#chieuDai').value;
    var chieuRong = document.querySelector('#chieuRong').value;
    var outputChuVi = document.querySelector('#chuVi');
    var outputDienTich = document.querySelector('#dienTich');
    var drawImage = document.querySelector('#createImage');

    // gọi lại công thức tính chu vi & diện tích
    var tChuvi = tinhChuVi(chieuDai, chieuRong);
    var tDienTich = tinhDienTich(chieuDai, chieuRong);
    // Xử lý cho radio
    switch (radio) {
        case 'red':
            drawImage.style.backgroundColor = 'red';
            drawImage.style.height = chieuRong + 'px';
            drawImage.style.width = chieuDai + 'px';
            break;

        case 'orange':
            drawImage.style.backgroundColor = 'orange';
            drawImage.style.height = chieuRong + 'px';
            drawImage.style.width = chieuDai + 'px';
            break;

        case 'blue':
            drawImage.style.backgroundColor = 'blue';
            drawImage.style.height = chieuRong + 'px';
            drawImage.style.width = chieuDai + 'px';
            break;
    }
    console.log('màu:', radio);
    outputChuVi.value = tChuvi;
    outputDienTich.value = tDienTich;
}