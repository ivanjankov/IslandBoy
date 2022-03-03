document.addEventListener('DOMContentLoaded', () => {
	let galleryImages = Array.from(document.querySelectorAll('.img-link'));
	let navigation = document.querySelector('.navigation');
	let burgerBtn = document.getElementById('burger');

	// gallery images scale and icon show effect
	galleryImages.forEach((link) => {
		link.addEventListener('mouseenter', showSearchIcon);
		link.addEventListener('mouseleave', removeSearchIcon);
	});

	function showSearchIcon(e) {
		let searchIcon = document.createElement('div');
		searchIcon.classList.add('searchicon');
		searchIcon.innerHTML = `
             <i class="fa-brands fa-searchengin"></i>
        `;
		e.target.appendChild(searchIcon);
	}

	function removeSearchIcon(e) {
		let childForDelete = e.target.children[1];
		e.target.removeChild(childForDelete);
	}

	// hamburger menu

	burgerBtn.addEventListener('click', toggleHamburgerMenu);

	function toggleHamburgerMenu() {
		let navAttr = navigation.getAttribute('data-hidden');
		let btnAttr = burgerBtn.getAttribute('data-expanded');

		if (navAttr == 'false' && btnAttr == 'false') {
			navigation.setAttribute('data-hidden', 'true');
			burgerBtn.setAttribute('data-expanded', 'true');
		} else {
			navigation.setAttribute('data-hidden', 'false');
			burgerBtn.setAttribute('data-expanded', 'false');
		}
	}
});
