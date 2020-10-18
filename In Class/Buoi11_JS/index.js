//Dom dựa vào id
// thay đổi nội dung giữa 2 thẻ đóng mở (innerHTML)
document.getElementById('title').innerHTML = 'Front end 54';
document.getElementById('text').value = 'front end 54'
document.getElementById('img').src = "http://picsum.photos/200"

var tieuDe = 'Front end 54';
var num = 10;
// hiển thị dữ liệu qua tab console của browser 
console.log(tieuDe); //kiểu number
var trueFalse = true //Kiểu boolean
//Ngoài ra còn kiểu null và undefine
//Hiển thị dữ liệu qua tab console của browser
var kieuDuLieuTieuDe = typeof (num);
console.log(kieuDuLieuTieuDe);
//----------------- khái niệm: if else vòng lặp ------------------
// Cấu trúc rẽ nhánh (if else)
// Ví dụ: kiểm tra số chẳn lẻ
var so = 10;
if (so % 2 === 0) {
    console.log('Số chẵn')
}
else {
    console.log('Số lẻ')
}

//khai báo hàm trong javascript
function tinhTong(a, b) {
    return a + b;
    //sau lệnh return sẽ ko nhận thêm
}

var tong = tinhTong(5, 10);
console.log(tong);

//cách 2:
var tinhTong2So = function (a, b) {
    return a + b;
}
var tong = tinhTong2So(10, 20);
console.log(tong);

// Bài tập ứng dụng
var diemToan = 8;
var diemLy = 1;
var diemHoa = 2;

var tinhDiemTB = function (diemToan, diemLy, diemHoa) {
    return ((diemToan + diemLy + diemHoa) / 3);

}


var xepLoai = function (tinhDiemTB) {
    if (tinhDiemTB >= 9 && tinhDiemTB <= 10) {
        return 'Xuất sắc';
    } else if (tinhDiemTB >= 8 && tinhDiemTB < 9) {
        return 'Giỏi';
    } else if (tinhDiemTB >= 7 && tinhDiemTB < 8) {
        return 'Khá';
    } else if (tinhDiemTB >= 6 && tinhDiemTB < 7) {
        return 'Trung Bình Khá';
    } else if (tinhDiemTB >= 5 && tinhDiemTB < 6) {
        return 'Trung Bình';
    } else {
        return 'Yếu';
    }

}

var main = function () {
    var diemTB = tinhDiemTB(diemToan, diemLy, diemHoa);
    console.log(diemTB);

    var xepLoai2 = xepLoai(diemTB);
    console.log(xepLoai2);
}

main();


//------------------ Mảng & Vòng lặp ------------------
var mangSinhVien = ['Khải', 'Mẫn', 'Nam', 'Huy'];
var mangSo = [12, 75, 34, 156];
//Truy xuất phần tử trong mảng
//console.log(mangSinhVien[2]);

for (var i = 0; i <= mangSinhVien.length - 1; i++) {
    console.log(mangSinhVien[i]);
}


console.log('--------------------')
for (var i = mangSinhVien.length - 1; i >= 0; i--) {
    console.log(mangSinhVien[i]);
}

//-----------------Khái niệm event--------------------------

// var thayDoiNoiDung = function(){
//     document.getElementById('title').innerHTML = 'Đã thay đổi nội dung!'
// }
// document.getElementById('btnClick').onclick = thayDoiNoiDung;

document.getElementById('btnClick').onclick = function () {
    document.getElementById('title').innerHTML = 'Đã thay đổi nội dung!';
}


// ----------------------Bài tập 1------------------------
document.getElementById('btnThayDoiNoiDung').onclick = function () {
    var tagP = document.getElementById('txt');
    tagP.innerHTML = 'Đã thay đổi';
    // thay đổi thuộc tính style
    tagP.style.color = 'red';
    tagP.style.fontSize = '100px';
}

//------------------------ Bật đèn-------------------
// document.getElementById('btnOn').onclick = function () {
//     var btn = document.getElementById('denOff');
//     btn.src = './imgs/pic_bulbon.gif';
// }

// document.getElementById('btnOff').onclick = function () {
//     var btn = document.getElementById('denOff');
//     btn.src = './imgs/pic_bulboff.gif';
// }

// ------------------------ Form đăng nhập-------------
// bước 1 định nghĩa sự kiện khi người dùng bấm nút thông báo
document.getElementById('btnThongBao').onclick = function () {

    // bước 2: lấy thông tin tài khoản và mật khẩu từ người dung
    var taiKhoan = document.getElementById('textTaiKhoan').value;
    var matKhau = document.getElementById('textMatKhau').value;

    // bước 3: kiểm tra giá trị
    if (taiKhoan === 'cybersoft' && matKhau === 'cybersoft') {
        // đổi màu button thành màu xanh => đổi innerHTML button thành đang nhập thành công!
        var buttonThongBao = document.getElementById('btnThongBao');
        buttonThongBao.className = 'btn btn-success';
        buttonThongBao.innerHTML = 'hoàn thành đăng nhập';
    }
    else {
        var buttonThongBao = document.getElementById('btnThongBao');
        buttonThongBao.className = 'btn btn-danger';
        buttonThongBao.innerHTML = 'thất bại';
    }
}

// ------------------ Dom dựa vào tên thẻ (tagname)--------------------

var dsTheSection = document.getElementsByTagName('section');

dsTheSection[1].style.color = 'red';
dsTheSection[1].innerHTML = 'Front end 54';

for (var i = 0; i < dsTheSection.length; i++) {
    var tagSection = dsTheSection[i];
    tagSection.style.color = 'pink';
}

console.log(dsTheSection);


// ------------------ Dom dựa vào classname-------------------

var dsTheClassName = document.getElementsByClassName('txt_');

console.log('dsTheClassName', dsTheClassName);
for (var i = 0; i < dsTheClassName.length; i++) {
    var tagClass = dsTheClassName[i];
    tagClass.style.fontSize = '80px';
}

// ------------------ Dom dựa vào QuerySelector-------------------
// trả về 1 đối tượng đầu tiên có selector đó
var tagPExample = document.querySelector('.example');
tagPExample.style.fontWeight = ('bold');

// ------------------ Dom dựa vào QuerySelectorAll-------------------
// Trả về 1 mảng chứa các thẻ có selector đó. Lưu ý: nếu chỉ có 1 thẻ thì vẫn trả về mảng

var tagPExample1 = document.querySelectorAll('.example')[1];

tagPExample1.style.color = ('violet');

