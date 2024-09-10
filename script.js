const signupForm = document.getElementById('signup-form');
const emailInput = document.getElementById('email');

signupForm.addEventListener('submit', (e) => {
	console.log('Form submitted!');
	if (!emailInput.validity.valid) {
		// e.preventDefault();
		emailInput.classList.add('invalid');
		console.log('Input invalid!');
	} else {
		emailInput.classList.remove('invalid');
		console.log('Input valid!');
	}
});

emailInput.addEventListener('input', () => {
	emailInput.classList.remove('invalid');
	console.log('Input made!');
});
