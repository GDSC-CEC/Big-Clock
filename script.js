import update_clock from "./scripts/clock_script.js";

var CLOCK = [
    document.querySelector("#hour"),
    document.querySelector("#minute"),
    document.querySelector("#second")
], SIDE_MENU = document.querySelector(".menu");

function sep(sep) {
    let separators = document.querySelectorAll(".sep");
    for (let i = 0; i < separators.length; i++)
        separators[i].innerText = sep;
}

function toggle_dark_theme() {
    let light_backs = document.querySelectorAll(".back-light"),
        light_text_sec = document.querySelectorAll(".sec-light"),
        light_text = document.querySelectorAll(".main-light");

    for (let i = 0; i < light_backs.length; i++)
        light_backs[i].classList.toggle("back-dark");

    for (let i = 0; i < light_text.length; i++)
        light_text[i].classList.toggle("main-dark");

    for (let i = 0; i < light_text_sec.length; i++)
        light_text_sec[i].classList.toggle("sec-dark");
}

// Event Listener for the Dark Theme button
document.querySelector(".theme-toggle").
    addEventListener("click", (event) => {
        toggle_dark_theme();    // toggling the theme   
        document.querySelector(".theme-toggle").classList.toggle("fa-sun");
        document.querySelector(".theme-toggle").classList.toggle("fa-moon");
    })


// for the Menu Icon
// if (SIDE_MENU)
//     SIDE_MENU.addEventListener(
//         "click",
//         () => { side_menu.classList.toggle("hidden"); }
//     )

setInterval(update_clock, 100, CLOCK)
sep(":");