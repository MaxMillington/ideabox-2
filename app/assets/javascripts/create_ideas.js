$(document).ready(function () {

    $('form.new_idea').submit(function(e) {
        //e.preventDefault();
        $(this).find('.form-field').each(function(n, element) {
            if ($(element).val() == '') {

                alert('You goof... You need both title and description to create an idea.');
                $(element).parent().addClass("error");

                return false;
            }
        });

        return true;

    });

});
