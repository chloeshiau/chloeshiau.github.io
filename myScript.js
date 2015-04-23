function setBackground() {
		// $(".pic").css("opacity", "0");	
		setTimeout(function() {
			$("#pic1").css("opacity", ".8");
		}, 15)
		setTimeout(function() {
			$("#pic1").css("opacity", "0");
			$("#pic2").css("opacity", ".8");
		}, 5000)
		setTimeout(function() {
			$("#pic2").css("opacity", "0");
			$("#pic3").css("opacity", ".8");
		}, 10000) 
		$("#pic3").css("opacity", "0");

}
setBackground();
setInterval(setBackground, 15000);

$(document).ready(function() {
	if($(".rushtabs").width() > $("#rush").width) {
		$("#rush").width() = $(".rushtabs").width();
	}	
})

$("#rush").hover(function() {
	$(".rushtabs").show();
	}, function() {
		$(".rushtabs").hide();
});
$("#rush1").hover(function() {
	$("#rush1").css("opacity", ".8");
	}, function() {
		$("#rush1").css("opacity", "1");
})
$("#rush2").hover(function() {
	$("#rush2").css("opacity", ".8");
	}, function() {
		$("#rush2").css("opacity", "1");
})
$("#rush3").hover(function() {
	$("#rush3").css("opacity", ".8");
	}, function() {
		$("#rush3").css("opacity", "1");
})

$("#bro").hover(function() {
	$(".brotabs").show();
	}, function() {
		$(".brotabs").hide();
});
$("#bro1").hover(function() {
	$("#bro1").css("opacity", ".8");
	}, function() {
		$("#bro1").css("opacity", "1");
})
$("#bro2").hover(function() {
	$("#bro2").css("opacity", ".8");
	}, function() {
		$("#bro2").css("opacity", "1");
})
$("#bro3").hover(function() {
	$("#bro3").css("opacity", ".8");
	}, function() {
		$("#bro3").css("opacity", "1");
})

