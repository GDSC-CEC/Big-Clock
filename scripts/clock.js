// let mode = document.querySelector('.menu-list');


// UI = {
// 	'default': {
// 		'fonts': {
// 			'main': 'Roboto Slab',
// 			'secondary': 'Chivo Mono'
// 		},
//
// 		'colors': {
// 			'light': {
// 				'bg': 'fff',
// 				'txt': '000',
// 				'sec-txt': '678983'
// 			},
// 			'dark': {
// 				'bg': '000',
// 				'txt': 'fff',
// 				'sec-txt': 'fb2576'
// 			}
// 		}
// 	},
//
// 	'nord': {
// 		'fonts': {
// 			'main': 'Roboto Slab',
// 			'secondary': 'Chivo Mono'
// 		},
//
// 		'colors': {
// 			'light': {},
// 			'dark': {}
// 		}
// 	}
// }
//
//
// function loadUI(ui) {
// 	const mText = document.querySelectorAll('.main-text');
// 	const sText = document.querySelectorAll('.sec-text');
//
// 	for (let i = 0; i < mText.length; mText) {
// 		i.style.color = ui['colors']['light']['txt'];
// 		i.style.font.family = ui['fonts']['main'];
// 	}
// 	
// 	for (let i in sText) {
// 		i.style.color = ui['colors']['light']['sec-txt'];
// 		i.style.font.family = ui['fonts']['secondary'];
// 	}
// }


// loadUI(UI['default'])

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


// function timer(seconds) {
// 	setInterval( () => {
//         let seconds_left = seconds;
// 		const  h = Math.floor( seconds_left / 3600 );
// 		seconds_left -= h * 3600;
//
// 		const m = Math.floor( seconds_left / 60 );
// 		seconds_left -= m * 60;
//
// 		const s = seconds_left;
//         const time = [h, m, s];
//
//         for (let i=0; i<CLOCK.length; i++)
//             CLOCK[i].innerText = time[i] > 10 ? time[i] : `0${time[i]}`;
//
// 		seconds -= 1;
//         console.log('timer cycle');
//
// 	}, 1000 );
// }

const CLOCK = [
    document.querySelector("#hour"),
    document.querySelector("#minute"),
    document.querySelector("#second")
];

setInterval( () => {
    const now = new Date();
    const t = [now.getHours(), now.getMinutes(), now.getSeconds()];

    for (let i = 0; i < CLOCK.length; i++)
        CLOCK[i].innerText = t[i] < 10 ? `0${t[i]}` : `${t[i]}`;
}, 100);

