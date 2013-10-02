$(document).ready(function() {
    /* Открытие информации при клике на #more */
    $('a[href="#more"]').on('click', function(e) {
        e.preventDefault();
        $(this).parent().parent().children('.more').toggle();
    });

    if ( $('#field_43096796').length ) $('#field_43096796').mask('+7 (999) 999-9999');
    if ( $('#field_43550358').length ) $('#field_43550358').mask('+7 (999) 999-9999');

    $('input[type="checkbox"]').on('click', function() {
        $(this).parent().parent().parent().find('button').toggleClass('disabled');
    });

    /* Валидация форм */
    $("#form1").validate({
        messages: {
            // Первая форма
            field_43096795: {
                required: 'Введите свое имя'
            },
            field_43096796: {
                required: 'Введите свой контактный телефон'
            },
//            field_43102995: {
//                required: 'Выберите район, в котором вы хотите собирать подписи'
//            },
            field_43096794: {
                required: 'Введите свой E-mail',
                email: 'Введите корректный E-Mail адрес'
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        submitHandler: function(form) {
            /*var params = jQuery.param({
                name: $('#field_43096795').val(),
                email: $('#field_43096794').val(),
                phone: $('#field_43096796').val()
            });*/

            $(form).find('button').button('loading');

            $.post('https://podio.com/webforms/5537565/434647', $(form).serialize()).always(function() {
                //window.location.href = "card.php?"+params;
                var card = $('<form method="post" action="card.php" style="display: none">'
                    +'<input type="hidden" name="name" value="'+$('#field_43096795').val()+'">'
                    +'<input type="hidden" name="email" value="'+$('#field_43096794').val()+'">'
                    +'<input type="hidden" name="phone" value="'+$('#field_43096796').val()+'">'
                    +'</form>');
                $('body').append(card);
                $(card).submit();
                $(form).find('button').button('reset');
            });
        }
    });

    $("#form2").validate({
        messages: {
            field_43550356: {
                required: 'Введите свое имя'
            },
            field_43550358: {
                required: 'Введите свой контактный телефон'
            },
            field_43550359: {
                required: 'Выберите район, в котором вы живете'
            },
            field_43550357: {
                required: 'Введите свой E-mail',
                email: 'Введите корректный E-Mail адрес'
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        submitHandler: function(form) {
            /*var params = jQuery.param({
                name: $('#field_43550356').val(),
                email: $('#field_43550357').val(),
                phone: $('#field_43550358').val()
            });*/

            $(form).find('button').button('loading');

            $.post('https://podio.com/webforms/5594624/439028', $(form).serialize()).always(function() {
                //window.location.href = "card.php?"+params;
                var card = $('<form method="post" action="card.php" style="display: none">'
                    +'<input type="hidden" name="name" value="'+$('#field_43550356').val()+'">'
                    +'<input type="hidden" name="email" value="'+$('#field_43550357').val()+'">'
                    +'<input type="hidden" name="phone" value="'+$('#field_43550358').val()+'">'
                    +'</form>');
                $('body').append(card);
                $(card).submit();
                $(form).find('button').button('reset');
            });
        }
    });
});