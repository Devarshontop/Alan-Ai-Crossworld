var counter=0;
	var timeleft=60;
	function setup() {
	noCanvas ();
	}
	var timer= select('#timer');
	timer.html(counter);
	function timeIT() {
	counter++;
	timer.html(counter);
	}
	setInterval(timeIt, 1000);
