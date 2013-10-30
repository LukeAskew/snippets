"use strict";

(function () {

	// cache
	var didScroll = false,
		view = $(window),
		buffer = $("#headroom").outerHeight(),
		body = $("body");


	// bind to window scroll
	view.bind("scroll", function () {
		didScroll = true;
	});


	// async timer
	(function timer() {

		(function () {
			if (didScroll) {
				didScroll = false;

				if (view.scrollTop() > buffer) {
					body.addClass("nav--fixed");
				} else {
					body.removeClass("nav--fixed");
				}

			}
			setTimeout(timer, 100);
		}());

	}());

}());