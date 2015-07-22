$(document).ready(function() {
	$("#personal").hide();
	$("#intern").hide();
	$("#school").hide();
})

$('#p').click(function() {
	$('#personal').show();
	$("#intern").hide();
	$("#school").hide();
})
$('#i').click(function() {
	$('#intern').show();
	$("#school").hide();
	$("#personal").hide();
})
$('#s').click(function() {
	$('#school').show();
	$("#personal").hide();
	$("#intern").hide();
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

