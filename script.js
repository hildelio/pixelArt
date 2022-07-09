function generateColor() {
	const chars = '0123456789ABCDEF'
	let color = '#'
	for (let i = 0; i < 6; i += 1) {
		color += chars.charAt(Math.floor(Math.random() * chars.length))
	}
	return color;
}

function startColors() {
	const black = document.getElementById('preto');
	const random1 = document.getElementById('random1');
	const random2 = document.getElementById('random2');
	const random3 = document.getElementById('random3');
	black.style.backgroundColor = 'black';
	random1.style.backgroundColor = generateColor();
	random2.style.backgroundColor = generateColor();
	random3.style.backgroundColor = generateColor();
}
startColors()

function picColor(color) {
	const choosedColor = document.querySelector('.selected');
	choosedColor.classList.remove('selected');
	color.target.classList.add('selected');
}

const activedColor = document.getElementById('color-palette');
activedColor.addEventListener('click', picColor);

function nowColor(clickEvent) {
	const pickedColor = document.querySelector('.selected').style.backgroundColor;
	const drawing = clickEvent.target;
	drawing.style.backgroundColor = pickedColor;
}

function drawBoard(size) {
	const board = document.getElementById('pixel-board');
	const dimensoes = size * 50;
	const xy = size * size;
	board.style.width = `${dimensoes}px`;
	board.style.maxWidth = `${dimensoes}px`;
	for (let i = 0; i < (xy); i += 1) {
		const pixel = document.createElement('div');
		pixel.className = 'pixel';
		board.appendChild(pixel);
	}
}

drawBoard(5);

const paintedBoard = document.getElementById('pixel-board');
paintedBoard.addEventListener('click', nowColor);

function clearAll() {
	const clearBotton = document.getElementById('clear-board');
	clearBotton.addEventListener('click', () => {
		const smallBoards = document.querySelectorAll('.pixel');
		for (let i = 0; i < smallBoards.length; i += 1) {
			smallBoards[i].style.backgroundColor = 'white';
		}
	})
}

clearAll();