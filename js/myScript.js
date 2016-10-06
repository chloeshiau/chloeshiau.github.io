$( document ).ready(function() {
    $(".container").show();
});

var currentCountry;
var currentPlace;
function showTabs(country) {
	currentCountry = country.id;
	$(".container").hide();
	$(".container-"+currentCountry).fadeIn(1500).show();	
	console.log(".container-"+currentCountry);
}

function showPlaces(place) {
	$("."+currentPlace).hide();
	currentPlace = place.id;
	console.log("."+place.id);
	$("."+currentPlace).fadeIn(1500).show();
}

function revertTravel(revertPlace) {
	$("."+currentPlace).hide();
	revertPlace = revertPlace.id.slice(0, -1);
	console.log("revert" + revertPlace);
	$(".container").fadeIn(1500).show();
	$(".container-"+currentCountry).fadeOut(1500).hide();	
	$("."+revertPlace).hide();	
	$('.'+travel).hide();
	$("div ."+revertPlace+":contains('travel')").parent('div').hide();
}

//projects
function mouseOver(img, num) {
	img.src = "img/projects/proj"+ num + "-1.png";
}

function mouseOut(img, num) {
	img.src = "img/projects/proj"+ num + ".png";
}
//front page
document.onreadystatechange = function() {
	var state = document.readyState;
	if(state == 'interactive') {
		document.getElementById('body').style.opacity = 0;
	}
	else if (state == 'complete') {
		setTimeout(function() {
			document.getElementById('body').style.opacity = 1;
			document.getElementById('load').style.visibility = "hidden";
		}, 1000);
	}
}

//every page
$('#iconscroll').click(function() {
	$("html, body").animate({
		scrollTop:0 }, 600);
});
$('#iconscroll1').click(function() {
	$("html, body").animate({
		scrollTop:200 }, 600);
});

//contact
var num = 0;
window.onload = function() {
	$("ul#getcontact li.poc").each(function() {
		$(this).style.paddingRight = num + "px";
		num = num + 40;
	})
};


/*------------Navigation------------*/
function toggle(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_size(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var blanket = document.getElementById('blanket');
	blanket.style.height = blanket_height + 'px';
	var popUpDiv = document.getElementById(popUpDivVar);
	popUpDiv.style.top = '0';
}
function window_pos(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpDiv = document.getElementById(popUpDivVar);
	popUpDiv.style.right = '0';
}
function popup(windowname) {
	blanket_size(windowname);
	window_pos(windowname);
	toggle('blanket');
	toggle(windowname);		
}

var feed = new Instafeed({
  get: 'user',
  userId: 1665792495,
  accessToken: '1665792495.fa1fbde.80d35431a95843bdbd779a1ce9498694',
  resolution: 'low_resolution'
});
feed.run();

$("#north_america").onclick


