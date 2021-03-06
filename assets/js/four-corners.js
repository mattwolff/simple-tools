(function(){
	// This part checks for jQuery
	var version = "1.10.2";
	// Checks for prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
		// If there isn't an instance of jQuery, create one and append it to the head
		// Else run our bookmarklet!
		var done = false;
		var script = document.createElement("script");
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + version + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initBookmarklet(window.jQuery);
			}
            else {
                console.log('error loading');
            }
		};
		document.getElementsByTagName("head")[0].appendChild(script);
        if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
            console.log(':::');
        }
        else {
            console.log('jquery loaded');
        }
	} else {
		initBookmarklet(window.jQuery);
	}
	function initBookmarklet($) {
		(window.bookmarklet = function() {
			// Replace this section with your own Information Overlay script
			$('head').append('<link rel="stylesheet" href="https://mattwolff.github.io/information-overlay/assets/css/four-corners.css" type="text/css" />');
			// Top Left
			$("body").append('<div class="four-corners top-left">Top Left</div>');
			// Top Right
			$("body").append('<div class="four-corners top-right">Top Right</div>');
			// Bottom Left
			$("body").append('<div class="four-corners bottom-left">Bottom Left</div>');
			// Bottom Right
			$("body").append('<div class="four-corners bottom-right">Bottom Right</div>');

		})();
	}
})();
