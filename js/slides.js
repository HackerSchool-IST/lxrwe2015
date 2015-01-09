$(document).ready(function() {

	var auto = true;
	var nrImg = $("#cf7 img").length;
	var currImg = 1;
	function slide() {
		$("#cf7 img").removeClass("opaque");
		$("#cf7 img").eq(currImg).addClass("opaque");
		$("#cf7_controls span").removeClass("selected");
		$("#cf7_controls span").eq(currImg).addClass("selected");
		currImg = (currImg + 1) % nrImg;
	};

	var refreshIntervalID = setInterval(slide, 3000);

	$("#cf7_controls").on('click', 'span', function() {
		if(auto = true)
		{
		  clearInterval(refreshIntervalID);
		  auto = false;
		}

		$("#cf7 img").removeClass("opaque");
		var newImage = $(this).index();
		$("#cf7 img").eq(newImage).addClass("opaque");
		$("#cf7_controls span").removeClass("selected");
		$(this).addClass("selected");
	});
});
