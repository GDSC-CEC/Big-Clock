var clock = [
	document.querySelector("#hour"),
	document.querySelector("#minute"),
	document.querySelector("#second")
];

var side_menu = document.querySelector(".menu");

function update_clock() {
	var now = new Date();
	var time = [now.getHours(), now.getMinutes(), now.getSeconds()];

	for (let i = 0; i < clock.length; i++)
		clock[i].innerText = time[i] < 10 ? `0${time[i]}` : time[i];
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

function sep(sep) {
	separators = document.querySelectorAll(".sep");
	for (let i = 0; i < separators.length; i++)
		separators[i].innerText = sep;

}

setInterval(update_clock);
sep(" : ");


document.querySelector(".theme-toggle").
	addEventListener("click", (event) => {
		toggle_dark_theme();
		document.querySelector(".theme-toggle").classList.toggle("fa-moon");
		document.querySelector(".theme-toggle").classList.toggle("fa-sun");
	})

document.querySelector(".menu").
	addEventListener("click", () => {
		side_menu.classList.toggle("hidden");
})