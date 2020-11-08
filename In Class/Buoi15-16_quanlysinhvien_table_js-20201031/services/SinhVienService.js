// Lớp đối tượng chứa các phương thức giao tiếp với backend (api)

var SinhVienService = function () {
  this.layDanhSachSinhVien = function () {
    var promise = axios({
      url: "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
      method: "GET",
    });
    return promise;
  };

  this.themSinhVien = function (sv) {
    var promise = axios({
      url: "http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien", //Api backend cung cấp
      method: "POST", // giao thức backend cung cấp
      data: sv, //Dữ liệu gửi đi (lưu ý: dữ liệu gửi đi phải format dữ liệu của Backend yêu cầu)
    });
    return promise;
  };
};
