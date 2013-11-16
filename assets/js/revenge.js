$( document ).ready(function() {
    var data = {
        'Любой': [{
            deputat: 'Великанова Ирина Яковлевна',
            leaflet: '18.pdf',
            preview: '18.jpg'
        },{
            deputat: 'Гончаров Сергей Алексеевич',
            leaflet: '19.pdf',
            preview: '19.jpg'
        },{
            deputat: 'Зверев Сергей Иванович',
            leaflet: '20.pdf',
            preview: '20.jpg'
        },{
            deputat: 'Ивановский Пётр Сергеевич',
            leaflet: '21.pdf',
            preview: '21.jpg'
        },{
            deputat: 'Кругляков Виктор Михайлович',
            leaflet: '22.pdf',
            preview: '22.jpg'
        },{
            deputat: 'Крутов Александр Николаевич',
            leaflet: '23.pdf',
            preview: '23.jpg'
        },{
            deputat: 'Москвин-Тарханов Михаил Иванович',
            leaflet: '24.pdf',
            preview: '24.jpg'
        },{
            deputat: 'Новицкий Иван Юрьевич',
            leaflet: '25.pdf',
            preview: '25.jpg'
        },{
            deputat: 'Петров Анатолий Валентинович',
            leaflet: '26.pdf',
            preview: '26.jpg'
        },{
            deputat: 'Протопопов Игорь Серафимович',
            leaflet: '27.pdf',
            preview: '27.jpg'
        },{
            deputat: 'Рябинин Алексей Валерьевич',
            leaflet: '28.pdf',
            preview: '28.jpg'
        },{
            deputat: 'Сивко Вячеслав Владимирович',
            leaflet: '29.pdf',
            preview: '29.jpg'
        },{
            deputat: 'Семенников Александр Григорьевич',
            leaflet: '30.pdf',
            preview: '30.jpg'
        },{
            deputat: 'Тишин Михаил Михайлович',
            leaflet: '31.pdf',
            preview: '31.jpg'
        },{
            deputat: 'Щитов Кирилл Владимирович',
            leaflet: '32.pdf',
            preview: '32.jpg'
        }],
        "Академический":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.jpg"},"Алексеевский":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.jpg"},"Алтуфьевский":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.jpg"},"Арбат":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.jpg"},"Аэропорт":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.jpg"},"Бабушкинский":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.jpg"},"Басманный":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.jpg"},"Беговой":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.jpg"},"Бескудниковский":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.jpg"},"Бибирево":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.jpg"},"Бирюлево Восточное":{"deputat":"Орлов Степан Владимирович","leaflet":"11.pdf","preview":"11.jpg"},"Бирюлево Западное":{"deputat":"Бочаров Олег Евгеньевич","leaflet":"12.pdf","preview":"12.jpg"},"Богородское":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.jpg"},"Братеево":{"deputat":"Орлов Степан Владимирович","leaflet":"11.pdf","preview":"11.jpg"},"Бутырский":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.jpg"},"Вешняки":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.jpg"},"Внуково":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.jpg"},"Войковский":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.jpg"},"Восточное Дегунино":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.jpg"},"Восточное Измайлово":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.jpg"},"Восточный":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.jpg"},"Выхино-Жулебино":{"deputat":"Турта Сергей Александрович","leaflet":"9.pdf","preview":"9.jpg"},"Гагаринский":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.jpg"},"Головинский":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.jpg"},"Гольяново":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.jpg"},"Даниловский":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.jpg"},"Дмитровский":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.jpg"},"Донской":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.jpg"},"Дорогомилово":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.jpg"},"Замоскворечье":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.jpg"},"Западное Дегунино":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.jpg"},"Зюзино":{"deputat":"Палеев Антон Рафаэльевич","leaflet":"13.pdf","preview":"13.jpg"},"Зябликово":{"deputat":"Орлов Степан Владимирович","leaflet":"11.pdf","preview":"11.jpg"},"Ивановское":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.jpg"},"Измайлово":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.jpg"},"Капотня":{"deputat":"Турта Сергей Александрович","leaflet":"9.pdf","preview":"9.jpg"},"Коньково":{"deputat":"Палеев Антон Рафаэльевич","leaflet":"13.pdf","preview":"13.jpg"},"Коптево":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.jpg"},"Косино-Ухтомский":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.jpg"},"Котловка":{"deputat":"Палеев Антон Рафаэльевич","leaflet":"13.pdf","preview":"13.jpg"},"Красносельский":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.jpg"},"Крылатское":{"deputat":"Герасимов Евгений Владимирович","leaflet":"16.pdf","preview":"16.jpg"},"Крюково":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.jpg"},"Кузьминки":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.jpg"},"Кунцево":{"deputat":"Герасимов Евгений Владимирович","leaflet":"16.pdf","preview":"16.jpg"},"Куркино":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.jpg"},"Левобережный":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.jpg"},"Лефортово":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.jpg"},"Лианозово":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.jpg"},"Ломоносовский":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.jpg"},"Лосиноостровский":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.jpg"},"Люблино":{"deputat":"Турта Сергей Александрович","leaflet":"9.pdf","preview":"9.jpg"},"Марфино":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.jpg"},"Марьина роща":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.jpg"},"Марьино":{"deputat":"Турта Сергей Александрович","leaflet":"9.pdf","preview":"9.jpg"},"Матушкино":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.jpg"},"Метрогородок":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.jpg"},"Мещанский":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.jpg"},"Митино":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.jpg"},"Можайский":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.jpg"},"Молжаниновский":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.jpg"},"Москворечье-Сабурово":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.jpg"},"Нагатино-Садовники":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.jpg"},"Нагатинский затон":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.jpg"},"Нагорный":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.jpg"},"Некрасовка":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.jpg"},"Нижегородский":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.jpg"},"Ново-Переделкино":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.jpg"},"Новогиреево":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.jpg"},"Новокосино":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.jpg"},"Обручевский":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.jpg"},"Орехово-Борисово Северное":{"deputat":"Орлов Степан Владимирович","leaflet":"11.pdf","preview":"11.jpg"},"Орехово-Борисово Южное":{"deputat":"Орлов Степан Владимирович","leaflet":"11.pdf","preview":"11.jpg"},"Останкинский":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.jpg"},"Отрадное":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.jpg"},"Очаково-Матвеевское":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.jpg"},"Перово":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.jpg"},"Печатники":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.jpg"},"Покровское-Стрешнево":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.jpg"},"Преображенское":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.jpg"},"Пресненский":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.jpg"},"Проспект Вернадского":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.jpg"},"Раменки":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.jpg"},"Ростокино":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.jpg"},"Рязанский":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.jpg"},"Савелки":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.jpg"},"Савеловский":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.jpg"},"Свиблово":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.jpg"},"Северное Бутово":{"deputat":"Бочаров Олег Евгеньевич","leaflet":"12.pdf","preview":"12.jpg"},"Северное Измайлово":{"deputat":"Метельский Андрей Николаевич","leaflet":"6.pdf","preview":"6.jpg"},"Северное Медведково":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.jpg"},"Северное Тушино":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.jpg"},"Северный":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.jpg"},"Силино":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.jpg"},"Сокол":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.jpg"},"Соколиная гора":{"deputat":"Степаненко Вера Станиславовна","leaflet":"7.pdf","preview":"7.jpg"},"Сокольники":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.jpg"},"Солнцево":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.jpg"},"Старое Крюково":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.jpg"},"Строгино":{"deputat":"Герасимов Евгений Владимирович","leaflet":"16.pdf","preview":"16.jpg"},"Таганский":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.jpg"},"Тверской":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.jpg"},"Текстильщики":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.jpg"},"Теплый Стан":{"deputat":"Палеев Антон Рафаэльевич","leaflet":"13.pdf","preview":"13.jpg"},"Тимирязевский":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.jpg"},"Тропарево-Никулино":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.jpg"},"Филевский парк":{"deputat":"Герасимов Евгений Владимирович","leaflet":"16.pdf","preview":"16.jpg"},"Фили-Давыдково":{"deputat":"Милявский Александр Борисович","leaflet":"15.pdf","preview":"15.jpg"},"Хамовники":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.jpg"},"Ховрино":{"deputat":"Иванов Виктор Павлович","leaflet":"3.pdf","preview":"3.jpg"},"Хорошево-Мневники":{"deputat":"Герасимов Евгений Владимирович","leaflet":"16.pdf","preview":"16.jpg"},"Хорошевский":{"deputat":"Антонов Игорь Евгеньевич","leaflet":"2.pdf","preview":"2.jpg"},"Царицыно":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.jpg"},"Черемушки":{"deputat":"Платонов Владимир Михайлович","leaflet":"14.pdf","preview":"14.jpg"},"Чертаново Северное":{"deputat":"Антонцев Михаил Иванович","leaflet":"10.pdf","preview":"10.jpg"},"Чертаново Центральное":{"deputat":"Бочаров Олег Евгеньевич","leaflet":"12.pdf","preview":"12.jpg"},"Чертаново Южное":{"deputat":"Бочаров Олег Евгеньевич","leaflet":"12.pdf","preview":"12.jpg"},"Щукино":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.jpg"},"Южное Бутово":{"deputat":"Бочаров Олег Евгеньевич","leaflet":"12.pdf","preview":"12.jpg"},"Южное Медведково":{"deputat":"Шапошников Валерий Алексеевич","leaflet":"4.pdf","preview":"4.jpg"},"Южное Тушино":{"deputat":"Скобинов Валерий Петрович","leaflet":"17.pdf","preview":"17.jpg"},"Южнопортовый":{"deputat":"Стебенкова Людмила Васильевна","leaflet":"8.pdf","preview":"8.jpg"},"Якиманка":{"deputat":"Святенко Инна Юрьевна","leaflet":"1.pdf","preview":"1.jpg"},"Ярославский":{"deputat":"Портнова Татьяна Арториджевна","leaflet":"5.pdf","preview":"5.jpg"},"Ясенево":{"deputat":"Палеев Антон Рафаэльевич","leaflet":"13.pdf","preview":"13.jpg"}
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
        maxHeight	: 810,
        fitToView	: false,
        width		: '90%',
        height		: '97%',
        autoSize	: false,
        closeClick	: false
    });
});