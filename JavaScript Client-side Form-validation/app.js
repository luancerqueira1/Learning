
const form = document.getElementById("form");
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const password2 = document.querySelector('#password2');


form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
})

function checkInputs() {
	//get value inputs
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if (username === '') {
		//show erro
		//add error class
		setErrorFor(username,'username cannot be blank');
	}
	 else {
		//add sucsess
		setSuccessFor(username)
	}
}

function setErrorFor(input,message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	//add error message inside snmall
	small.innerText = message;

	//add error class
	formControl.className = 'form-control error'
	
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success'
}