// console.log(axios);

// kết nối dữ liệu backend dự vào thư viện axios

var svService = new SinhVienService();

var layDanhSachSinhVienApi = function () {
  // Tạo ra 1 object chứa các thuộc tính backend yêu cầu (url, method)
  

  var promise = svService.layDanhSachSinhVien(); //gọi đến bachend lấy data, (objectAjax) là hàm bất đồng bộ ---> ko chạy theo thứ tự, mà chạy theo những thằng load lên trước

  //   xử lý cho trường hợp gọi thành công
  promise.then(function (result) {
    console.log("Kết quả", result.data);

    // lấy dữ liệu server trả về gọi hàm tạo table

    renderTable(result.data);
  });

  //   Xử lý cho trường hợp thất bại
  promise.catch(function (error) {
    console.log(error);
  });
};

var renderTable = function (mangSinhVien) {
  var noiDungTable = "";
  for (var i = 0; i < mangSinhVien.length; i++) {
    var sv = new SinhVien();
    sv.maSinhVien = mangSinhVien[i].maSinhVien;
    sv.tenSinhVien = mangSinhVien[i].tenSinhVien;
    sv.diemToan = mangSinhVien[i].diemToan;
    sv.diemLy = mangSinhVien[i].diemLy;
    sv.diemHoa = mangSinhVien[i].diemHoa;
    sv.diemRenLuyen = mangSinhVien[i].diemRenLuyen;
    sv.loaiSinhVien = mangSinhVien[i].loaiSinhVien;
    sv.email = mangSinhVien[i].email;
    // Tạo các tr chứa thông tin sinh viên tương ứng
    noiDungTable += `
      <tr>
        <td>${sv.maSinhVien}</td>
        <td>${sv.tenSinhVien}</td>
        <td>${sv.email}</td>
        <td>${sv.tinhDiemTrungBinh()}</td>
        <td>${sv.xepLoai()}</td>
        <td>
        <button class="btn btn-danger" onclick="xoaSinhVien('${
          sv.maSinhVien
        }')">Xoá</button>

        <button class="btn btn-primary" onclick="suaSinhVien('${
          sv.maSinhVien
        }')">Chỉnh sửa</button>

        </td>
      </tr>
      `;
  }

  document.querySelector("#tableSinhVien").innerHTML = noiDungTable;
};

layDanhSachSinhVienApi();

// ----Chức năng thêm sinh viên lưu trữ vào server thông qua api backend----
document.querySelector("#btnXacNhan").onclick = function () {
  // Lấy dữ liệu từ người dùng nhập vào
  var sv = new SinhVien();
  sv.maSinhVien = document.querySelector("#maSinhVien").value;
  sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sv.diemToan = document.querySelector("#diemToan").value;
  sv.diemLy = document.querySelector("#diemLy").value;
  sv.diemHoa = document.querySelector("#diemHoa").value;
  sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
  sv.email = document.querySelector("#email").value;
  console.log("sinh viên", sv);

  // dùng axios đưa dữ liệu về server thông qua api backend cung cấp

  var promise = svService.themSinhVien(sv)

  // hàm thực thi khi gọi ajax thành công
  promise.then(function (result) {
    console.log(result.data);

    // location.reload();

    // gọi phương thức lấy thông tin sinh viên tạo lại table mới
    layDanhSachSinhVienApi();
  });

  // hàm thực thi khi lỗi xảy ra
  promise.catch(function (error) {
    console.log(error.response.data);
  });
};

// chức năng xoá sinh viên server dựa vào api backend

var xoaSinhVien = function (maSinhVien) {
  // alert(maSinhVien);

  var promise = axios({
    url:
      `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=` +
      maSinhVien,
    method: "DELETE",
  });
  // Hàm xử lý thành công
  promise.then(function (result) {
    console.log(result.data);
    layDanhSachSinhVienApi();
  });

  // hàm xử lý thất bại
  promise.catch(function (error) {
    console.log(error.response.data);
  });
};

// ----Xử lý nút sửa sinh viên----
var suaSinhVien = function (maSinhVien) {
  document.querySelector("#maSinhVien").disabled = true;
  document.querySelector("#btnXacNhan").disabled = true;
  document.querySelector("#btnXacNhan").className = "btn btn-secondary";
  //  alert(maSinhVien);
  var promise = axios({
    url:
      `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=` +
      maSinhVien,
    method: "GET",
  });

  // Hàm xử lý thành công
  promise.then(function (result) {
    console.log(result.data);
    // gán dữ liệu server trả về lên giao diện người dùng nhập thông tin
    var sv = result.data;
    document.querySelector("#maSinhVien").value = sv.maSinhVien;
    document.querySelector("#tenSinhVien").value = sv.tenSinhVien;
    document.querySelector("#loaiSinhVien").value = sv.loaiSinhVien;
    document.querySelector("#diemToan").value = sv.diemToan;
    document.querySelector("#diemLy").value = sv.diemLy;
    document.querySelector("#diemHoa").value = sv.diemHoa;
    document.querySelector("#diemRenLuyen").value = sv.diemRenLuyen;
    document.querySelector("#email").value = sv.email;
  });

  // hàm xử lý thất bại
  promise.catch(function (error) {
    console.log(error.response.data);
  });
};

// ----Chức năng lưu thông tin sinh viên server dựa vào api backend cung cấp-----
document.querySelector("#btnLuuThongTin").onclick = function () {
  // lấy dữ liệu từ người dùng nhập đưa vào đối tượng theo format dữ liệu của Backend yêu cầu

  var sv = new SinhVien();
  sv.maSinhVien = document.querySelector("#maSinhVien").value;
  sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sv.diemToan = document.querySelector("#diemToan").value;
  sv.diemLy = document.querySelector("#diemLy").value;
  sv.diemHoa = document.querySelector("#diemHoa").value;
  sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
  sv.email = document.querySelector("#email").value;

  // Gọi ajax đưa dữ liệu về server cập nhật
  var promise = axios({
    url:
      "http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=" +
      sv.maSinhVien,
    method: "PUT",
    data: sv,
  });

  // Hàm xử lý thành công
  promise.then(function (result) {
    console.log(result.data);
    layDanhSachSinhVienApi();
  });

  // hàm xử lý thất bại
  promise.catch(function (error) {
    console.log(error.response.data);
  });
};
