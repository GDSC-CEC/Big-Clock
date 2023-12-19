const STOPWATCH_CLOCK = [
    document.querySelector("#stopwatch-hour"),
    document.querySelector("#stopwatch-minute"),
    document.querySelector("#stopwatch-second")
];

let stopwatchSeconds = 0;
let stopwatchInterval;

function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatchSeconds++;

        const h = Math.floor(stopwatchSeconds / 3600);
        let s = stopwatchSeconds % 3600;
        const m = Math.floor(s / 60);
        s %= 60;

        const t = [h, m, s];

        for (let i = 0; i < STOPWATCH_CLOCK.length; i++) {
            STOPWATCH_CLOCK[i].innerText = t[i] < 10 ? `0${t[i]}` : `${t[i]}`;
        }
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopwatchSeconds = 0;
    stopStopwatch();
    for (let i = 0; i < STOPWATCH_CLOCK.length; i++) {
        STOPWATCH_CLOCK[i].innerText = '00';
    }
}
