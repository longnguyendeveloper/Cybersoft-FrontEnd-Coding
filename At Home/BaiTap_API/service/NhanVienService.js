var NhanVienService = () => {
  this.layDanhSachNhanVien = () => {
    var promise = axios({
      url: "http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien",
      method: "GET",
    });
    return promise;
  };

  this.themNhanVien = (nv) => {
    var promise = axios({
      url: "http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien",
      method: "POST",
      data: nv,
    });
    return promise;
  };

  this.xoaNhanVienAPI = (maNhanVien) => {
    var promise = axios({
      url:
        `http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=` +
        maNhanVien,
      method: "DELETE",
    });
    return promise;
  };

  this.capNhatNhanVien = () => {
    var promise = axios({
      url:
        `http://svcy.myclass.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=` +
        maNhanVien,
      method: "PUT",
      data: nvCapNhat,
    });
    return promise;
  };

  this.chinhSua = () => {
    var promise = axios({
      url:
        "http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=" +
        maNhanVien,
      method: "GET",
    });
    return promise;
  };
};
