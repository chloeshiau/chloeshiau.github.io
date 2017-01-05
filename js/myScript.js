$( document ).ready(function() {
    $(".container").show();
    $(".original-pic").show();
});

var currentCountry;
var currentPlace;
function showTabs(country) {
	$(".original-pic").hide();
	currentCountry = country.id;
	$(".container").hide();
	$(".container-"+currentCountry).show('slow');	
	console.log(".container-"+currentCountry);
}

function showPlaces(place) {
	$("."+currentPlace).hide();
	currentPlace = place.id;
	console.log("."+place.id);
	$("."+currentPlace).show('slow');
}

function revertTravel(revertPlace) {
	$(".original-pic").show();
	$("."+currentPlace).hide();
	revertPlace = revertPlace.id.slice(0, -1);
	console.log("revert" + revertPlace);
	$(".container").show('slow');
	$(".container-"+currentCountry).hide();	
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

// page tracking
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-89880912-1', 'auto');
ga('send', 'pageview');


