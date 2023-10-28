const grid = document.querySelector('div#grid');
setGridSize(10);
function setGridSize(ratio) {
	document.documentElement.style.setProperty('--grid-ratio-number', ratio);
	while (grid.firstChild) {
		grid.removeChild(grid.firstChild);
	}
	for (let i = 0; i < ratio ** 2; i++) {
		let pixel = document.createElement('div');
		pixel.classList.add('pixel');
		addMarkEvent(pixel);
		grid.appendChild(pixel);
	}
}
function gridSizePrompt(message = 'Input size of the grid:') {
	let userInput = prompt(message);
	if (Number.isInteger(+userInput) && userInput > 0) {
		if (userInput > 100) {
			gridSizePrompt('Please enter a value that is less than (or equals) 100:');
		} else {
			setGridSize(userInput);
		}
	} else {
		gridSizePrompt('Invalid value! Please try again:');
	}
}

function addMarkEvent(element) {
	element.onmouseenter = (e) => {
		if (!e.target.classList.contains('marked')) {
			e.target.classList.add('marked');
		}
	};
}
