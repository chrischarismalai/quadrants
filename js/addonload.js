/*
Filename     : addonload.js
Created      : April 19, 2010
Last Updated : April 19, 2010
*/

function addOnload (func) {
	var oldOnload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function() {
			if (oldOnload) {
				oldOnload();
			}
			func();
		}
	}
}
