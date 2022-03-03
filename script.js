document.addEventListener('DOMContentLoaded', () => {
	let backgroundImageArr = [
		'img/backgrounds/heading-bg.jpg',
		'img/backgrounds/bg2.jpg',
		'img/backgrounds/bg3.jpg',
	];
	let galleryImages = Array.from(document.querySelectorAll('.img-link'));

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
});
