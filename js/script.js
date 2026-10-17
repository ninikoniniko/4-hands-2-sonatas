const menuToggle = document.querySelector('.menu-toggle');
const offScreenMenu = document.querySelector('.off-screen-menu');

if (menuToggle && offScreenMenu) {
	menuToggle.addEventListener('click', () => {
		const isOpen = offScreenMenu.classList.toggle('open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
		menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
	});
}
