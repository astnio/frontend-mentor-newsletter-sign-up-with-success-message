const signupForm = document.getElementById('signup-form');
const emailInput = document.getElementById('email');

signupForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const userEmail = e.target[0].value;
	// console.log(userEmail);
	
	if (!emailInput.validity.valid) {
		emailInput.classList.add('invalid');
		console.log('Input invalid!');
	} else {
		emailInput.classList.remove('invalid');
		console.log('Input valid!');
	}
});

// emailInput.addEventListener('input', () => {
// 	emailInput.classList.remove('invalid');
// 	console.log('Input made!');
// });
