var NhanVien = function (maNV, tenNV, cVu, heSoCV, luongCB, gioLTT) {
  this.maNhanVien = maNV;
  this.tenNhanVien = tenNV;
  this.chucVu = cVu;
  this.heSoChucVu = heSoCV;
  this.luongCoBan = luongCB;
  this.gioLamTrongThang = gioLTT;
  this.tongLuong = function () {
    var tluong = Number(this.luongCoBan) * Number(this.heSoChucVu);
    return tluong;
  };
  this.xepLoai = function () {
    if (this.gioLamTrongThang > 50 && this.gioLamTrongThang <= 80) {
      return "Trung bình";
    } else if (this.gioLamTrongThang > 80 && this.gioLamTrongThang <= 100) {
      return "Khá";
    } else if (this.gioLamTrongThang > 100 && this.gioLamTrongThang <= 120) {
      return "Giỏi";
    } else if (this.gioLamTrongThang > 120) {
      return "Xuất sắc";
    } else {
      return "Kém!";
    }
  };
};
