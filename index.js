$(document).ready(function(){
	$('.section').mouseover(function(){
		$(this).addClass('highlight');
	});
	
	$('.section').mouseout(function(){
		$(this).removeClass('highlight');
	});
});
