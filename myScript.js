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


$("#rush").hover(function() {
	$(".rushtabs").show();
	}, function() {
		$(".rushtabs").hide();
});
$("#rush1").hover(function() {
	$("#rush1").css("opacity", "1");
})
$("#rush2").hover(function() {
	$("#rush2").css("opacity", "1");
})

$("#about").hover(function() {
	$(".abouttabs").show();
	}, function() {
		$(".abouttabs").hide();
});



// $("#professional").click(function() {

// })

// $("#comserv").click(function() {

// })
