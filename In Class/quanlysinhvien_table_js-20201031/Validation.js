// tạo lớp đối tượng kiểm tra hợp lệ
// Tên lớp dối tượng viết hoa chữ cái đầu tiên
var Validation = function () {
  // (sv.maSinhVien, 'Mã sinh viên', '.kiemTraRong-maSinhVien')
  this.kiemTraRong = function (value, name, selectorError, inputError) {
    if (value.trim() === "") {
      document.querySelector(selectorError).innerHTML =
        name + " không được bỏ trống!";

      document.querySelector(inputError).style.boxShadow =
        "1px 1px 2px red, 0 0 5px red, 0 0 5px red";
      return false;
    }

    document.querySelector(selectorError).innerHTML = "";
    return true;
  };

  this.kiemTraEmail = function (value, name, selectorError) {
    var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    if (!regexEmail.test(value)) {
      document.querySelector(selectorError).innerHTML =
        name + " không đúng định dạng!";
      return false;
    }

    document.querySelector(selectorError).innerHTML = "";
    return true;
  };

  this.kiemTraTatCaKyTu = function (value, name, selectorError) {
    var regexKyTu = /^[A-Za-z ]+$/;
    if (!regexKyTu.test(value)) {
      document.querySelector(selectorError).innerHTML =
        name + " tất cả phải là ký tự";
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";

    return true;
  };

  this.kiemTraTatCaSo = function (value, name, selectorError) {
    var regexSo = /^[0-9]+$/;
    if (!regexSo.test(value)) {
      document.querySelector(selectorError).innerHTML =
        name + " tất cả phải là số";
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };
  this.kiemTraGiaTri = function (
    value,
    name,
    selectorError,
    minValue,
    maxValue
  ) {
    if (Number(value) < minValue || Number(value) > maxValue) {
      document.querySelector(selectorError).innerHTML =
        name + `từ ${minValue} đến ${maxValue}`;
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };

  this.kiemTraDoDaiChuoi = function (
    value,
    name,
    selectorError,
    minLength,
    maxLength
  ) {
    if (value.trim().length < minLength || value.trim().length > maxLength) {
      document.querySelector(selectorError).innerHTML =
        name + ` độ dài phải từ ${minLength} đến ${maxLength}`;
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };
};
