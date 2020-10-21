document.querySelector('input.form-control').onfocus = function () {
    document.querySelector('span.input-group-text').classList.add('focused');
    // document.querySelector('div.input-group').classList.add('focused');
}

document.querySelector('input.form-control').onfocusout = function () {
    document.querySelector('span.input-group-text').classList.remove('focused');
    // document.querySelector('div.input-group').classList.remove('focused');
}


