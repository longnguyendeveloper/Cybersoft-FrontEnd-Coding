var mangSinhVien = [];
var validation = new Validation();
//Định nghĩa sự kiện click khi người dùng bấm nút xác nhận
document.querySelector("#btnXacNhan").onclick = function () {
  //Tạo ra đối tượng sinh viên chứa thông tin người dùng nhập vào từ giao diện
  var sv = new SinhVien();
  sv.maSinhVien = document.querySelector("#maSinhVien").value;
  sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sv.email = document.querySelector("#email").value;
  sv.soDienThoai = document.querySelector("#soDienThoai").value;
  sv.diemToan = document.querySelector("#diemToan").value;
  sv.diemLy = document.querySelector("#diemLy").value;
  sv.diemHoa = document.querySelector("#diemHoa").value;
  sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
  sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  console.log("Sinh viên", sv);

  //   Kiểm tra hợp lệ - Mã Sinh Viên
  //   Kiểm tra trống

  var valid = true;

  valid &=
    validation.kiemTraRong(
      sv.maSinhVien,
      "Mã sinh viên",
      ".kiemTraRong-maSinhVien",
      "#maSinhVien"
    ) &
    validation.kiemTraRong(
      sv.tenSinhVien,
      "Tên sinh viên",
      ".kiemTraRong-tenSinhVien",
      "#tenSinhVien"
    ) &
    validation.kiemTraRong(sv.email, "Email", ".kiemTraRong-email", "#email") &
    validation.kiemTraRong(
      sv.soDienThoai,
      "Số điện thoại",
      ".kiemTraRong-soDienThoai",
      "#soDienThoai"
    ) &
    validation.kiemTraRong(
      sv.diemToan,
      "Điểm toán",
      ".kiemTraRong-diemToan",
      "#diemToan"
    ) &
    validation.kiemTraRong(
      sv.diemLy,
      "Điểm lý",
      ".kiemTraRong-diemLy",
      "#diemLy"
    ) &
    validation.kiemTraRong(
      sv.diemHoa,
      "Điểm hoá",
      ".kiemTraRong-diemHoa",
      "#diemHoa"
    ) &
    validation.kiemTraRong(
      sv.diemRenLuyen,
      "Điểm rèn luyện",
      ".kiemTraRong-diemRenLuyen",
      "#diemRenLuyen"
    );

  // Kiểm tra định dạng email

  valid &= validation.kiemTraEmail(sv.email, "Email", ".kiemTraDinhDang-email");

  valid &= validation.kiemTraTatCaKyTu(
    sv.tenSinhVien,
    "Tên sinh viên",
    ".kiemTraDinhDang-tenSinhVien"
  );

  valid &=
    validation.kiemTraGiaTri(
      sv.diemToan,
      "Điểm toán ",
      ".kiemTraGiaTri-diemToan",
      "0",
      "10"
    ) &
    validation.kiemTraGiaTri(
      sv.diemLy,
      "Điểm lý ",
      ".kiemTraGiaTri-diemLy",
      "0",
      "10"
    ) &
    validation.kiemTraGiaTri(
      sv.diemHoa,
      "Điểm hoá ",
      ".kiemTraGiaTri-diemHoa",
      "0",
      "10"
    ) &
    validation.kiemTraGiaTri(
      sv.diemRenLuyen,
      "Điểm rèn luyện ",
      ".kiemTraGiaTri-diemRenLuyen",
      "0",
      "10"
    );

  valid &=
    validation.kiemTraTatCaSo(
      sv.soDienThoai,
      "Số điện thoại",
      ".kiemTraDinhDang-soDienThoai"
    ) &
    validation.kiemTraTatCaSo(
      sv.diemToan,
      "Điểm toán ",
      ".kiemTraDinhDang-diemToan"
    ) &
    validation.kiemTraTatCaSo(
      sv.diemLy,
      "Điểm lý ",
      ".kiemTraDinhDang-diemLy"
    ) &
    validation.kiemTraTatCaSo(
      sv.diemHoa,
      "Điểm hoá ",
      ".kiemTraDinhDang-diemHoa"
    );

  valid &= validation.kiemTraDoDaiChuoi(
    sv.tenSinhVien,
    "Tên sinh viên",
    ".kiemTraDoDai-tenSinhVien",
    6,
    32
  );

  if (!valid) {
    return;
  }

  //   CÁCH 1
  //   if (sv.maSinhVien === "") {
  //     // DOM đến thẻ lỗi kiemTraRong => ghi nội dung lỗi vào innerHTML
  //     document.querySelector(".kiemTraRong-maSinhVien").innerHTML =
  //       "Mã sinh viên không được bỏ trống";

  //     document.querySelector("#maSinhVien").style.borderColor = "red";
  //     document.querySelector("#maSinhVien").style.boxShadow =
  //       "1px 1px 2px red, 0 0 5px red, 0 0 5px red";
  //   } else {
  //     document.querySelector(".kiemTraRong-maSinhVien").innerHTML = "";

  //     document.querySelector("#maSinhVien").style.borderColor = "";
  //     document.querySelector("#maSinhVien").style.boxShadow = "";
  //   }

  //   if (sv.tenSinhVien === "") {
  //     //   DOM đến thẻ lỗi kiemTraRong => ghi nội dung lỗi vào innerHTML
  //     document.querySelector(".kiemTraRong-tenSinhVien").innerHTML =
  //       "Tên sinh viên không được bỏ trống";
  //   } else {
  //     document.querySelector(".kiemTraRong-tenSinhVien").innerHTML = "";
  //   }

  //   //Kiểm tra hợp lệ - Email
  //   if (sv.maSinhVien === "") {
  //     //   DOM đến thẻ lỗi kiemTraRong => ghi nội dung lỗi vào innerHTML
  //     document.querySelector(".kiemTraRong-email").innerHTML =
  //       "Email không được bỏ trống";
  //   } else {
  //     document.querySelector(".kiemTraRong-email").innerHTML = "";
  //   }

  //   //Kiểm tra hợp lệ - Mã Sinh Viên
  //   if (sv.email === "") {
  //     //   DOM đến thẻ lỗi kiemTraRong => ghi nội dung lỗi vào innerHTML
  //     document.querySelector(".kiemTraRong-email").innerHTML =
  //       "Email không được bỏ trống";
  //   } else {
  //     document.querySelector(".kiemTraRong-email").innerHTML = "";
  //   }

  //   //Kiểm tra hợp lệ - số điện thoại
  //   if (sv.soDienThoai === "") {
  //     //   DOM đến thẻ lỗi kiemTraRong => ghi nội dung lỗi vào innerHTML
  //     document.querySelector(".kiemTraRong-soDienThoai").innerHTML =
  //       "Số điện thoại không được bỏ trống";
  //   } else {
  //     document.querySelector(".kiemTraRong-soDienThoai").innerHTML = "";
  //   }

  //   //Kiểm tra hợp lệ - Điểm toán
  //   if (sv.diemToan === "") {
  //     //   DOM đến thẻ lỗi kiemTraRong => ghi nội dung lỗi vào innerHTML
  //     document.querySelector(".kiemTraRong-diemToan").innerHTML =
  //       "Điểm toán không được bỏ trống";
  //   } else {
  //     document.querySelector(".kiemTraRong-diemToan").innerHTML = "";
  //   }

  //   //Kiểm tra hợp lệ - Điểm lý
  //   if (sv.diemLy === "") {
  //     //   DOM đến thẻ lỗi kiemTraRong => ghi nội dung lỗi vào innerHTML
  //     document.querySelector(".kiemTraRong-diemLy").innerHTML =
  //       "Điểm lý không được bỏ trống";
  //   } else {
  //     document.querySelector(".kiemTraRong-diemLy").innerHTML = "";
  //   }

  //   //Kiểm tra hợp lệ - Điểm hoá
  //   if (sv.diemHoa === "") {
  //     //   DOM đến thẻ lỗi kiemTraRong => ghi nội dung lỗi vào innerHTML
  //     document.querySelector(".kiemTraRong-diemHoa").innerHTML =
  //       "Điểm hoá không được bỏ trống";
  //   } else {
  //     document.querySelector(".kiemTraRong-diemHoa").innerHTML = "";
  //   }

  //   //Kiểm tra hợp lệ - Điểm rèn luyện
  //   if (sv.diemRenLuyen === "") {
  //     //   DOM đến thẻ lỗi kiemTraRong => ghi nội dung lỗi vào innerHTML
  //     document.querySelector(".kiemTraRong-diemRenLuyen").innerHTML =
  //       "Điểm rèn luyện không được bỏ trống";
  //     return;
  //   } else {
  //     document.querySelector(".kiemTraRong-diemRenLuyen").innerHTML = "";
  //   }

  //Thêm 1 sinh viên vào mảng
  mangSinhVien.push(sv);
  console.log("mảng sinh viên", mangSinhVien);
  renderTable(mangSinhVien);
  // lưu vào localStorage
  luuLocalStorage();
};

// Viết hàm lưu trữ dữ liệu xuống máy tính client

var luuLocalStorage = function () {
  // biến mảng sinh viên thành chuỗi
  var sMangSinhVien = JSON.stringify(mangSinhVien);
  // Đem chuỗi mangSinhVien lưu vào localstorage
  localStorage.setItem("mangSinhVien", sMangSinhVien);
};

var renderTable = function (arrSV) {
  //Từ mảng sinh viên tạo ra 1 chuỗi html nhiều thẻ tr dựa vào vòng lặp
  var noiDungTable = "";
  for (var index = 0; index < arrSV.length; index++) {
    //Mỗi lần lặp lấy ra 1 đối tượng sinhVien
    var sv = arrSV[index];
    var sinhVien = new SinhVien(
      sv.maSinhVien,
      sv.tenSinhVien,
      sv.loaiSinhVien,
      sv.email,
      sv.soDienThoai,
      sv.diemToan,
      sv.diemLy,
      sv.diemHoa,
      sv.diemRenLuyen
    );
    // sinhVien.maSinhVien = sv.maSinhVien;
    // sinhVien.tenSinhVien = sv.tenSinhVien;
    // sinhVien.email = sv.email;
    // sinhVien.soDienThoai = sv.soDienThoai;
    // sinhVien.diemToan = sv.diemToan;
    // sinhVien.diemLy = sv.diemLy;
    // sinhVien.diemHoa = sv.diemHoa;
    // sinhVien.diemRenLuyen = sv.diemRenLuyen;
    // sinhVien.loaiSinhVien = sv.loaiSinhVien;
    //Tạo ra 1 chuỗi + dồn vào nội dung <tr></tr>
    noiDungTable += `
                <tr>
                    <td>${sinhVien.maSinhVien}</td>
                    <td>${sinhVien.tenSinhVien}</td>
                    <td>${sinhVien.email}</td>
                    <td>${sinhVien.soDienThoai}</td>
                    <td>${sinhVien.tinhDiemTrungBinh()}</td>
                    <td>${sinhVien.xepLoai()}</td>
                    <td><button class="btn btn-danger" onclick="xoaSinhVien('${
                      sinhVien.maSinhVien
                    }')">Xóa</button></td>
                    <td><button class="btn btn-primary" onclick="chinhSua('${
                      sinhVien.maSinhVien
                    }')">Chỉnh sửa</button></td>
                </tr>            
        `;
  }
  // console.log(noiDungTable);
  document.querySelector("#tableSinhVien").innerHTML = noiDungTable;
};

// Cài đặt sự kiên cho nút button xoá
var xoaSinhVien = function (maSinhVien) {
  //   alert(maSinhVien);

  for (var i = mangSinhVien.length - 1; i >= 0; i--) {
    //   mỗi lần duyện lấy ra 1 đối tượng sinh viên
    var sv = mangSinhVien[i];

    // lấy mã sinh viên của từng đối tượng so sánh với maSV được click
    if (sv.maSinhVien === maSinhVien) {
      // splice là hàm xoá phần tử của mảng dự vào index
      mangSinhVien.splice(i, 1);
    }
  }
  //   Sau khi xoá dữ liệu trong mảng gọi hàm tạo lại table truyền vào mảng sinh viên đã xoá
  renderTable(mangSinhVien);
};

// Viết chức năng cho nút chỉnh sửa - table
var chinhSua = function (maSV) {
  document.querySelector("#maSinhVien").disabled = true;
  // alert(maSV);
  // Từ mã sinh viên => tìm sinh viên trong mangSinhVien
  for (var index = 0; index < mangSinhVien.length; index++) {
    // Mỗi lần duyệt mảng lấy ra 1 đối tượng sinh viên
    var sv = mangSinhVien[index];

    // so sánh nếu maSV truyền vào === với dối tượng đang duyệt => gán ngược lại lên các control phía trên
    if (maSV === sv.maSinhVien) {
      document.querySelector("#maSinhVien").value = sv.maSinhVien;
      document.querySelector("#tenSinhVien").value = sv.tenSinhVien;
      document.querySelector("#email").value = sv.email;
      document.querySelector("#soDienThoai").value = sv.soDienThoai;
      document.querySelector("#loaiSinhVien").value = sv.loaiSinhVien;
      document.querySelector("#diemToan").value = sv.diemToan;
      document.querySelector("#diemLy").value = sv.diemLy;
      document.querySelector("#diemHoa").value = sv.diemHoa;
      document.querySelector("#diemRenLuyen").value = sv.diemRenLuyen;
    }
  }
};

// Viết phương thức lấy dữ liệu từ localstorage => khi người dùng vừa vào trang web
var layMangSinhVienStorage = function () {
  // kiểm tra dữ liệu có trong localstorage không
  if (localStorage.getItem("mangSinhVien")) {
    // lấy dữ liệu được lưu trong localstorage ra ngoài
    var sMangSinhVien = localStorage.getItem("mangSinhVien");
    // biến dữ liệu từ chuỗi chuyển về object javascript gán vào mangSinhVien
    mangSinhVien = JSON.parse(sMangSinhVien);
    // sau khi lấy dữ leeiuj ra gọi hàm tạo bảng
    renderTable(mangSinhVien);
  }
};

layMangSinhVienStorage();

// cập nhật thông tin người dùng

document.querySelector("#btnLuuThongTin").onclick = function () {
  // Lấy thông tin người dùng sau khi thay đổi gán vào đối tượng sinhVien
  var sv = new SinhVien();
  sv.maSinhVien = document.querySelector("#maSinhVien").value;
  sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sv.diemToan = document.querySelector("#diemToan").value;
  sv.diemLy = document.querySelector("#diemLy").value;
  sv.diemHoa = document.querySelector("#diemHoa").value;
  sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
  sv.email = document.querySelector("#email").value;
  sv.soDienThoai = document.querySelector("#soDienThoai").value;

  // Tìm trong mangSinhVien đối tượng cùng mã => cập nhật lại giá trị
  for (var i = 0; i < mangSinhVien.length; i++) {
    var sinhVienCapNhat = mangSinhVien[i];

    // Tìm ra sinhVien trong mảng có mã = với mã sv trên giao diện => cập nhật giá trị
    if (sinhVienCapNhat.maSinhVien === sv.maSinhVien) {
      sinhVienCapNhat.maSinhVien = sv.maSinhVien;
      sinhVienCapNhat.tenSinhVien = sv.tenSinhVien;
      sinhVienCapNhat.loaiSinhVien = sv.loaiSinhVien;
      sinhVienCapNhat.diemToan = sv.diemToan;
      sinhVienCapNhat.diemHoa = sv.diemHoa;
      sinhVienCapNhat.diemLy = sv.diemLy;
      sinhVienCapNhat.diemRenLuyen = sv.diemRenLuyen;
      sinhVienCapNhat.email = sv.email;
      sinhVienCapNhat.soDienThoai = sv.soDienThoai;
    }
  }
  // gọi hàm tạo bảng
  renderTable(mangSinhVien);
  // gọi hàm lưu vào localstorage
  luuLocalStorage();
};
