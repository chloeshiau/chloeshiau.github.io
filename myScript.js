// $(document).ready(function() {
// 	$("#personal").hide();
// 	$("#intern").hide();
// 	$("#school").hide();
// })

// $('#p').click(function() {
// 	$('#personal').show();
// 	$("#intern").hide();
// 	$("#school").hide();
// })
// $('#i').click(function() {
// 	$('#intern').show();
// 	$("#school").hide();
// 	$("#personal").hide();
// })
// $('#s').click(function() {
// 	$('#school').show();
// 	$("#personal").hide();
// 	$("#intern").hide();
// })

// function showTabs(tabby) {
// 	if($("#"+tabby).css('opacity') != 1) 
// 	$("#"+tabby).style.opacity = "1";
// }

function showTabs(tab) {
	console.log(tab);
	var getTabs = [];
	$("ul#getul li").each(function() {
		getTabs.push($(this).attr("id"));
	})
	console.log(getTabs);
	for(var i = 0; i < getTabs.length; i++) {
		if(tab == getTabs[i]) {
			var x = getTabs[i].charAt(0);
			$("#"+x).show();
			console.log("works"+x);
		}
		else {
			var y = getTabs[i].charAt(0);
			$("#"+y).hide();
			console.log("not works"+y);
		}
	}
}


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

