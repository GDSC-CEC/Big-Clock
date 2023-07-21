let mode = document.querySelector('.menu-list');


// sets the given time to the given clock DOM object
function set_time(clock, time) {
	for (let i=0; i<clock.legth; i++)
		clock[i].innerText = time[i] < 10 ? `0${time[i]}` : time[i]
}


const CLOCK = [
    document.querySelector("#hour"),
    document.querySelector("#minute"),
    document.querySelector("#second")],
MENU = document.querySelector(".menu"),
UI = {
	'default': {
		'fonts': {
			'main': 'Roboto Slab',
			'secondary': 'Chivo Mono'
		},

		'colors': {
			'light': {
				'bg': 'fff',
				'txt': '000',
				'sec-txt': '678983'
			},
			'dark': {
				'bg': '000',
				'txt': 'fff',
				'sec-txt': 'fb2576'
			}
		}
	},

	'nord': {
		'fonts': {
			'main': 'Roboto Slab',
			'secondary': 'Chivo Mono'
		},

		'colors': {
			'light': {},
			'dark': {}
		}
	}
}


function loadUI(ui) {
	const mText = document.querySelectorAll('.main-text');
	const sText = document.querySelectorAll('.sec-text');

	for (let i = 0; i < mText.length; mText) {
		i.style.color = ui['colors']['light']['txt'];
		i.style.font.family = ui['fonts']['main'];
	}
	
	for (let i in sText) {
		i.style.color = ui['colors']['light']['sec-txt'];
		i.style.font.family = ui['fonts']['secondary'];
	}
}


loadUI(UI['default'])

// colors picked from the styles.css
// --light-bg: #fff;
// --light-txt: #000;
// --light-sec-txt: #678983;
// --dark-bg: #000;
// --dark-txt: #fff;
// --dark-sec-txt: #FB2576;
// --main-font: 'Roboto Slab';
// --secondary-font: 'Chivo Mono'


// changes the seperator of the clock
function sep(sep) {
    const separators = document.querySelectorAll(".sep");
    for (let i = 0; i < separators.length; i++)
        separators[i].innerText = sep;
}

function toggle_dark_theme() {
    const light_backs = document.querySelectorAll(".back-light"),
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
    addEventListener("click", () => {
        toggle_dark_theme();    // toggling the theme   
        document.querySelector(".theme-toggle").classList.toggle("fa-sun");
        document.querySelector(".theme-toggle").classList.toggle("fa-moon");
    });

MENU.addEventListener(
    "click",
    () => { 
				document.querySelector(".menu-list").classList.toggle("hidden");
		}
);

// Timer 
// function timer(seconds) {
//
// }

function timer(seconds) {
	setInterval( () => {
		seconds_left = seconds;
		h = Math.floor( seconds_left / 3600 );
		seconds_left -= h * 3600;

		m = Math.floor( seconds_left / 60 );
		seconds_left -= m * 60;

		s = seconds_left;

		set_time([h, m, s]);
		seconds -= 1;

	}, 1000 )

	return true;
}

function clock() {
	setInterval( () => {
		const now = new Date();
		const t = [now.getHours(), now.getMinutes(), now.getSeconds()];

		for (let i = 0; i < CLOCK.length; i++)
			CLOCK[i].innerText = t[i] < 10 ? `0${t[i]}` : `${t[i]}`;
	}, 100)
}

sep(":");


if (mode == 'clock') 
	clock();

if (mode == 'timer') {
	// get the input here.
	timer(600);
}
