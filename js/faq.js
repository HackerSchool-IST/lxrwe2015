$(document).ready(function(){
	$(".faq h3").click(function() {
		var parent = $(this).parent();
		if(! parent.hasClass("show"))
			parent.addClass("show");
		else
			parent.removeClass("show");
	});
});

