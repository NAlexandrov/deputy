$( document ).ready(function() {
    var data = {
        'Любой': [{
            deputat: 'Великанова Ирина Яковлевна',
            leaflet: '18.pdf',
            preview: '18.gif'
        },{
            deputat: 'Гончаров Сергей Алексеевич',
            leaflet: '19.pdf',
            preview: '19.gif'
        },{
            deputat: 'Зверев Сергей Иванович',
            leaflet: '20.pdf',
            preview: '20.gif'
        },{
            deputat: 'Ивановский Пётр Сергеевич',
            leaflet: '21.pdf',
            preview: '21.gif'
        },{
            deputat: 'Кругляков Виктор Михайлович',
            leaflet: '22.pdf',
            preview: '22.gif'
        },{
            deputat: 'Крутов Александр Николаевич',
            leaflet: '23.pdf',
            preview: '23.gif'
        },{
            deputat: 'Москвин-Тарханов Михаил Иванович',
            leaflet: '24.pdf',
            preview: '24.gif'
        },{
            deputat: 'Новицкий Иван Юрьевич',
            leaflet: '25.pdf',
            preview: '25.gif'
        },{
            deputat: 'Петров Анатолий Валентинович',
            leaflet: '26.pdf',
            preview: '26.gif'
        },{
            deputat: 'Протопопов Игорь Серафимович',
            leaflet: '27.pdf',
            preview: '27.gif'
        },{
            deputat: 'Рябинин Алексей Валерьевич',
            leaflet: '28.pdf',
            preview: '28.gif'
        },{
            deputat: 'Сивко Вячеслав Владимирович',
            leaflet: '29.pdf',
            preview: '29.gif'
        },{
            deputat: 'Семенников Александр Григорьевич',
            leaflet: '30.pdf',
            preview: '30.gif'
        },{
            deputat: 'Тишин Михаил Михайлович',
            leaflet: '31.pdf',
            preview: '31.gif'
        },{
            deputat: 'Щитов Кирилл Владимирович',
            leaflet: '32.pdf',
            preview: '32.gif'
        }],
        "Академический":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.gif"},"Алексеевский":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.gif"},"Алтуфьевский":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.gif"},"Арбат":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.gif"},"Аэропорт":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.gif"},"Бабушкинский":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.gif"},"Басманный":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.gif"},"Беговой":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.gif"},"Бескудниковский":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.gif"},"Бибирево":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.gif"},"Бирюлево Восточное":{"deputat":"Орлов Степан Владимирович","leaflet":"11.pdf","preview":"11.gif"},"Бирюлево Западное":{"deputat":"Бочаров Олег Евгеньевич","leaflet":"12.pdf","preview":"12.gif"},"Богородское":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.gif"},"Братеево":{"deputat":"Орлов Степан Владимирович","leaflet":"11.pdf","preview":"11.gif"},"Бутырский":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.gif"},"Вешняки":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.gif"},"Внуково":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.gif"},"Войковский":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.gif"},"Восточное Дегунино":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.gif"},"Восточное Измайлово":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.gif"},"Восточный":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.gif"},"Выхино-Жулебино":{"deputat":"Турта Сергей Александрович","leaflet":"9.pdf","preview":"9.gif"},"Гагаринский":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.gif"},"Головинский":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.gif"},"Гольяново":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.gif"},"Даниловский":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.gif"},"Дмитровский":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.gif"},"Донской":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.gif"},"Дорогомилово":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.gif"},"Замоскворечье":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.gif"},"Западное Дегунино":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.gif"},"Зюзино":{"deputat":"Палеев Антон Рафаэльевич","leaflet":"13.pdf","preview":"13.gif"},"Зябликово":{"deputat":"Орлов Степан Владимирович","leaflet":"11.pdf","preview":"11.gif"},"Ивановское":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.gif"},"Измайлово":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.gif"},"Капотня":{"deputat":"Турта Сергей Александрович","leaflet":"9.pdf","preview":"9.gif"},"Коньково":{"deputat":"Палеев Антон Рафаэльевич","leaflet":"13.pdf","preview":"13.gif"},"Коптево":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.gif"},"Косино-Ухтомский":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.gif"},"Котловка":{"deputat":"Палеев Антон Рафаэльевич","leaflet":"13.pdf","preview":"13.gif"},"Красносельский":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.gif"},"Крылатское":{"deputat":"Герасимов Евгений Владимирович","leaflet":"16.pdf","preview":"16.gif"},"Крюково":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.gif"},"Кузьминки":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.gif"},"Кунцево":{"deputat":"Герасимов Евгений Владимирович","leaflet":"16.pdf","preview":"16.gif"},"Куркино":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.gif"},"Левобережный":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.gif"},"Лефортово":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.gif"},"Лианозово":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.gif"},"Ломоносовский":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.gif"},"Лосиноостровский":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.gif"},"Люблино":{"deputat":"Турта Сергей Александрович","leaflet":"9.pdf","preview":"9.gif"},"Марфино":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.gif"},"Марьина роща":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.gif"},"Марьино":{"deputat":"Турта Сергей Александрович","leaflet":"9.pdf","preview":"9.gif"},"Матушкино":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.gif"},"Метрогородок":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.gif"},"Мещанский":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.gif"},"Митино":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.gif"},"Можайский":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.gif"},"Молжаниновский":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.gif"},"Москворечье-Сабурово":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.gif"},"Нагатино-Садовники":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.gif"},"Нагатинский затон":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.gif"},"Нагорный":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.gif"},"Некрасовка":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.gif"},"Нижегородский":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.gif"},"Ново-Переделкино":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.gif"},"Новогиреево":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.gif"},"Новокосино":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.gif"},"Обручевский":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.gif"},"Орехово-Борисово Северное":{"deputat":"Орлов Степан Владимирович","leaflet":"11.pdf","preview":"11.gif"},"Орехово-Борисово Южное":{"deputat":"Орлов Степан Владимирович","leaflet":"11.pdf","preview":"11.gif"},"Останкинский":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.gif"},"Отрадное":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.gif"},"Очаково-Матвеевское":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.gif"},"Перово":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.gif"},"Печатники":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.gif"},"Покровское-Стрешнево":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.gif"},"Преображенское":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.gif"},"Пресненский":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.gif"},"Проспект Вернадского":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.gif"},"Раменки":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.gif"},"Ростокино":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.gif"},"Рязанский":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.gif"},"Савелки":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.gif"},"Савеловский":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.gif"},"Свиблово":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.gif"},"Северное Бутово":{"deputat":"Бочаров Олег Евгеньевич","leaflet":"12.pdf","preview":"12.gif"},"Северное Измайлово":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.gif"},"Северное Медведково":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.gif"},"Северное Тушино":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.gif"},"Северный":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.gif"},"Силино":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.gif"},"Сокол":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.gif"},"Соколиная гора":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.gif"},"Сокольники":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.gif"},"Солнцево":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.gif"},"Старое Крюково":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.gif"},"Строгино":{"deputat":"Герасимов Евгений Владимирович","leaflet":"16.pdf","preview":"16.gif"},"Таганский":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.gif"},"Тверской":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.gif"},"Текстильщики":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.gif"},"Теплый Стан":{"deputat":"Палеев Антон Рафаэльевич","leaflet":"13.pdf","preview":"13.gif"},"Тимирязевский":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.gif"},"Тропарево-Никулино":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.gif"},"Филевский парк":{"deputat":"Герасимов Евгений Владимирович","leaflet":"16.pdf","preview":"16.gif"},"Фили-Давыдково":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.gif"},"Хамовники":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.gif"},"Ховрино":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.gif"},"Хорошево-Мневники":{"deputat":"Герасимов Евгений Владимирович","leaflet":"16.pdf","preview":"16.gif"},"Хорошевский":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.gif"},"Царицыно":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.gif"},"Черемушки":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.gif"},"Чертаново Северное":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.gif"},"Чертаново Центральное":{"deputat":"Бочаров Олег Евгеньевич","leaflet":"12.pdf","preview":"12.gif"},"Чертаново Южное":{"deputat":"Бочаров Олег Евгеньевич","leaflet":"12.pdf","preview":"12.gif"},"Щукино":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.gif"},"Южное Бутово":{"deputat":"Бочаров Олег Евгеньевич","leaflet":"12.pdf","preview":"12.gif"},"Южное Медведково":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.gif"},"Южное Тушино":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.gif"},"Южнопортовый":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.gif"},"Якиманка":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.gif"},"Ярославский":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.gif"},"Ясенево":{"deputat":"Палеев Антон Рафаэльевич","leaflet":"13.pdf","preview":"13.gif"}
    };

    $.each(data, function(region) {
        $('#regions').append($('<option></option>').prop('value', region).text(region));
    });

    $("#regions").select2({
        width: '100%'
    });

    $('a[href=#offer]').on('click', function(e) {
        e.preventDefault();
        $('.offerta').show();
    });

    $('.offerta-close').on('click', function(e) {
        e.preventDefault();
        $('.offerta').hide();
    });

    $("a[href=#make]").on('click', function(e) {
        e.preventDefault();

        var region = $('#regions').val();
        var deputat = data[region];

        if ( typeof deputat.length != "undefined") {
            deputat = deputat[Math.floor(Math.random()*deputat.length)];
        }

        $('.download_leaflet img').prop('src', '../assets/preview/'+deputat.preview);
        $('.download_leaflet').prop('href', '../assets/files/'+deputat.leaflet);
    });

    $("a[href=#make]").fancybox({
        maxWidth	: 550,
        maxHeight	: 705,
        fitToView	: false,
        width		: '90%',
        height		: '98%',
        autoSize	: false,
        closeClick	: false
    });

    $("a[href=#showDonation]").fancybox({
        maxWidth	: 505,
        maxHeight	: 500,
        fitToView	: false,
        width		: '90%',
        height		: '98%',
        autoSize	: false,
        closeClick	: false
    });


    $('#donation form').submit(function() {
        dataLayer.push({'DonationSum': $('#robosum').val()});
    });
});