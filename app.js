function update_time() {
    let date = new Date();

    $("#hour").text(() => {
        hour = date.getHours();
        return (hour < 10) ? `0${hour}` : `${hour}`
    });

    $("#minute").text(() => {
        min = date.getMinutes();
        return (min < 10) ? `0${min}` : `${min}`
    });

    $("#second").text(() => {
        sec = date.getSeconds();
        return (sec < 10) ? `0${sec}` : `${sec}`
    });
}

function set_seperator(str) {
    $('.sep').text(str);
}

function dark_theme(d) {
    // 1 for turn on dark theme
    if (d == 1) {
        $('body').removeClass('back-light');
        $('body').addClass('back-dark');
        $('.main-text').removeClass("main-light");
        $('.main-text').addClass("main-dark");
        $('.sec-text').removeClass("sec-light");
        $('.sec-text').addClass("sec-dark");
    }
    
    else if (d == 0) {
        $('body').removeClass('back-dark');
        $('body').addClass('back-light');
        $('.sec-text').removeClass("sec-dark");
        $('.sec-text').addClass("sec-light");
    }

}

setInterval(update_time, 1000);

set_seperator(" : ");

dark_theme(1);


