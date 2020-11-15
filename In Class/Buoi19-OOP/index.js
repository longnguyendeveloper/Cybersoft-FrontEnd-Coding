// //------------------I. khai báo biến với từ khoá var let const-----------------

// // var number = 5;

// // {
// //   // Nội dung bên trong scope
// //   var number = 10;
// //   console.log("number1", number);
// // }

// // console.log("number2", number);

// let number = 15;

// {
//   // Nội dung bên trong scope
//   let number = 20;
//   console.log("number3", number);
// }

// console.log("number4", number);

// // -------------------------Cách sử dụng var, let -----------------------
// // 1. var: hỗ trợ cho phép gắn lại, khai báo nhiều lần (cơ chế hosting)
// // 2. let: Không hỗ trợ cơ chế hoisting (trong 1 scope chỉ khai báo 1 tên biến duy nhất ==> khác scope thì phân biệt biến)

// // const: Tương tự let tuy nhiên dùng để khai báo những  giá trị hằng số (không gắn lại được) đối với kiểu dữ liệu cơ sở (number, string, boolean, null, undefine). Đối với kiểu dữ liệu là object thì không gắn được bằng object mới tuy nhiên có thể gắn lại từng thuộc tính bên trong. array thì không thể ắn array mới tuy nhiên có thể gắn lại các phẩn tử bên trong.
// const domain = "https://google.com";

// // "{}" có nghĩa cấp phát vùng nhớ tương ứng = 8 byte

// const sinhVien = {
//   ma: 1,
//   ten: "A",
// };

// // sinhVien = {
// //   ma: 2,
// //   ten: "B",
// // };
// const sinhVien2 = {
//   ma: 2,
//   ten: "B",
// };

// sinhVien.ma = 2;
// sinhVien.ten = "B";
// console.log("sinh viên", sinhVien);

// ===================== Mở comment ở trên để xem lý thuyết ---> comment để ko bị lỗi bài học dưới ===================== //
// ===================================================================================================================== //

// Arrow function: Nếu nội dung hàm có duy nhất 1 lệnh return thì không cần ghi {return} có thể thay bằng => kết quả return

// Arrow function: giúp viết hàm ngắn hơn
// ES5
var tinhTichES5 = function (a, b) {
  return a * b;
};

var tichES5 = tinhTichES5(1, 2);
console.log("tích = ", tichES5);

// bị lỗi???

var tinhTongES5 = function (a, b) {
  return a + b;
};
var tong = tinhTongES5(5, 10);
console.log("tổng = ", tong);

// ES6
var tinhTichES6 = (a, b) => {
  return a * b;
};

var tichES6 = tinhTichES6(5, 10);
console.log("es6", tichES6);

var apiChinhSua = (thamSo) =>
  "http://svcy.myclass.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=" +
  thamSo;

apiChinhSua(5); //api có chứa tham số

var tinhTichES6 = (6, 10);

console.log("es6", tichES6);

// Arrow function sử dụng trong đối tượng và lớp đói tượng
// Trong ES6 arrow function dùng để khai báo hàm hoặc phương thức
// Function dùng để khai báo phương thức
// class dùng để khai báo lớp đối tượng
let hocVien = {
  hoTen: "Nguyen văn A",
  lop: "FrontEnd",
  layThongTinHocVien: function () {
    //   dùng arrow function thay vì "function (){}"
    var hienThiThongTin = () => {
      console.log(`Họ tên: ${this.hoTen} - Lớp: ${this.lop}`);
    };
    hienThiThongTin;
  },
};

// ---------------------- REST PARAMS--------------------
// ...

// var tinhTong = (a, b) => {
//   var tong = Number(a) + Number(b);
//   console.log(tong);
// };

var tingTong = (...restParams) => {
  switch (restParams.length) {
    case 2: {
      var tong = Number(restParams[0]) + Number(restParams[1]);
      console.log("Tổng: ", tong);
      return tong;
    }

    case 3: {
      var tong =
        Number(restParams[0]) + Number(restParams[1]) + Number(restParams[2]);
      console.log("Tổng: ", tong);
      return tong;
    }

    default: {
      console.log("dữ liệu không hợp lệ");
      return 0;
    }
  }
};

// ----------------------- Spread operator

var sinhVien = {
  ma: 1,
  ten: "Nguyễn Văn A",
  lop: "Frontend",
  hienThiThongTin: () => {
    console.log(`mã: ${this.ma}`);
    console.log(`tên: ${this.ten}`);
    console.log(`lớp: ${this.lop}`);
  },
};

// lấy ra mã sinh viên
let { ma, ten, ...sv } = sinhVien;
console.log(sv.lop);

// ------------------

let long1 = { ma: 1 };
let long2 = long1;
long2.ma = 2;
console.log(long1);
console.log(long2);

let sv1 = { ma: 1, ten: "Tèo" };
// sử dụng rest params để chép lại vùng nhớ cũ 'Tèo'. nếu ko dùng rest params thì vùng nhớ cũ sẽ bị thay đổi thành mới
let sv2 = { ...sv1 };
sv2.ten = "Nam";
sv.ma = 100;
console.log(sv1);
console.log(sv2);

// Spread operator array

let arrNumber1 = [1, 2, 3, 4, 5];

let arrNumber2 = [...arrNumber1, 9, 97, ...arrNumber1];

console.log("arrNumber1", arrNumber1);
console.log("arrNumber2", arrNumber2);

// ----------------- default params --------------------

//Tham số mặc định cho hàm: khi truyền tham số thì sẽ lấy giá trị mình truyền, không truyền tham số sẽ lấy giá trị mặc định
var thongTinSinhVien = (ten = "Nam", namSinh = 1999, tuoi = 2020 - namSinh) => {
  console.log(`Tên: ${ten} - Tuổi: ${tuoi}`);
};

thongTinSinhVien("Long", 2001, 17);

// -------------Destructuring------------------
// object
var lopHoc = {
  maLop: "FE54",
  tenLop: "Front end 54",
  hienThiThongTin: () => {
    console.log("mã lớp: ", lopHoc.maLop);
    console.log("tên lớp: ", lopHoc.tenLop);
  },

  thongTinMoRong: {
    diaChi: "82 Ung Văn Khiêm",
    sdt: "0123456789",
  },
};

let { maLop, tenLop, hienThiThongTin } = lopHoc;
// lấy số điện thoại và địa chỉ
let { diaChi, sdt } = lopHoc.thongTinMoRong;
hienThiThongTin();
console.log("mã lớp = ", maLop);
console.log("số điện thoại = ", sdt);

// array
// let ngaySinh = [10,10,2020];
let [ngay, thang, nam] = [10, 10, 2020];
// dữ liệu object thể hiện bằng array
let lh = [
  "FE54",
  "Front end 54",
  () => {
    console.log("mã lớp = ", lh[0]);
    console.log("tên lớp = ", lh[1]);
  },
  {
    diaChi: "82 Ung Văn Khiêm",
    soDienThoai: "0123456789",
  },
];

let [maLopHoc, tenLopHoc, thongTinLopHoc, ...restParams] = lh;

thongTinLopHoc();
console.log("Tên lớp học = ", tenLopHoc);

// ------------- String tempate---------------------
// có thể xuống hàng
console.log(`abcxyz
oaaaabt`);

// ------------- Object literals-------------------
// truyền động tên của thuộc tính
var sanPham = {
  ["maSP"]: 1,
  ["tenSP"]: "Iphone 12 pro max",
  ["gia"]: 1000,
};

// Từ tên biến giá trị tạo ra tên thuộc tính

var maSP = 1;
var tenSP = "Iphone XS Max";
var gia = 1200;

var thongTinSanPham = () => {
  console.log("mã SP = ", maSP, ", tên SP = ", tenSP, ", Giá = ", gia);
};

var sp = {
  maSP,
  tenSP,
  gia,
  thongTinSanPham,
};

sp.thongTinSanPham();

// -------------------- for in và for of

let mangSP = [
  { maSP: 1, tenSP: "Iphone X", gia: 1000 },
  { maSP: 2, tenSP: "Iphone 11", gia: 1200 },
  { maSP: 3, tenSP: "Iphone 12", gia: 1400 },
];

// Mảng S thể hiện dưới định dạng object

let mangSPObject = {
  a0: { maSP: 1, tenSP: "Iphone X", gia: 1000 },
  a5: { maSP: 2, tenSP: "Iphone 11", gia: 1200 },
  a10: { maSP: 3, tenSP: "Iphone 12", gia: 1400 },
};

console.log("mã Sản Phảm a0", mangSPObject.a0);
console.log("mã Sản Phảm a5", mangSPObject.a5);

// for in: dùng để duyệt mảng dưới dạng object từ 1 số cơ sở dữ liệu dặc biệt
// for of: dùng để duyệt mảng object bình thường
// for in tăng dần

for (let i = 0; i < mangSP.length; i++) {
  let sanPham = mangSP[i];
  console.log("sp", sanPham);
}

// for (let i in mangSP) {
//     let sanPham = mangSP[i];
//     console.log("sp", sanPham);
//   }

// for in
for (let key in mangSPObject) {
  let sanPham = mangSPObject[key];
  console.log("sp", sanPham);
}

// for of
for (let sanPham of mangSP) {
  console.log("sp", sanPham);
}

import { GiaoVien, NhanVien, domain } from "./SinhVien.js";

// import { GiaoVien123 } from "./SinhVien.js";

let giaoVien = new GiaoVien(1, "Nguyễn Văn CCCCCCC");
console.log("giáo viên: ", giaoVien);

let nhanVien = new NhanVien(1, "Long");
console.log("nhân viên = ", nhanVien);

// let giaoVienX = new GiaoVien123(1, "Nguyễn Văn DDDDĐ");
// console.log("giáo viên: ", giaoVienX);

// ----------------------------------------filer mảng------------------

let mangSanPham = [
  { MaSP: 1, TenSP: "Sony 1", gia: 1, HangSX: "SONY" },
  { MaSP: 2, TenSP: "Sony 2", gia: 2, HangSX: "SONY" },
  { MaSP: 3, TenSP: "Sony 3", gia: 3, HangSX: "SONY" },
  { MaSP: 4, TenSP: "Google 4", gia: 4, HangSX: "GOOGLE" },
  { MaSP: 5, TenSP: "Google 5", gia: 5, HangSX: "GOOGLE" },
  { MaSP: 6, TenSP: "Google 6", gia: 6, HangSX: "GOOGLE" },
  { MaSP: 7, TenSP: "Samsung 7", gia: 7, HangSX: "SAMSUNG" },
  { MaSP: 8, TenSP: "Samsung 8", gia: 8, HangSX: "SAMSUNG" },
  { MaSP: 9, TenSP: "Samsung 9", gia: 9, HangSX: "SAMSUNG" },
];

// ES6 console.log() các sản phẩm có hangSV la samsung

// let result = [];

// // CÁCH 1
// for (let i of mangSanPham) {
//   if (i.HangSX === "SAMSUNG") {
//     result.push(i);
//   }
// }
// console.log(result);

// // Cách 2
// for (let i in mangSanPham) {
//   var mangDT = mangSanPham[i];
//   if (mangDT.HangSX === "SAMSUNG") {
//     result.push(mangDT);
//   }
// }
// console.log(result);

// CÁCH 3: dùng filter ES6 (.filter(call back): là hàm lấy ra các kết quả trong hàm callback trả về giá trị true)

// cách ghi đầy đủ
// let result = mangSanPham.filter((sp) => {
//   if (sp.HangSX === "SAMSUNG") {
//     return true;
//   }
// });

// cách ghi rút ngọn
let result = mangSanPham.filter((sp) => sp.HangSX === "SAMSUNG");
console.log("result =", result);

// ES6 console.log() các sản phẩm có giá trên 2
let resultGia = mangSanPham.filter((sp1) => {
  if (sp1.gia > 2) {
    return true;
  }
});
console.log(resultGia);

// .find(): Tương tự phương thức filter nhưng kết quả trả về là 1 đối tượng đầu tiên thoả điều kiện, ngược lại trả về undefine khi không tìm thấy. Thường dùng cho thuộc tính khác biệt giữa các đối tượng trong mảng (thuộc tính khoá chính)

// lấy 1 sản phẩm có mã 7
var spTimKiem = mangSanPham.find((sp) => sp.MaSP === 7);

if (spTimKiem) {
  let sp = { ...spTimKiem };
  sp.gia = 5;
  console.log("spTimKiem", spTimKiem);
} else {
  console.log("không tìm thấy sản phẩm", spTimKiem);
}
console.log("mangSP = ", mangSanPham);

// ----------.findindex()---------------
// Tương tự hàm find => tìm thấy sẽ trả index (có thể chỉnh sửa hoặc xoá dựa vào index). Nếu không tìm thấy sẽ trả về -1

// CÁCH 1

var index = mangSanPham.findIndex((sp) => sp.MaSP === 2);

console.log("index", index);

if (index !== -1) {
  // Tìm thấy
  // Xoá đi

  // mangSanPham.splice(index, 1);
  mangSanPham[index].gia = 20000; //tìm để sửa
} else {
  console.log("Không tìm thấy sản phẩm");
}
console.log("mangSP = ", mangSanPham);

// CÁCH 2
// lấy ra những giá trị thoả điều kiện

var arrResult = mangSanPham.filter((sp) => sp.MaSP !== 2);
console.log("arrResult", arrResult);

// foreach(): kết quả trả về của hàm này là undefine => thường dùng cho việc duyệt mang

mangSanPham.forEach((sp, index) => {
  console.log("sanPham", sp);
});

// map(): tương tự foreach duyệt qua các phần tử của mảng để biến đổi đó thành mảng khác

var mangDivSanPham = mangSanPham.map((sp, index) => {
  return `  <div class="card text-left col-4">
  <img class="card-img-top" src="https://picsum.photos/200/200" alt="">
  <div class="card-body">
    <h4 class="card-title">${sp.TenSP}</h4>
    <p class="card-text">${sp.gia}</p>
  </div>
</div>
`;
});

console.log("mảng div sản phẩm", mangDivSanPham);

for (let divSP of mangDivSanPham) {
  document.querySelector("#divSanPham").innerHTML += divSP;
}

var mangTrSanPham = mangSanPham.map((sp, index) => {
  return `
  <tr>
  <td>${sp.MaSP}</td>
  <td>${sp.TenSP}</td>
  <td>${sp.gia}</td>
  <td><img src="https://picsum.photos/200/200"></td>
  <td>${sp.HangSX}</td>
  <td><button class="btn btn-danger">Xoá</button></td>
  </tr>
  `;
});

// Cách 1

// for (let trSP of mangTrSanPham) {
//   document.querySelector("#tblSanPham").innerHTML += trSP;
// }

// Cách 2: dùng forEach
// mangTrSanPham.forEach((trSP, index) => {
//   document.querySelector("#tblSanPham").innerHTML += trSP;
// });

// reduce() trả về 1 giá trị cuối cùng
let tongTienSP = mangSanPham.reduce((tongTien, sanPham, index) => {
  tongTien += sanPham.gia;
  return tongTien;
}, 0);

// console.log("tongTien ", tongTien);

let chuoiTheTr = mangSanPham.reduce((chuoiTr, sp, index) => {
  chuoiTr += `
  <tr>
  <td>${sp.MaSP}</td>
  <td>${sp.TenSP}</td>
  <td>${sp.gia}</td>
  <td><img src="https://picsum.photos/200/200"></td>
  <td>${sp.HangSX}</td>
  <td><button class="btn btn-danger">Xoá</button></td>
  </tr>
  `;
  return chuoiTr;
}, "");

document.querySelector("#tblSanPham").innerHTML = chuoiTheTr;
