const signupSection = document.getElementById('signup-section');
const signupForm = document.getElementById('signup-form');
const emailInput = document.getElementById('email');

const successMessageSection = document.getElementById('success-message');
const dismissSuccessMessageButton = document.getElementById(
	'btn-dismiss-success-message'
);
const userEmailLabel = document.getElementById('user-email');

signupForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const userEmail = e.target[0].value;
	userEmailLabel.innerText = userEmail;

	signupSection.style.transform = 'translateX(-200vw)';
	successMessageSection.style.transform = 'translateX(-50%)';
});

dismissSuccessMessageButton.addEventListener('click', () => {
	alert('Message dismissed.');
	alert(
		'Not really, just is just placeholder behavior because this is where the scope of the challenge ended.'
	);
});
