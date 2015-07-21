$(document).ready(function() {
	$("#personal").hide();
	$("#intern").hide();
	$("#school").hide();
})

$('#p').click(function() {
	$('#personal').show();
})
$('#i').click(function() {
	$('#intern').show();
})
$('#s').click(function() {
	$('#school').show();
})

function mouseOver(img, num) {
	img.src = "img/proj"+ num + "-1.png";
}

function mouseOut(img, num) {
	img.src = "img/proj"+ num + ".png";
}

$('#iconscroll').click(function() {
	$("html, body").animate({
		scrollTop:0 }, 600);
});

