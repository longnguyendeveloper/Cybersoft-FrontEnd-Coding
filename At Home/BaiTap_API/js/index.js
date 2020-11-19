// Tạo ra 1 biến gồm 6 thuộc tính để lưu trữ thông tin
var mangNhanVien = [];
var validation = new Validation();
var nvService = new NhanVienService();

document.querySelector("#hienThi").onclick = function () {
  // alert()
  var nv = new NhanVien();
  //Lấy thông tin người dùng nhập vào gán vào đối tượng Nhân Viên
  nv.maNhanVien = document.querySelector("#maNhanVien").value;
  nv.tenNhanVien = document.querySelector("#tenNhanVien").value;
  nv.heSoChucVu = document.querySelector("#chucVu").value;
  nv.luongCoBan = document.querySelector("#luongCoBan").value;
  nv.soGioLamTrongThang = document.querySelector("#soGioLamTrongThang").value;
  // console.log(nhanVien);

  // lấy innerHTML của option được chọn trong thẻ select
  var tagChucVu = document.getElementById("chucVu");
  // lấy ra mảng các thẻ option trong thẻ select;
  var arrOption = tagChucVu.options;
  // lấy thẻ option được chọn
  nv.chucVu = arrOption[tagChucVu.selectedIndex].innerHTML;
  // console.log(nhanVien.chucVu);
  // console.log(tagChucVu.options);

  // Hiển thị ra bên phải màn hình
  document.querySelector("#text-maNhanVien").innerHTML = nv.maNhanVien;
  document.querySelector("#text-tenNhanVien").innerHTML = nv.tenNhanVien;
  document.querySelector("#text-chucVu").innerHTML = nv.chucVu;
  // Tổng lương
  document.querySelector("#text-tongLuong").innerHTML = nv.tongLuong();
  document.querySelector("#text-xepLoai").innerHTML = nv.xepLoai();

  //------------- Validation Function-----------
  var valid = true;
  valid &= validation.kiemTraTatCaKyTu(
    nv.tenNhanVien,
    "Tên nhân viên",
    ".kiemTraDinhDang-tenNhanVien"
  );

  valid &= validation.kiemTraDoDaiChuoi(
    nv.maNhanVien,
    "Mã nhân viên",
    ".kiemTraDoDai-maNhanVien",
    4,
    6
  );

  valid &=
    validation.kiemTraGiaTri(
      nv.luongCoBan,
      "Lương cơ bản",
      ".kiemTraGiaTri-luongCoBan",
      10000000,
      20000000
    ) &
    validation.kiemTraGiaTri(
      nv.gioLamTrongThang,
      "Giờ làm",
      ".kiemTraGiaTri-gioLamTrongThang",
      50,
      150
    );

  valid &=
    validation.kiemTraRong(
      nv.maNhanVien,
      "Mã nhân viên",
      ".kiemTraRong-maNhanVien"
    ) &
    validation.kiemTraRong(
      nv.tenNhanVien,
      "Tên nhân viên",
      ".kiemTraRong-tenNhanVien"
    );
  if (!valid) {
    return;
  }
  mangNhanVien.push(nv);
  var luuLocalStorage = function () {
    // biến mảng sinh viên thành chuỗi
    var sMangNhanVien = JSON.stringify(mangNhanVien);
    // Đem chuỗi mangSinhVien lưu vào localstorage
    localStorage.setItem("mangNhanVien", sMangNhanVien);
  };
  // renderTable(mangNhanVien);
  luuLocalStorage();

  // --------------------- chức năng thêm Nhân Viên API --------------------

  var promise = nvService.themNhanVien(nv);
  promise.then(function (result) {
    console.log(result.data);
    layDanhSachNhanVien();
  });
  promise.catch(function (error) {
    layDanhSachNhanVien();
    console.log(error.response.data);
    alert('Có lỗi trong quá trình thêm nhân viên')
  });
};

// // Viết phương thức lấy dữ liệu từ localstorage => khi người dùng vừa vào trang web
// var layMangNhanVienStorage = function () {
//   // kiểm tra dữ liệu có trong localstorage không
//   if (localStorage.getItem("mangNhanVien")) {
//     // lấy dữ liệu được lưu trong localstorage ra ngoài
//     var sMangNhanVien = localStorage.getItem("mangNhanVien");
//     // biến dữ liệu từ chuỗi chuyển về object javascript gán vào mangSinhVien
//     mangNhanVien = JSON.parse(sMangNhanVien);
//     // sau khi lấy dữ leeiuj ra gọi hàm tạo bảng
//     renderTable(mangNhanVien);
//   }
// };

// layMangNhanVienStorage();

// ------------------------------ Xử lý API ----------------------------------

var layDanhSachNhanVien = function () {
  var promise = nvService.layDanhSachNhanVien(); // Gọi đến API để lấy data

  //Xử lý cho trường hợp gọi thành công
  promise.then(function (result) {
    console.log(("Kết quả", result.data));
    renderTable(result.data);
  });

  // Xử lý cho trường hợp thất bại
  promise.catch(function (error) {
    console.log(error);
  });
};

var renderTable = function (arrNV) {
  // Từ mảng nhân viên tạo ra 1 chuỗi html nhiều thẻ tr dựa vào vòng lặp
  var noiDungTable = "";
  for (var i = 0; i < arrNV.length; i++) {
    // Mỗi lần lặp lấy ra 1 đối tượng nhân viên
    var nv = arrNV[i];
    var nhanVien = new NhanVien(
      nv.maNhanVien,
      nv.tenNhanVien,
      nv.chucVu,
      nv.heSoChucVu,
      nv.luongCoBan,
      nv.soGioLamTrongThang
    );
    // tạo ra 1 chuỗi + dồn vào nội dung <tr></tr>
    noiDungTable += `
    <tr>
    <td>${nhanVien.maNhanVien}</td>
    <td>${nhanVien.tenNhanVien}</td>
    <td>${nhanVien.chucVu}</td>
    <td>${nhanVien.luongCoBan}</td>
    <td>${nhanVien.tongLuong()}</td>
    <td>${nhanVien.gioLamTrongThang}</td>
    <td>${nhanVien.xepLoai()}</td>
    <td><button class="btn btn-danger" onclick="xoaNhanVien('${
      nhanVien.maNhanVien
    }')">Xóa</button></td>
    <td><button class="btn btn-primary" onclick="chinhSua('${
      nhanVien.maNhanVien
    }')">Chỉnh sửa</button></td>
    </tr>
    `;
  }
  // console.log(noiDungTable);
  document.querySelector("#tableNhanVien").innerHTML = noiDungTable;
};

layDanhSachNhanVien();

// --------------cài đặt sự kiện cho button xoá------------------
var xoaNhanVien = function (maNhanVien) {
  var promise = nvService.xoaNhanVienAPI(maNhanVien);
  promise.then(function (result) {
    console.log(result.data);
    layDanhSachNhanVien();
  });
  promise.catch(function (error) {
    console.log(error.response.data);
  });
};

// ------------ Chức năng chỉnh sửa nhân viên --------------

var chinhSua = function (maNhanVien) {
  document.querySelector('#maNhanVien').disabled = true;
  document.querySelector("#hienThi").disabled = true;
  document.querySelector("#hienThi").className = 'btn btn-secondary mb-3'

  var promise = nvService.chinhSua(maNhanVien);
  promise.then(function (result) {
    var nvCS = result.data;
    document.querySelector("#maNhanVien").value = nvCS.maNhanVien;
    document.querySelector("#tenNhanVien").value = nvCS.tenNhanVien;
    document.querySelector("#chucVu").options = nvCS.chucVu;
    document.querySelector("#luongCoBan").value = nvCS.luongCoBan;
    document.querySelector("#soGioLamTrongThang").value
      nvCS.soGioLamTrongThang;
  });

  promise.catch(function (error) {
    console.log("lỗi chỉnh sửa: ", error.response.data);
    alert('Có lỗi trong quá trình cập nhật')
  });
};

document.querySelector("#btnLuuThongTin").onclick = function () {
  var nvCapNhat = new NhanVien();
  nvCapNhat.maNhanVien = document.querySelector("#maNhanVien").value;
  nvCapNhat.tenNhanVien = document.querySelector("#tenNhanVien").value;
  nvCapNhat.heSoChucVu = document.querySelector("#chucVu").value;

  var arrChucVu = document.querySelector("#chucVu").options;
  nvCapNhat.chucVu =
    arrChucVu[document.querySelector("#chucVu").selectedIndex].innerHTML;

  nvCapNhat.luongCoBan = document.querySelector("#luongCoBan").value;
  nvCapNhat.soGioLamTrongThang = document.querySelector(
    "#soGioLamTrongThang"
  ).value;

  var promise = nvService.capNhatNhanVien(nvCapNhat.maNhanVien, nvCapNhat);
  promise.then(function (result) {
    console.log(result.data);
    layDanhSachNhanVien();
  });
  promise.catch(function (error) {
    console.log(error.response.data);
  });
};
