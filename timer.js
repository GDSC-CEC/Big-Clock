
function print_clock(time) {
	const H = time[0] < 10 ? `0${time[0]}` : `${time[0]}`;
	const M = time[1] < 10 ? `0${time[1]}` : `${time[1]}`;
	const S = time[2] < 10 ? `0${time[2]}` : `${time[2]}`;
	console.log(`${H}:${M}:${S}`);
}


function timerCycle(seconds) {
	setInterval( () => {
		seconds_left = seconds;
		h = Math.floor( seconds_left / 3600 );
		seconds_left -= h * 3600;

		m = Math.floor( seconds_left / 60 );
		seconds_left -= m * 60;

		s = seconds_left;

		print_clock([h,m,s])
		seconds -= 1;

	}, 1000 )

	return true;
}

timerCycle(360);
