// Tạo ra 1 biến gồm 6 thuộc tính để lưu trữ thông tin

var mangNhanVien = [];
var validation = new Validation();

<<<<<<< Updated upstream
=======
// ------------------------------ Xử lý API ----------------------------------

var layDanhSachNhanVien = function () {

  var promise = nvService.layDanhSachNhanVien(); // Gọi đến API để lấy data

  //Xử lý cho trường hợp gọi thành công
  promise.then(function (result) {
      console.log(('Kết quả', result.data));
      renderTable(result.data)
  })

  // Xử lý cho trường hợp thất bại
  promise.catch(function (error) {
      console.log(error);
  })

}

layDanhSachNhanVien();

>>>>>>> Stashed changes
document.querySelector("#hienThi").onclick = function () {
  // alert()
  var nv = new NhanVien();
  //Lấy thông tin người dùng nhập vào gán vào đối tượng Nhân Viên
  nv.maNhanVien = document.querySelector("#maNhanVien").value;
  nv.tenNhanVien = document.querySelector("#tenNhanVien").value;
  nv.heSoChucVu = document.querySelector("#chucVu").value;
  nv.luongCoBan = document.querySelector("#luongCoBan").value;
  nv.gioLamTrongThang = document.querySelector("#soGioLamTrongThang").value;
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
  renderTable(mangNhanVien);
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
      nv.gioLamTrongThang
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
    </tr>
    `;
  }
  // console.log(noiDungTable);
  document.querySelector("#tableNhanVien").innerHTML = noiDungTable;
};

// cài đặt sự kiện cho button xoá
var xoaNhanVien = function (maNhanVien) {
  // alert(mangNhanVien);
  for (var i = mangNhanVien.length - 1; i >= 0; i--) {
    var nv = mangNhanVien[i];
    if (nv.maNhanVien === maNhanVien) {
      mangNhanVien.splice(i, 1);
    }
  }
  renderTable(mangNhanVien);
};

// Viết phương thức lấy dữ liệu từ localstorage => khi người dùng vừa vào trang web
var layMangNhanVienStorage = function () {
  // kiểm tra dữ liệu có trong localstorage không
  if (localStorage.getItem("mangNhanVien")) {
    // lấy dữ liệu được lưu trong localstorage ra ngoài
    var sMangNhanVien = localStorage.getItem("mangNhanVien");
    // biến dữ liệu từ chuỗi chuyển về object javascript gán vào mangSinhVien
    mangNhanVien = JSON.parse(sMangNhanVien);
    // sau khi lấy dữ liệu ra gọi hàm tạo bảng
    renderTable(mangNhanVien);
  }
};

layMangNhanVienStorage();

