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


//----------title------------//
$(window).scroll(function() {
	if($(this).scrollTop() > 370) {
		$('#navigation').css("height", "75px");
		$('#navigation1').fadeOut();
		$('#name').fadeOut();
		$('#description').fadeOut();
	}
	else {
		$("#navigation1").fadeIn();
		$('#name').fadeIn();
		$('#description').fadeIn();
		$('#navigation').css("height", "165px");
	}

})


