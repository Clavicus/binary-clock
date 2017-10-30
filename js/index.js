'use strict';

(function () {
	window.onload = function () {
		var b_i = [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3], [0], [0, 3]];
		function getTime() {
			return new Date().toLocaleTimeString('en-CA', { hour12: false }).split(/:| /).map(function (t) {
				return t.padStart(2, '0');
			});
		}
		function updateDOM() {
			var time = getTime(),
			    columns = document.querySelectorAll('.container > div');
			var a = undefined;
			// Reset Lights //
			a = document.querySelectorAll('.one');
			for (var i = 0; i < a.length; i++) {
				a[i].classList.remove('one');
			} // Assign Lights //
			for (var j = 0, len = columns.length; j < len; j++) {
				// Iterates over 6 columns
				a = b_i[time[0 | j / 2][j % 2]]; // Assigns Array of vertical dot positions to <a> from b_i
				for (var k = 0, _len = a.length; k < _len; k++) {
					columns[j].children[a[k]].classList.add('one');
				}
			}
		}setInterval(updateDOM, 1000);updateDOM();
	};
})();
