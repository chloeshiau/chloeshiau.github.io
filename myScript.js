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

document.getElementById("navhome").onclick = function() {
	$('html, body').animate({
		scrollTop:0}, 'slow');
};

document.getElementById("navabout").onclick = function() {
	$('html, body').animate({
		scrollTop:$('#about').offset().top
	} , 'slow');
};

document.getElementById("navexp").onclick = function() {
	$('html, body').animate({
		scrollTop:$('#experience').offset().top
	} , 'slow');
};

document.getElementById("navorg").onclick = function() {
	$('html, body').animate({
		scrollTop:$('#organizations').offset().top
	} , 'slow');
};

document.getElementById("navproj").onclick = function() {
	$('html, body').animate({
		scrollTop:$('#projects').offset().top
	} , 'slow');
};

document.getElementById("navcont").onclick = function() {
	$('html, body').animate({
		scrollTop:$('#contactme').offset().top
	} , 'slow');
};


//-------------project slides ---------------//

function mouseOver(img, num) {
	img.src = "img/proj"+ num + "-1.png";
}

function mouseOut(img, num) {
	img1.src = "img/proj"+ num + ".png";
}


