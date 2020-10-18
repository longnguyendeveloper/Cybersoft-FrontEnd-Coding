//----------- Bài tập tính tiền tip---------------
document.querySelector('#btnTinhTien').onclick = function () {
    // Lấy thông tin người dùng nhập vào
    var tongTien = document.getElementById('txtTongTien').value;
    var phanTramTip = document.getElementById('phanTramTip').value;
    var soNguoiShare = document.getElementById('soNguoiShare').value;
    var tongTienTip = document.getElementById('tongTienTip');

    // Tính toán
    var tienTip = function () {
        return (Number(tongTien) * (Number(phanTramTip) / 100) / Number(soNguoiShare));
    }
    console.log('tien tiep', tienTip());

    // In ra giao diện
    // toFixed: lấy số sau phần thập phân
    // toLocaleString: cứ 3 chữ số, tự động thêm dấu "," dùng để ghi giá tiền
    tongTienTip.innerHTML = tienTip().toLocaleString() + '$';

}