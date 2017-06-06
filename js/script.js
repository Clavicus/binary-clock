/* jshint esversion:6 */

const indexConversion = {
	"0": [],
	"1": [4],
	"2": [3],
	"3": [3, 4],
	"4": [2],
	"5": [2, 4],
	"6": [2, 3],
	"7": [2, 3, 4],
	"8": [1],
	"9": [1, 4]
};

let hr;
let min;
let sec;

function updateDisplay() {
	updateTime();
	updateDOM();
}

function updateTime() {
	const now = new Date();

	let hours = now.getHours().toString();
	let minutes = now.getMinutes().toString();
	let seconds = now.getSeconds().toString();

	hr = (hours.length == 1) ? `0${hours}` : hours;

	min = (minutes.length == 1) ? `0${minutes}` : minutes;

	sec = (seconds.length == 1) ? `0${seconds}` : seconds;
}

function updateDOM() {
	//
	let a;
	//----------------------------------Reset Lights-------------------------------//
	a = document.querySelectorAll('.one')
	for (var i = 0, len = a.length; i < len; i++) { a[i].classList.remove('one') }
	//----------------------------------------------------------------------------//
	//
	// | hourOne - First Digit Of hr |
	a = indexConversion[hr[0]]
	for (var i = 0, len = a.length; i < len; i++) { document.querySelector(`.hourOne div:nth-child(${a[i]})`).classList.add('one') }
	//
	// | hourTwo - Second Digit Of hr |
	a = indexConversion[hr[1]]
	for (var i = 0, len = a.length; i < len; i++) { document.querySelector(`.hourTwo div:nth-child(${a[i]})`).classList.add('one') }
	//
	// | minOne - First Digit Of min |
	a = indexConversion[min[0]]
	for (var i = 0, len = a.length; i < len; i++) { document.querySelector(`.minOne div:nth-child(${a[i]})`).classList.add('one') }
	//
	// | minTwo - Second Digit Of min |
	a = indexConversion[min[1]]
	for (var i = 0, len = a.length; i < len; i++) { document.querySelector(`.minTwo div:nth-child(${a[i]})`).classList.add('one') }
	//
	// | secOne - First Digit Of sec |
	a = indexConversion[sec[0]]
	for (var i = 0, len = a.length; i < len; i++) { document.querySelector(`.secOne div:nth-child(${a[i]})`).classList.add('one') }
	//
	// | secTwo - Second Digit Of sec |
	a = indexConversion[sec[1]]
	for (var i = 0, len = a.length; i < len; i++) { document.querySelector(`.secTwo div:nth-child(${a[i]})`).classList.add('one') }
}

setInterval(updateDisplay, 1000);
updateDisplay();

document.querySelector('input').addEventListener('change', function() {
	document.documentElement.style.setProperty('--oneColors', this.value);
});