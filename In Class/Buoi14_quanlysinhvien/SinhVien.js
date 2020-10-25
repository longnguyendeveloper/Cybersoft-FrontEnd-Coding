// khai báo lớp đối tượng trong javascript Class (Prototype)
var SinhVien = function () {
    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.loaiSinhVien = '';
    this.emailSinhVien = '';
    this.soDienThoai = '';
    this.diemToan = '';
    this.diemLy = '';
    this.diemHoa = '';
    this.diemRenLuyen = '';

    this.tinhDiemTrungBinh = function () {
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return dtb;
    }

    this.xepLoaiSinhVien = function () {
        var diemTB = this.tinhDiemTrungBinh();

        if (this.diemRenLuyen < 5) {
            return 'Yếu';
        } else if (diemTB < 5) {
            return 'Yếu';
        } else if (diemTB >= 5 && diemTB < 6) {
            return 'Trung Bình';
        } else if (diemTB >= 6 && diemTB < 7) {
            return 'Trung Bình Khá';
        } else if (diemTB >= 7 && diemTB < 8) {
            return 'Khá';
        } else if (diemTB >= 8 && diemTB < 9) {
            return 'Giỏi';
        } else if (diemTB >= 9 && diemTB <= 10) {
            return 'Xuất Sắc';
        } else {
            return 'Đã xảy ra lỗi !';
        }

    }
}