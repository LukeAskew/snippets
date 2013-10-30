"use strict";

var $scrollableElement = (function () {
	for (var i = 0, argLength = arguments.length; i < argLength; i += 1) {

		var el = arguments[i],
			$scrollElement = $(el);

		if ($scrollElement.scrollTop() > 0) {
			return $scrollElement;
		} else {

			$scrollElement.scrollTop(1);

			var isScrollable = $scrollElement.scrollTop() > 0;

			$scrollElement.scrollTop(0);

			if (isScrollable) {
				return $scrollElement;
			}

		}

	}
})("html", "body");


// handler
$(".scrollto").on("click", function (e) {

	e.preventDefault();

	var target = $(this).attr("href"),
		position = $(target).offset().top;

	$scrollableElement.animate({
		scrollTop: position
	}, 1000);

});