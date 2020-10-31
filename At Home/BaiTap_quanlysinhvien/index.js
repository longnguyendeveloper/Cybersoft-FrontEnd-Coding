// var sv = new SinhVien();
// sv.maSinhVien = '001';
// sv.tenSinhVien = 'Nguyễn Văn A'


// var sv2 = new SinhVien();
// sv2.maSinhVien = '002';
// sv2.tenSinhVien = 'Nguyễn Văn B';

// console.log(sv);
// console.log(sv2);

// ---------------------------------------------------
var mangSinhVien = [];
// định nghĩa sự kiện click khi người dùng bấm nút xác nhận
document.querySelector('#btnXacNhan').onclick = function () {
    // tạo ra đối tượng sinh viên chứa thông tin người dùng nhập vào từ giao diện
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    // console.log(sv);

    // Thêm 1 sinh viên vào mảng
    
    mangSinhVien.push(sv);
    console.log(mangSinhVien);
    renderTable(mangSinhVien)
}

var renderTable = function (arrSV) {
    // Từ mảng sinh viên tạo ra 1 chuỗi html nhiều thẻ tr dựa vào vòng lặp
    var noiDungTable = '';
    for (var index = 0; index < arrSV.length; index++) {
        // Mỗi lần lặp lấy ra 1 đối tượng sinhVien
        var sv = arrSV[index];
        // Tạo ra 1 chuỗi + dồn vào nội dung <tr></tr>
        noiDungTable += `
    <tr>
    <td>${sv.maSinhVien}</td>
    <td>${sv.tenSinhVien}</td>
    <td>${sv.email}</td>
    <td>${sv.soDienThoai}</td>
    <td>${sv.tinhDiemTrungBinh()}</td>
    <td>${sv.xepLoaiSinhVien()}</td>
    <td><button class="btn btn-danger">Xoá</button></td>
    </tr>
    `
    }
    console.log(noiDungTable);
    document.querySelector('#tableSinhVien').innerHTML = noiDungTable;
}




//     // tạo thẻ tr, Cú pháp tạo thẻ: document.createElement('tenThe');
//     var trSinhVien = document.createElement('tr');
//     // tạo thẻ td, Cú pháp tạo thẻ: document.createElement('tenThe');
//     var tdMaSinhVien = document.createElement('td');
//     tdMaSinhVien.innerHTML = sv.maSinhVien;

//     var tdTenSinhVien = document.createElement('td')
//     tdTenSinhVien.innerHTML = sv.tenSinhVien;

//     var tdEmail = document.createElement('td')
//     tdEmail.innerHTML = sv.email;

//     var tdSoDienThoai = document.createElement('td')
//     tdSoDienThoai.innerHTML = sv.soDienThoai;

//     var tdDiemTrungBinh = document.createElement('td')
//     tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh();

//     var tdXepLoai = document.createElement('td')
//     tdXepLoai.innerHTML = sv.xepLoaiSinhVien();

//     // TẠO RA TD CHỨC NĂNG

//     var tdChucNang = document.createElement('td');

//     var buttonXoa = document.createElement('button');
//     buttonXoa.innerHTML = 'Xóa';
//     buttonXoa.className = 'btn btn-danger';
//     buttonXoa.onclick = function(){
//         // this: là button xóa
//         // this vị trí hiện tại là thẻ button => .parentElement là thẻ td => td.ParentElement => thẻ tr => .remove():xóa
//         this.parentElement.parentElement.remove();
//     }

//     // add button vào chức năng
//     tdChucNang.appendChild(buttonXoa);


//     // chèn thẻ con vào thẻ cha, Cú pháp: theCha.appendChild(theCon);
//     trSinhVien.appendChild(tdMaSinhVien);
//     trSinhVien.appendChild(tdTenSinhVien);
//     trSinhVien.appendChild(tdEmail);
//     trSinhVien.appendChild(tdSoDienThoai);
//     trSinhVien.appendChild(tdDiemTrungBinh);
//     trSinhVien.appendChild(tdXepLoai);
//     trSinhVien.appendChild(tdChucNang);


//     // DOM đến thẻ tbody => appendChild thẻ tr vào
//     document.querySelector('#tableSinhVien').appendChild(trSinhVien);

// 