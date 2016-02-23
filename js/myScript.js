// projects
function showTabs(tab) {
	var getTabs = [];
	$("ul#getul li").each(function() {
		getTabs.push($(this).attr("id"));
	})
	for(var i = 0; i < getTabs.length; i++) {
		if(tab.id == getTabs[i]) {
			var x = getTabs[i].charAt(0);
			$("#"+x).fadeIn(1500).show();
			$("#"+tab.id).css('font-weight', '600');

		}
		else {
			var y = getTabs[i].charAt(0);
			$("#"+y).hide();
			$("#"+getTabs[i]).css('font-weight', '400');
		}
	}
}


//projects
function mouseOver(img, num) {
	img.src = "img/proj"+ num + "-1.png";
}

function mouseOut(img, num) {
	img.src = "img/proj"+ num + ".png";
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

//loading icon
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('everything').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('everything').style.visibility="visible";
      },1000);
  }
}


//pop up
function toggle(div_id) {
	var el = document.getElementsByClassName(div_id)[0];
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
	var popUpDiv = document.getElementsByClassName(popUpDivVar)[0];
	popUpDiv_height=blanket_height/2-150;//150 is half popup's height
	popUpDiv.style.top = popUpDiv_height + 'px';
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
	window_width=window_width/2-150;//150 is half popup's width
	popUpDiv.style.left = window_width + 'px';
}
function popup(windowname) {
	blanket_size(windowname);
	window_pos(windowname);
	toggle('blanket');
	toggle(windowname);		
}

