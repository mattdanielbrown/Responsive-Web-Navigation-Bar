'use strict';

function setupNavigationBar() {
	const navigationBar         = document.getElementById('primary-navigation');
	const navigationList        = document.getElementById('navigation-list');
	const navigationButton      = document.getElementById('navigation-button');
	const navigationButtonText  = document.querySelector('.navigation-button-text-content');

	navigationButton.addEventListener('click', function () {

		if (this.getAttribute('aria-expanded') === 'false') {
			this.setAttribute('aria-expanded', 'true');
			navigationButtonText.innerHTML = 'Close';
		} else {
			this.setAttribute('aria-expanded', 'false');
			navigationButtonText.innerHTML = 'Menu';
		}

		navigationList.classList.toggle('mobile-expanded');
		navigationBar.classList.toggle('mobile-expanded');

	});

}

window.addEventListener('DOMContentLoaded', (event) => {
	setupNavigationBar();
});
