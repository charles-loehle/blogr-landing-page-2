const btnHamburger = document.getElementById('btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownToggle = document.querySelectorAll('.dropdown-toggle');

btnHamburger.addEventListener('click', function () {
	if (header.classList.contains('open')) {
		// Close Hamburger Menu
		body.classList.remove('noscroll');
		header.classList.remove('open');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		});
	} else {
		// Open Hamburger Menu
		body.classList.add('noscroll');
		header.classList.add('open');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});
	}
});

// loop through all dropdown-toggle elements, rotate svg and open/close dropdown menu
dropdownToggle.forEach((item) => {
	item.addEventListener('click', (e) => {
		item.firstElementChild.classList.toggle('rotate');
		e.target.nextElementSibling.classList.toggle('show');
	});
});
