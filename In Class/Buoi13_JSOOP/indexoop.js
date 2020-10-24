var sinhVien = {
    maSV: '',
    tenSV: '',
    loaiSinhVien: '',
    diemToan: '',
    diemLy: '',
    diemHoa: '',
    diemRenLuyen: '',

    diemTrungBinh: function () {
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return dtb;
    },

    xepLoaiSinhVien: function () {
        var tinhDiemTrungBinh = this.diemTrungBinh();
        if (this.diemRenLuyen < 5) {
            return 'Yếu';
        }
        else {
            if (this.tinhDiemTrungBinh() < 5) {
                return 'Yếu';
            }
            else if (this.tinhDiemTrungBinh() >= 5 && this.tinhDiemTrungBinh() < 6) {
                return 'Trung bình';
            } else if (this.tinhDiemTrungBinh() >= 6 && this.tinhDiemTrungBinh() < 7) {
                return 'Trung bình-Khá';
            } else if (this.tinhDiemTrungBinh() >= 7 && this.tinhDiemTrungBinh() < 8) {
                return 'Khá';
            }
            else if (this.tinhDiemTrungBinh() >= 8 && this.tinhDiemTrungBinh() < 9) {
                return 'Giỏi';
            }
            else if (this.tinhDiemTrungBinh() >= 9 && this.tinhDiemTrungBinh() <= 10) {
                return 'Xuất sắc';
            } else {
                return 'Yếu';
            }
        }
    }
}

// Khi người dùng click nút xác nhận => Lấy thông tin người dùng gán vào đối tượng
document.querySelector('#btn-xacNhan').onclick = function () {
    sinhVien.maSV = document.querySelector('#maSinhVien').value;

    sinhVien.tenSV = document.querySelector('#tenSinhVien').value;

    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;

    sinhVien.diemToan = document.querySelector('#diemToan').value;

    sinhVien.diemLy = document.querySelector('#diemLy').value;

    sinhVien.diemHoa = document.querySelector('#diemHoa').value;

    sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    // gán id của html thành biến
    var texttenSinhVien = document.querySelector('#text-tenSinhVien');
    var textmaSinhVien = document.querySelector('#text-maSinhVien');
    var textloaiSinhVien = document.querySelector('#text-loaiSinhVien');
    var textdiemSinhVien = document.querySelector('#text-trungBinh');
    var textxlSinhVien = document.querySelector('#text-xlSinhVien');

    // In thông tin người dùng ra giao diện
    texttenSinhVien.innerHTML = sinhVien.tenSV;
    textmaSinhVien.innerHTML = sinhVien.maSV;
    textloaiSinhVien.innerHTML = sinhVien.loaiSinhVien;
    textdiemSinhVien.innerHTML = sinhVien.diemTrungBinh();
    textxlSinhVien.innerHTML = sinhVien.xepLoaiSinhVien();

}