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
		setTimeout(function() {
			$("#pic3").css("opacity", "0");
			$("#pic4").css("opacity", ".8");
		}, 15000)
		$("#pic4").css("opacity", "0");
}
setBackground();
setInterval(setBackground, 20000);

//-----tabs-------//

$("#rush").hover(function() {
	$(".rushtabs").show();
	}, function() {
		$(".rushtabs").hide();
});
$("#rush").hover(function() {
	$(".rushtabs1").show();
	}, function() {
		$(".rushtabs1").hide();
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
$("#bro").hover(function() {
	$(".brotabs1").show();
	}, function() {
		$(".brotabs1").hide();
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

$("#prof").hover(function() {
	$(".proftabs").show();
	}, function() {
		$(".proftabs").hide();
});
$("#prof").hover(function() {
	$(".proftabs1").show();
	}, function() {
		$(".proftabs1").hide();
});
$("#prof1").hover(function() {
	$("#prof1").css("opacity", ".8");
	}, function() {
		$("#prof1").css("opacity", "1");
})
$("#prof2").hover(function() {
	$("#prof2").css("opacity", ".8");
	}, function() {
		$("#prof2").css("opacity", "1");
})
$("#prof3").hover(function() {
	$("#prof3").css("opacity", ".8");
	}, function() {
		$("#prof3").css("opacity", "1");
})

$("#serv").hover(function() {
	$(".servtabs").show();
	}, function() {
		$(".servtabs").hide();
});
$("#serv").hover(function() {
	$(".servtabs1").show();
	}, function() {
		$(".servtabs1").hide();
});
$("#serv1").hover(function() {
	$("#serv1").css("opacity", ".8");
	}, function() {
		$("#serv1").css("opacity", "1");
})
$("#serv2").hover(function() {
	$("#serv2").css("opacity", ".8");
	}, function() {
		$("#serv2").css("opacity", "1");
})
