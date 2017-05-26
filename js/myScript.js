$( document ).ready(function() {
    $(".container").show();
    $(".original-pic").show();
});

var currentCountry;
var currentPlace;
function showTabs(country) {
	currentCountry = country.id;
	location.href = "./"+currentCountry+".html";
	$(".container-"+currentCountry).show('slow');	
}

function showPlaces(place) {
	$("."+currentPlace).hide();
	currentPlace = place.id;
	$("."+currentPlace).show('slow');
}

function revertTravel(revertPlace) {
	location.href = "./travel.html";
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

if(window.location.pathname == "/foodblog.html") {
	var feed = new Instafeed({
	  get: 'user',
	  userId: 1665792495,
	  accessToken: '1665792495.fa1fbde.80d35431a95843bdbd779a1ce9498694',
	  resolution: 'low_resolution'
	});
	feed.run();	
}


$(function(){
var sideBarNavWidth=$('#rightcolumn').width() - parseInt($('#sidebarnav').css('paddingLeft')) - parseInt($('#sidebarnav').css('paddingRight'));
$('#sidebarnav').css('width', sideBarNavWidth);
});