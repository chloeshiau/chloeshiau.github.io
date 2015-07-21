$(document).ready(function() {
	$("#personal").hide();
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

// #(document).ready(function () {
// 	var loc = window.location;
// 	var found = false;
// 	$(".container a").each(function() {
// 		var href = $(this).attr("href");
// 		if(href == loc) {
// 			$(this).parent().addClass("showtab");
// 			found = true;
// 		}
// 	})
// 	if(!false) {
// 		$(".container li:first").addClass("showtab");
// 	}
// })

$('#personal li').click(function() {
	$('#personal').show();
})