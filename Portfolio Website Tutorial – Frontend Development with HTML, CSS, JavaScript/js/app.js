const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


/* NAO FUNCIONOU */
// function pageTransitions() {
// 	//BUTTON CLICK ACTIVE CLASS
// 	for (let i = 0; i < sectBtn.length; i++){
// 		sectBtn[i].addEventListener('click', function() {
// 			let currentBtn = document.querySelectorAll('.active-btn');
// 			currentBtn[0].className = currentBtn[0].className.replace('.active-btn', '');
// 			this.className += 'active-btn'
// 		})
// 	}
// }
// pageTransitions();

//NAVIGATION BUTTONS ACTIVE
//OUTO QUE DEU CERTO
function activeLink() {
	sectBtn.forEach((item) => {
		item.classList.remove('active-btn');
		this.classList.add('active-btn');
	});
	
}
//sections active
allSections.addEventListener('click', (e) => {
	const id = e.target.dataset.id;
	if (id) {
		//remove selected from the other btns
		sectBtns.forEach((btn) => {
			btn.classList.remove('active')
		})
		e.target.classList.add('active')
		//HIDE OTHER sections
		sections.forEach((section) => {
			section.classList.remove('active')
		})

		const element = document.getElementById(id);
		element.classList.add('active')
	}
});

sectBtn.forEach((item) => {
	item.addEventListener('click', activeLink);
	
})
