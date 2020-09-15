$(document).ready(function () {
    $('input').focus(function () {
        if ($(this).val() > 0) {
            
        } else {
            $(this).val('');
        }
    });

    $('input').blur(function () {
        if ($(this).val() == '') {
            $(this).val('_');
        }
    });

    $('input').keyup(function (e) {
        if ($.isNumeric($(this).val())) {
            $(this).blur()
            $(this).next().val('');
            $(this).next().focus();
            console.log('numeric')
        }

        if (e.keyCode == 8) {
            $(this).val('');
            $(this).blur();
            $(this).prev().focus();
        }
    });

});