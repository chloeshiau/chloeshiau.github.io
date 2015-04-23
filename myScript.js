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
	$(".tabs").show();
})

// $("#professional").click(function() {

// })

// $("#comserv").click(function() {

// })
