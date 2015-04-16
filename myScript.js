// function background_height() {
// 	$('body').height($(window).height());
// }

// $(document).ready(function() {
// 	$(window).bind('resize', background_height);
// 	background_height();
// });


(function ($) {

	$.fn.photoResize = function (options) {

		var element	= $(this), 
			defaults = {
	            bottomSpacing: 10
			};
		
		$('body').load(function () {
			updatePhotoHeight();

			$(window).bind('resize', function () {
				updatePhotoHeight();
			});
		});

		options = $.extend(defaults, options);

		function updatePhotoHeight() {
			var o = options, 
				photoHeight = $(window).height();

			$(element).attr('height', photoHeight - o.bottomSpacing);
		}
	};


}(jQuery));

$(document).ready(function() {
	$("img").photoResize({
		bottomSpacing: 15
	});
});