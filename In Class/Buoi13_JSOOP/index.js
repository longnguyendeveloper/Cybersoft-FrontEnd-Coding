// xây dựng phương thức tính điểm trung binh
var diemTrungBinh = function (dToan, dLy, dHoa) {
    var dtb = (Number(dToan) + Number(dLy) + Number(dHoa)) / 3;
    return dtb;
}

var xepLoaiSinhVien = function (diemTrungBinh, diemRenLuyen) {
    if (diemRenLuyen < 5) {
        return 'Yếu';
    }
    else {
        if (diemTrungBinh < 5) {
            return 'Yếu';
        }
        else if (diemTrungBinh >= 5 && diemTrungBinh < 6) {
            return 'Trung bình';
        } else if (diemTrungBinh >= 6 && diemTrungBinh < 7) {
            return 'Trung bình-Khá';
        } else if (diemTrungBinh >= 7 && diemTrungBinh < 8) {
            return 'Khá';
        }
        else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
            return 'Giỏi';
        }
        else if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
            return 'Xuất sắc';
        } else {
            return 'Yếu';
        }
    }
}

// cài đặt sự kiện khi người dùng bấm nút xác nhận
document.querySelector('#btn-xacNhan').onclick = function () {
    //Lấy thông tin người dùng nhập từ giao diện
    var maSinhVien = document.querySelector('#maSinhVien').value;
    var tenSinhVien = document.querySelector('#tenSinhVien').value;
    var loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    var diemToan = document.querySelector('#diemToan').value;
    var diemLy = document.querySelector('#diemLy').value;
    var diemHoa = document.querySelector('#diemHoa').value;
    var dRenLuyen = document.querySelector('#diemRenLuyen').value;

    var texttenSinhVien = document.querySelector('#text-tenSinhVien');
    var textmaSinhVien = document.querySelector('#text-maSinhVien');
    var textloaiSinhVien = document.querySelector('#text-loaiSinhVien');
    var textdiemSinhVien = document.querySelector('#text-trungBinh');
    var textxlSinhVien = document.querySelector('#text-xlSinhVien');

    // nếu return thì phải tạo 1 hàm để hứng return đó.
    var dTrungBinh = diemTrungBinh(diemToan, diemLy, diemHoa);
    var xepLoai = xepLoaiSinhVien(dTrungBinh, dRenLuyen);

    // hiển thị thông tin trên giao diện
    texttenSinhVien.innerHTML = tenSinhVien;
    textmaSinhVien.innerHTML = maSinhVien;
    textloaiSinhVien.innerHTML = loaiSinhVien;
    textdiemSinhVien.innerHTML = dTrungBinh.toFixed(2);
    textxlSinhVien.innerHTML = xepLoai;
}