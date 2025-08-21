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
	// Сразу нужная сторона
	formBox.classList.toggle('flipped', showRegister);
	// Фокус для доступности
	modal.focus();
}

function closeModal() {
	modal.classList.remove('active');
	document.body.classList.remove('no-scroll');
}

// Открыть снаружи
openLogin.addEventListener('click', () => openModal(false));
openRegister.addEventListener('click', () => openModal(true));

// Переключатели внутри модалки
toRegister.addEventListener('click', () => formBox.classList.add('flipped'));
toLogin.addEventListener('click', () => formBox.classList.remove('flipped'));

// Закрытие: крестик, фон, Esc
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
	if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});
