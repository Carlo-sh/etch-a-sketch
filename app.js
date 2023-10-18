const container = document.getElementById('container');
const sizeBtn = document.getElementById('size-btn');
const randCol = () => Math.floor(Math.random() * 256);
const letters = document.querySelectorAll('.letters');
let mouseClick = false;

sizeBtn.addEventListener('click', () => {
	let size = prompt('Enter a size between 10 and 80:', '30');
	if (container.hasChildNodes()) {
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
	}
	if (+size < 10 || +size > 80) {
		alert('Invalid Grid Size');
		return;
	}
	let gridSide = +size;
	for (let i = 0; i < gridSide ** 2; i++) {
		let square = document.createElement('div');
		let bright = 50;
		square.addEventListener('mousedown', () => {
			if (square.style.backgroundColor === '') {
				square.style.backgroundColor = `rgb(${randCol()}, ${randCol()}, ${randCol()})`;
			}
			mouseClick = true;
		});

		square.addEventListener('mouseup', () => (mouseClick = false));

		square.addEventListener('mouseover', () => {
			if (mouseClick) {
				if (square.style.backgroundColor === '') {
					square.style.backgroundColor = `rgb(${randCol()}, ${randCol()}, ${randCol()})`;
				} else {
					square.style.filter = `brightness(${bright === 0 ? bright : (bright -= 5)}%)`;
				}
			}
		});
		container.appendChild(square);
	}
	container.style.gridTemplate = `repeat(${gridSide}, 1fr) / repeat(${gridSide}, 1fr)`;
});

for (let char of letters) {
	char.style.color = `rgb(${randCol()}, ${randCol()}, ${randCol()})`;
}
