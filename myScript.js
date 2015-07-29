function showTabs(tab) {
	var getTabs = [];
	$("ul#getul li").each(function() {
		getTabs.push($(this).attr("id"));
	})
	for(var i = 0; i < getTabs.length; i++) {
		if(tab.id == getTabs[i]) {
			var x = getTabs[i].charAt(0);
			$("#"+x).show();
			$("#"+tab.id).css('border-bottom', 'solid black 2px');
		}
		else {
			var y = getTabs[i].charAt(0);
			$("#"+y).hide();
			$("#"+getTabs[i]).css('border-bottom', 'none');
		}
	}
}

document.onreadystatechange = function() {
	var state = document.readyState;
	if(state == 'interactive') {
		document.getElementById('body').hide();
		console.log("not there yet");
	}
	else if (state == 'complete') {
		setTimeout(function() {
			document.getElementById('body').show();
			document.getElementById('load').style.visibility = "hidden";
			console.log("hello i am in complete"); 
		}, 1000);
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

