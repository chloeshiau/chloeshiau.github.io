function showTabs(tab) {
	var getTabs = [];
	$("ul#getul li").each(function() {
		getTabs.push($(this).attr("id"));
	})
	console.log(getTabs);
	for(var i = 0; i < getTabs.length; i++) {
		if(tab.id == getTabs[i]) {
			var x = getTabs[i].charAt(0);
			$("#"+x).show();
		}
		else {
			var y = getTabs[i].charAt(0);
			$("#"+y).hide();
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

