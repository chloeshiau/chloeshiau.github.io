// $(function(){
//     $('#mypicture').imagefit();
// });

$(function(){
	$('#mypicture').imageFitWindow({
		onFit:function(){
			console.log('fit')
		},
		onMaxed: function(){
			console.log('maxed')
		},
		onUnfit: function(){
			console.log('fit')
		}
	});

	// $('#my-image-2').imageFitWindow({
	// 	container: $('.my-container')
	// });	
})