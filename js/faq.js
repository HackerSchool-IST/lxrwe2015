$(document).ready(function(){
	$(".faq h3").click(function() {
		var parent = $(this).parent();
		parent.toggleClass("show");
	});
});

