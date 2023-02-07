function update_clock(clock) {
	var now = new Date();
	var time = [now.getHours(), now.getMinutes(), now.getSeconds()];

	for (let i = 0; i < clock.length; i++)
		clock[i].innerText = time[i] < 10 ? `0${time[i]}` : time[i];
}


function sep(sep) {
	separators = document.querySelectorAll(".sep");
	for (let i = 0; i < separators.length; i++)
		separators[i].innerText = sep;

}