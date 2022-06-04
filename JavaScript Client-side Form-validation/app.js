
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

	if (usernameValue === '') {
		//show erro
		//add error class
		setErrorFor(username,'username cannot be blank');
	}
	 else {
		//add sucsess
		setSuccessFor(username)
	}
	if (emailValue === "") {
      //show erro
      //add error class
      setErrorFor(email, "email cannot be blank");
	}
	else if (!isEmail(emailValue)) {
		setSuccessFor(email, 'email is not valid');
	}
	else {
		setSuccessFor(email);
	}
	if (passwordValue === '') {
		setErrorFor(password,'password cannot be blank');
	}
	 else {
		//add sucsess
		setSuccessFor(password)
	}
	if (password2Value === '') {
		setErrorFor(password2,'password 2 cannot be blank');
	}
	else if (passwordValue !== password2Value) {
		setErrorFor(password2,'password does not match')
	}
	 else {
		//add sucsess
		setSuccessFor(password2)
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


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}