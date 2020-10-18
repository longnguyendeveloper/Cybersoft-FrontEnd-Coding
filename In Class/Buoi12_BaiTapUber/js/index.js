// Yêu cầu lấy thông tin người dùng nhập vào (loaiXe, soKm, thoiGianCho)

// Khi người dùng bấm vào nút tính tiền -> tính tiền dựa trên công thức đề bài

// Hằng
const UBERX_1KM = 8000;
const UBERX_20KM = 12000;
const UBERX_UP21KM = 10000;
const UBERX_TIME = 2000;

const UBERSUV_1KM = 9000;
const UBERSUV_20KM = 14000;
const UBERSUV_UP21KM = 12000;
const UBERSUV_TIME = 3000;

const UBERBLACK_1KM = 10000;
const UBERBLACK_20KM = 16000;
const UBERBLACK_UP21KM = 14000;
const UBERBLACK_TIME = 4000;
var loaiXe = 'uberX';

document.querySelector('#uberX').onclick = function () {
    loaiXe = 'uberX';
}

document.querySelector('#uberSUV').onclick = function () {
    loaiXe = 'uberSUV';
}

document.querySelector('#uberBlack').onclick = function () {
    loaiXe = 'uberBlack';
}

console.log('Loại xe', loaiXe);

document.querySelector('button.contact100-form-btn').onclick = function () {
    //lấy thông số km và thời gian chờ
    var soKm = document.querySelector('#soKM').value;
    var thoiGianCho = document.querySelector('#thoiGianCho').value;
    var tongTien = '';

    //Sử dụng if else hoặc switch case theo loaiUber để tính tiền
    switch (loaiXe) {
        case 'uberX':
            var tienThoiGianCho = Number(thoiGianCho) * UBERX_TIME;
            if (soKm <= 1) {
                tongTien = UBERX_1KM + Number(tienThoiGianCho);
            }
            else if (soKm <= 20) {
                tongTien = UBERX_20KM * (Number(soKm) - 1) + UBERX_1KM + Number(tienThoiGianCho);
            }
            else {
                tongTien = UBERX_UP21KM * (Number(soKm) - 20) + UBERX_1KM + (UBERX_20KM * 19) + Number(tienThoiGianCho);
            }
            break;

        case 'uberSUV':
            if (soKm <= 1) {
                tongTien = UBERSUV_1KM + Number(thoiGianCho) * UBERSUV_TIME;
            }
            else if (soKm <= 20) {
                tongTien = UBERSUV_20KM * (Number(soKm) - 1) + UBERSUV_1KM + Number(thoiGianCho) * UBERSUV_TIME;
            }
            else {
                tongTien = UBERSUV_UP21KM * (Number(soKm) - 20) + UBERSUV_1KM + (UBERSUV_20KM * 19) + Number(thoiGianCho) * UBERSUV_TIME;
            }
            break;

        case 'uberBlack':
            if (soKm <= 1) {
                tongTien = UBERBLACK_1KM + Number(thoiGianCho) * UBERBLACK_TIME;
            }
            else if (soKm <= 20) {
                tongTien = UBERBLACK_20KM * (Number(soKm) - 1) + UBERBLACK_1KM + Number(thoiGianCho) * UBERBLACK_TIME;
            }
            else {
                tongTien = UBERBLACK_UP21KM * (Number(soKm) - 20) + UBERBLACK_1KM + (UBERBLACK_20KM * 19) + Number(thoiGianCho) * UBERBLACK_TIME;
            }
            break;
    }

    console.log('Tong tien', tongTien);



    //In ra số tiền lên giao diện đồng thời
    document.querySelector('#divThanhTien').style.display = 'block';

    // Hiện thị div chứa số tiền
    document.querySelector('.xuatTien').innerHTML = tongTien.toLocaleString();
}
