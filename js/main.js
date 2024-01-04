'use strict';

function enableFixTapHighlightOniOS() {
	document.addEventListener("touchstart", function(){}, true);
}

function main() {
	enableFixTapHighlightOniOS();
}

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
	main();
});
