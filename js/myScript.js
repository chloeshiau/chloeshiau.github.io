$( document ).ready(function() {
    $(".container").show();
    $(".original-pic").show();
});

var currentCountry;
var currentPlace;
function showTabs(country) {
	var countryData = document.getElementsByClassName(country)[0];
	var countryVisited = countryData.getAttribute("data-info");
	if(countryVisited =='{"fillKey":"authorHasTraveledTo"}') {
		location.href = "./"+country.toLowerCase()+".html";
		$(".container-"+country).show('slow');
	}
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
	var popUpDiv = document.getElementById(popUpDivVar);
	popUpDiv.style.right = '0';
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
	  target: 'foodpicture',
	  accessToken: '1665792495.fa1fbde.80d35431a95843bdbd779a1ce9498694',
	  resolution: 'standard_resolution',
	  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
	  limit: '10',
	  after: function() {
		var el = document.getElementById('foodpicture');
		if (el.classList) {
			el.classList.add('show');
		} else
			el.className += ' ' + 'show';
		}
	});
	feed.run();	
}