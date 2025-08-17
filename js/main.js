// показать/скрыть пароль
function watchPassword() {
	const wp = document.getElementById('password');
	wp.type = wp.type === 'password' ? 'text' : 'password';
}

// элементы
const modalLogin = document.querySelector('.modal');
const modalRegistration = document.querySelector('.modal__registration');
const btnOpenLogin = document.querySelector('.open__modal-btn');
const btnOpenRegistration = document.querySelector('.open__modal-registration');
const modalCloses = document.querySelectorAll('.modal__close');

// открыть модалки
btnOpenLogin.addEventListener('click', () => {
	modalLogin.classList.add('open');
	document.body.classList.add('no__scroll');
});

btnOpenRegistration.addEventListener('click', () => {
	modalRegistration.classList.add('open');
	document.body.classList.add('no__scroll');
});

// закрытие по кнопке "x"
modalCloses.forEach((btn) => {
	btn.addEventListener('click', () => {
		modalLogin.classList.remove('open');
		modalRegistration.classList.remove('open');
		document.body.classList.remove('no__scroll');
	});
});

// закрытие по клику на фон
[modalLogin, modalRegistration].forEach((modal) => {
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.classList.remove('open');
			document.body.classList.remove('no__scroll');
		}
	});
});
