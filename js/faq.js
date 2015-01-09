$(document).ready(function(){
	$( ".faq" ).click(function() {
		if(! $(this).hasClass("show"))
			$(this).addClass("show");
		else
			$(this).removeClass("show");
	});
});

