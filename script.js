const signupForm = document.getElementById('signup-form');
const emailInput = document.getElementById('email');

const dismissSuccessMessageButton = document.getElementById(
	'btn-dismiss-success-message'
);
const userEmailLabel = document.getElementById('user-email');

signupForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const userEmail = e.target[0].value;
	userEmailLabel.innerText = userEmail;

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

dismissSuccessMessageButton.addEventListener('click', () => {
	alert('Message dismissed.');
	alert(
		'Not really, just is just placeholder behavior because this is where the scope of the challenge ended.'
	);
});
