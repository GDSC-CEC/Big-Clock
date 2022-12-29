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

setInterval(update_time, 1000);

set_seperator(" : ");

