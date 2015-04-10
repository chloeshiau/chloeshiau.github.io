function background_height() {
	$('body').height($(window).height());
}

$(document).ready(function() {
	$(window).bind('resize', background_height);
	background_height();
});