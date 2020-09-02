document.addEventListener("DOMContentLoaded", Datee);

function Datee() {
    var msInDay = 86400000,
        counterLength = 90,
        months, countryName = 'it', // Встановлюємо мову для місяців.
        localDate = new Date();

    switch (countryName) {
        case 'it': // Italia
            months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            break;
        case 'ru': // Русский
            months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
            break;
    }


    for (var counter = 0; counter < counterLength; counter++) {
        var dateClass = "date-" + counter,
            nodeList = document.getElementsByClassName(dateClass),
            date = new Date(localDate.getTime() - counter * msInDay),
            timeCounter = 0;
        timeArray = time(nodeList /*, true*/ ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

        timeArray = timeFormat(timeArray);

        for (var i = 0; i < nodeList.length; i++) {
            var data = nodeList[i].dataset;

            if (data.format) {
                nodeList[i].innerHTML = format(date, data.format);
                
            } else {
                nodeList[i].innerHTML = format(date, "dd month yyyy");
            }
            if (/\btime\b/.test(nodeList[i].className)) {
                nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
                timeCounter++;
            }
        }
    }

 

    for (var counter = 0; counter < counterLength; counter++) {
        var dateClass = "date" + counter,
            nodeList = document.getElementsByClassName(dateClass),
            date = new Date(localDate.getTime() + counter * msInDay),
            timeCounter = 0;
        timeArray = time(nodeList /*, true*/ ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

        timeArray = timeFormat(timeArray);

        for (var i = 0; i < nodeList.length; i++) {
            var data = nodeList[i].dataset;

            if (data.format) {
                nodeList[i].innerHTML = format(date, data.format);

            } else {
                nodeList[i].innerHTML = format(date, "dd month yyyy"); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
            }
        }
    }



    function time(nodeList, reverse) {
        var timeArray = [];

        for (var i = 0; i < nodeList.length; i++) {
            if (nodeList[i].className.match(/\btime\b/)) {
                timeArray.push(timeRandom());
            }
        }

        if (reverse) timeArray.sort(function (a, b) {
            return b - a;
        });
        else timeArray.sort(function (a, b) {
            return a - b;
        });

        return timeArray;
    }

    function timeRandom() {
        return Math.round(0 + Math.random() * 1440);
    }

    function timeFormat(timearray) {
        var array = [];

        for (var i = 0; i < timearray.length; i++) {
            var htemp = Math.floor(timearray[i] / 60),
                mtemp = timearray[i] % 60,
                hours = htemp < 10 ? "0" + htemp : htemp,
                minutes = mtemp < 10 ? "0" + mtemp : mtemp;
            array.push(hours + ":" + minutes);
        }


        return array;
    }

    function format(date, formatstring) {
        var innerDate = "",
            day = date.getDate(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            fo = formatstring || true;

        switch (fo) {
            case "yyyy":
                innerDate += "" + year;
                return innerDate;
           
            case "dd month yyyy":
                innerDate += (day < 10) ? ("0" + day) : day;
                innerDate += " ";
                innerDate += months[month - 1];
                innerDate += " " + year;
                return innerDate;

            default:
                innerDate += (day < 10) ? ("0" + day) : day;
                innerDate += ".";
                innerDate += (month < 10) ? ("0" + month) : month;
                innerDate += "." + year;
                return innerDate;
        }
    }
}


var signs = {
    aries:       ['Ariete', 'Ariete'],
    taurus:      ['Toro', 'Toro'],
    twins:       ['Gemelli', 'Gemelli'],
    cancer:      ['Cancro', 'Cancro'],
    leo:         ['Leone', 'Leone'],
    virgo:       ['Vergine', 'Vergine'],
    libra:       ['Bilancia', 'Bilancia'],
    scorpio:     ['Scorpione', 'Scorpione'],
    sagittarius: ['Sagittario', 'Sagittario'],
    сapricorn:   ['Capricorno', 'Capricorno'],
    аquarius:    ['Acquario', 'Acquario'],
    pisces:      ['Pesci', 'Pesci']
}

$(function(){
        var hiddenPage = $('.zodiac-page');

        $('.zodiac-button').on('click', function(){
            var sign = $(this).attr('data-sign');

            $('.zodiac-page').find('.sign').each(function(index, elem){
                var $elem =  $(elem);
                $elem.text(signs[sign][$elem.attr('data-sign')]);
                $('.index-page').fadeOut('300', function(){
                    hiddenPage.fadeIn('300');
                });
            });
    })
});

let date = new Date();
year = date.getFullYear();
year5 = date.getFullYear() - 5;
let l = document.getElementsByClassName('cur-year').length;
let l5 = document.getElementsByClassName('cur-year5').length;
for(let i = 0; i < l; i++)
{
    document.getElementsByClassName('cur-year')[i].innerHTML = year;
}

for(let i = 0; i < l5; i++)
{
    document.getElementsByClassName('cur-year5')[i].innerHTML = year5;
}
month = date.getMonth();
mArray = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

let m1 = document.getElementsByClassName('month1').length;
for(let i = 0; i < m1; i++)
{
    document.getElementsByClassName('month1')[i].innerHTML = mArray[month + 1];
}