// Attaching event listeners
// document.addEventListener('DOMContentLoaded', function () {
console.log('The dom has finished loading');

const submitButton = document.querySelector('#submit');

let count = 0;

submitButton.addEventListener('click', (event) => {
	console.log(event);
	// A.P.I -> Application Programming Interface
	let input = prompt('Enter your score');

	// converting string to number
	input = Number(input);

	// Selection
	// if (typeof input !== 'number') {
	// 	alert('Enter a valid number');
	// }
	if (isNaN(input)) {
		alert('Enter a valid number');
	}

	generateGrade(input);
});
// });

function generateGrade(score) {
	const gradeOutput = document.querySelector('#grade-output');

	if (score > 50) {
		// alert(`Your score is A`);
		gradeOutput.innerText = 'Your score is A';
		gradeOutput.className = 'grade-output-success';
	} else {
		gradeOutput.innerText = 'Your score is B';
		gradeOutput.className = 'grade-output-warning';
	}
}

//
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event) => {
	// this will prevent the default behavior of forms which
	// is reloading the entire site after submitting
	event.preventDefault();

	const emailInput = document.querySelector('#email');
	console.log(emailInput.value);
});
