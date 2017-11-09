$(document).ready(function(){
$('li img').click(function(){
		
		var imgbg = $(this).attr('dir');
		//console.log(imgbg);
		$('#bg').css({backgroundImage: "url("+imgbg+")"});
		
	});


	
	$('#bgimage').click(function(){
	$('#thumb').hide();
	
	});
	
});