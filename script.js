document.addEventListener('DOMContentLoaded', () => {
	let galleryImages = Array.from(document.querySelectorAll('.img-link'));

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
