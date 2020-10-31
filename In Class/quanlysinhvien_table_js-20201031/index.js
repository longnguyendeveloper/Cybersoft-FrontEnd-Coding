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
};

var renderTable = function (arrSV) {
  //Từ mảng sinh viên tạo ra 1 chuỗi html nhiều thẻ tr dựa vào vòng lặp
  var noiDungTable = "";
  for (var index = 0; index < arrSV.length; index++) {
    //Mỗi lần lặp lấy ra 1 đối tượng sinhVien
    var sv = arrSV[index];
    //Tạo ra 1 chuỗi + dồn vào nội dung <tr></tr>
    noiDungTable += `
                <tr>
                    <td>${sv.maSinhVien}</td>
                    <td>${sv.tenSinhVien}</td>
                    <td>${sv.email}</td>
                    <td>${sv.soDienThoai}</td>
                    <td>${sv.tinhDiemTrungBinh()}</td>
                    <td>${sv.xepLoai()}</td>
                    <td><button class="btn btn-danger" onclick="xoaSinhVien('${
                      sv.maSinhVien
                    }')">Xóa</button></td>
                </tr>            
        `;
  }
  console.log(noiDungTable);
  document.querySelector("#tableSinhVien").innerHTML = noiDungTable;
};

// Cài đặt sự kiên cho nút button xoá
var xoaSinhVien = function (maSinhVien) {
  //   alert(maSinhVien);

  for (var i = 0; i < mangSinhVien.length; i++) {
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
