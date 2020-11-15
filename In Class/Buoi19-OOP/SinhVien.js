// es5

var SinhVienES5 = function (maSV, tenSV) {
  this.ma = maSV;
  this.ten = tenSV;
  this.thongTinSinhVien = function () {
    console.log("mã: ", this.ma);
    console.log("tên: ", this.ten);
  };
};

// ES6

class SinhVienES6 {
  // thuộc tính
  ma = "";
  ten = "";

  //hàm khởi tạo
  constructor(maSV, tenSV) {
    this.ma = maSV;
    this.ten = tenSV;
  }

  // phương thức
  thongTinVienVien() {
    console.log("mã: ", this.ma);
    console.log("tên: ", this.ten);
  }

  xuatThongTinSinhVien = () => {
    console.log(this.ma);
    console.log(this.ten);
  };
}

var sv = new SinhVienES6(1, "Nguyễn Văn A");
// console.log(sv);
sv.thongTinVienVien();

// ------------------ kế thừa -----------------------------
export class NhanVien {
  ma = "";
  ten = "";
  constructor(ma, ten) {
    this.ma = ma;
    this.ten = ten;
  }

  xuatThongTInNhanVien = () => {
    console.log(this.ma);
    console.log(this.ten);
  };
}

export class GiaoVien extends NhanVien {
  dsLopHoc = [];
  constructor(ma, ten) {
    // bắt buộc phải gọi super, giá trị của thằng con
    super(ma, ten);
  }

  tinhLuong = () => {
    console.log(100000);
  };
}

var gv = new GiaoVien(1, "Nguyễn Văn B");
gv.xuatThongTInNhanVien();
gv.tinhLuong();

export const domain = "http://google.com";

// export default 1 file chỉ export được 1 lần duy nhất

export default GiaoVien;
