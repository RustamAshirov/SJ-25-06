const modal = document.getElementById('modal');
const formBox = document.getElementById('formBox');

const openLogin = document.getElementById('openLogin');
const openRegister = document.getElementById('openRegister');

const closeBtn = document.getElementById('closeBtn');
const toRegister = document.getElementById('toRegister');
const toLogin = document.getElementById('toLogin');

function openModal(showRegister = false) {
	modal.classList.add('active');
	document.body.classList.add('no-scroll');

	formBox.classList.toggle('flipped', showRegister);

	modal.focus();
}

function closeModal() {
	modal.classList.remove('active');
	document.body.classList.remove('no-scroll');
}

openLogin.addEventListener('click', () => openModal(false));
openRegister.addEventListener('click', () => openModal(true));

toRegister.addEventListener('click', () => formBox.classList.add('flipped'));
toLogin.addEventListener('click', () => formBox.classList.remove('flipped'));

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
	if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

/* modal map */
const openBtnMap = document.getElementById('openMap');
const modalMap = document.getElementById('mapModal');
const closeBtnMap = document.getElementById('closeMap');

openBtnMap.addEventListener('click', (e) => {
	e.preventDefault();
	modalMap.style.display = 'flex';
	document.body.classList.add('no-scroll');
});

closeBtnMap.addEventListener('click', () => {
	modalMap.style.display = 'none';
	document.body.classList.remove('no-scroll');
});

modalMap.addEventListener('click', (e) => {
	if (e.target === modalMap) {
		modalMap.style.display = 'none';
		document.body.classList.remove('no-scroll');
	}
});
