$(document).ready(function () {

    $('form.new_idea').submit(function(e) {
        $(this).find('.form-field').each(function(n, element) {
            if ($(element).val() == '') {

                alert('ERROR');
                $(element).parent().addClass("error");

                return false;
            }
        });

        return true;

    });

});
