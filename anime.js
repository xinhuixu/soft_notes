var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");

var rid = 0; //request id

var animate_circle = function() {
    var x = 25;
    var draw_circle = function() {

	if (x >= 500) {
	    x = 25;
	}
	ctx.clearRect(0,0,500,500);
	console.log(rid);
	ctx.beginPath();

	var ycor = canv.height / 2;
	ctx.arc(x, ycor, 10, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fill();
	x = x*1.05
	rid = window.requestAnimationFrame(draw_circle);
    };
    
    draw_circle();
};

var stop_it = function() {
    window.cancelAnimationFrame(rid);
};

canv.addEventListener('click',animate_circle);
