// alert();
var Validation = function () {
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
};
