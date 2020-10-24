// 1. Trừa tượng
// 2. Đóng gói
// 3. Kế thừa
// 4. Đa hình


// Khái báo đối tượng trong js

var hocSinh = {
    maHS: '001',
    tenHS: 'Nguyễn Văn A',

    xuatThongTinHocSinh: function(){
        console.log('mã học sinh', hocSinh.maHS);
        // Trỏ this chính là đổi tượng ({}) = "hocSinh"
        console.log('Tên học sinh', this.tenHS);
    }
}


// Truy xuất biến trong đối tượng(thuộc tính)
// Cách 1: [(tên_đối_tượng).tenThuocTinh]
console.log(hocSinh.maHS);

// Cách 2: [tên_đối_tượng]['tenThuocTinh']
console.log(hocSinh['maHS']);


// truy xuất hàm trong đói tượng
console.log(hocSinh.xuatThongTinHocSinh());

