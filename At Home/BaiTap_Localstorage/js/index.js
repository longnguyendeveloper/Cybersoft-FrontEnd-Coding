// Tạo ra 1 biến gồm 6 thuộc tính để lưu trữ thông tin
var nhanVien = {
  maNV: '',
  tenNV: '',
  chucVu: '',
  heSoChucVu: '',
  luongCoBan: '',
  gioLamTrongThang: '',

  tongLuong: function () {
      var tluong = Number(this.luongCoBan) * Number(this.heSoChucVu);
      return tluong;
  },

  xepLoai: function () {
      if (this.gioLamTrongThang > 50 && this.gioLamTrongThang <= 80) {
          return 'Trung bình';
      } else if (this.gioLamTrongThang > 80 && this.gioLamTrongThang <= 100) {
          return 'Khá';
      }
      else if (this.gioLamTrongThang > 100 && this.gioLamTrongThang <= 120) {
          return 'Giỏi';
      }
      else if (this.gioLamTrongThang > 120) {
          return 'Xuất sắc';
      }
      else {
          return 'Lười vãi!'
      }
  }
}

// CÁCH 1:  Định nghĩa sự kiện cho btnXacNhan ngoài DOM Query Selector . onclick
// document.querySelector('#.btnXacNhan').onclick = function {
// }

// CÁCH 2: -> qua HTML thêm onclick vào trong btnXacNhan sau đó gọi hàm
/*
<div class="form-group text-center">
  <button id="btnXacNhan" onclick="xuatThongTinNhanVien()" class="btn btn-info p-2">Xác Nhận</button>
</div>
*/

var xuatThongTinNhanVien = function () {
  //Lấy thông tin người dùng nhập vào gán vào đối tượng Nhân Viên  
  nhanVien.maNV = document.querySelector('#maNhanVien').value;
  nhanVien.tenNV = document.querySelector('#tenNhanVien').value;
  nhanVien.heSoChucVu = document.querySelector('#chucVu').value;
  nhanVien.luongCoBan = document.querySelector('#luongCoBan').value;
  nhanVien.gioLamTrongThang = document.querySelector('#soGioLamTrongThang').value;
  // console.log(nhanVien);

  // lấy innerHTML của option được chọn trong thẻ select
  var tagChucVu = document.getElementById('chucVu');
  // lấy ra mảng các thẻ option trong thẻ select;
  var arrOption = tagChucVu.options;
  // lấy thẻ option được chọn
  nhanVien.chucVu = arrOption[tagChucVu.selectedIndex].innerHTML;
  // console.log(nhanVien.chucVu);
  // console.log(tagChucVu.options);

  document.querySelector('#text-tenNhanVien').innerHTML = nhanVien.tenNV;
  document.querySelector('#text-maNhanVien').innerHTML = nhanVien.maNV;
  document.querySelector('#text-chucVu').innerHTML = nhanVien.chucVu;

  // Hiển thị ra bên phải màn hình
  // Tổng lương 

  document.querySelector('#text-tongLuong').innerHTML = nhanVien.tongLuong();
  document.querySelector('#text-xepLoai').innerHTML = nhanVien.xepLoai();

  // -----------------FUNCTION TABLE---------------------------
  // tạo tr
  var trNV = document.createElement('tr');

  // tạo td
  var tdMaNV = document.createElement('td');
  tdMaNV.innerHTML = nhanVien.maNV;

  var tdTenNV = document.createElement('td');
  tdTenNV.innerHTML = nhanVien.tenNV;

  var tdChucVu = document.createElement('td');
  tdChucVu.innerHTML = nhanVien.chucVu;

  var tdLuongCoBan = document.createElement('td');
  tdLuongCoBan.innerHTML = nhanVien.luongCoBan;

  var tdTongLuong = document.createElement('td');
  tdTongLuong.innerHTML = nhanVien.tongLuong();

  var tdGioLam = document.createElement('td');
  tdGioLam.innerHTML = nhanVien.gioLamTrongThang;

  var tdXepLoai = document.createElement('td');
  tdXepLoai.innerHTML = nhanVien.xepLoai();


  // tạo td chức năng
  var tdChucNang = document.createElement('td');
  
  // tạo button xoá
  var buttonXoa = document.createElement('button');
  buttonXoa.innerHTML = 'Xoá';
  buttonXoa.className = 'btn btn-danger';
  
  buttonXoa.onclick = function(){
      this.parentElement.parentElement.remove();
  }

  // Add button xoá vào chức năng
  tdChucNang.appendChild(buttonXoa);



  // chèn thẻ td vào tr
  trNV.appendChild(tdMaNV);
  trNV.appendChild(tdTenNV);
  trNV.appendChild(tdChucVu);
  trNV.appendChild(tdLuongCoBan);
  trNV.appendChild(tdTongLuong);
  trNV.appendChild(tdGioLam);
  trNV.appendChild(tdXepLoai);
  trNV.appendChild(tdChucNang)

  // chèn thẻ tr vào tbody
  document.querySelector('#tableNhanVien').appendChild(trNV);

}





