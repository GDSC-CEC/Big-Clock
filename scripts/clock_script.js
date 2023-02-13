export default function update_clock(clock) {
	var now = new Date();
	var time = [now.getHours(), now.getMinutes(), now.getSeconds()];

	for (let i = 0; i < clock.length; i++)
		clock[i].innerText = time[i] < 10 ? `0${time[i]}` : time[i];
}
