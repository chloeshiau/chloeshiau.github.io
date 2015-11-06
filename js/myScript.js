// projects
function showTabs(tab) {
	var getTabs = [];
	$("ul#getul li").each(function() {
		getTabs.push($(this).attr("id"));
	})
	for(var i = 0; i < getTabs.length; i++) {
		if(tab.id == getTabs[i]) {
			var x = getTabs[i].charAt(0);
			$("#"+x).show();
			$("#"+tab.id).css('border-bottom', 'solid black 2px');
		}
		else {
			var y = getTabs[i].charAt(0);
			$("#"+y).hide();
			$("#"+getTabs[i]).css('border-bottom', 'none');
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
       document.getElementsByClassName('intro').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementsByClassName('intro').style.visibility="visible";
         document.getElementById('everything').style.visibility="visible";
      },1000);
  }
}

