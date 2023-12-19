timer.js

const CLOCK = [
    document.querySelector("#hour"),
    document.querySelector("#minute"),
    document.querySelector("#second")
];

// seconds = document.querySelector(".timer-input");
// seconds = parseInt(seconds.innerHTML)
let seconds = 60; // 00:01:40


setInterval( () => {
    if (seconds < 0) return;

    let s = seconds;
    const h = ( s / 3600 ) - ( ( s % 3600 ) / 3600 );
    s -= h * 3600;
    const m = ( s / 60 ) - ( ( s % 60 ) / 60 );
    s -= m * 60;

    const t = [ Math.round(h), Math.round(m), Math.round(s) ]

    console.log(t);

    for (let i = 0; i < CLOCK.length; i++)
        CLOCK[i].innerText = t[i] < 10 ? `0${t[i]}` : `${t[i]}`;

    seconds -= 1;
}, 1000);

