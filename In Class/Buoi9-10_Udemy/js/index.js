document.querySelector('input.form-control').onfocus = function () {
    var inputGroupText = document.querySelector('span.input-group-text');
    if (inputGroupText) {
        inputGroupText.style.backgroundColor = 'white';
    }
}

document.querySelector('input.form-control').onfocusout = function () {
    var inputGroupText = document.querySelector('span.input-group-text');
    if (inputGroupText) {
        inputGroupText.style.backgroundColor = '#f2f3f5';
    }
}

