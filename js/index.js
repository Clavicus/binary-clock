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
			// Reset Lights //
			var a = document.querySelectorAll('.one');
			for (var i = 0, len = a.length; i < len; i++) {
				a[i].classList.remove('one');
			} // Assign Lights //
			for (var j = 0, _len = columns.length; j < _len; j++) {
				var b = b_i[time[0 | j / 2][j % 2]];
				for (var k = 0, __len = b.length; k < __len; k++) {
					columns[j].children[b[k]].classList.add('one');
				}
			}
		}setInterval(updateDOM, 1000);updateDOM();
	};
})();
