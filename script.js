function generateColor() {
	const chars = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i += 1) {
		color += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return color;
}

function startColors() {
	const black = document.getElementById('black');
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

function clearing() {
	const board = document.querySelectorAll('.pixel');
	for (let i = 0; i < board.length; i += 1) {
		board[i].remove();
	}
}

function drawBoard(size) {
	clearing()
	const board = document.getElementById('pixel-board');
	const dimension = size * 50;
	const xy = size * size;
	board.style.width = `${dimension}px`;
	board.style.maxWidth = `${dimension}px`;
	for (let i = 0; i < (xy); i += 1) {
		const pixel = document.createElement('div');
		pixel.className = 'pixel';
		pixel.setAttribute("id", "pixel");
		board.appendChild(pixel);
	}
}

drawBoard(5)

function nowColor(clickEvent) {
	const pickedColor = document.querySelector('.selected').style.backgroundColor;
	const drawing = clickEvent.target;
	drawing.style.backgroundColor = pickedColor;
}

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

function sizeMinMax() {
	const inputBoard = document.getElementById('board-size');
	if (inputBoard.value < 5) {
		inputBoard.value = 5;
	} else if (inputBoard.value > 50) {
		inputBoard.value = 50;
	}
}

function inputVazio() {
	const input = document.getElementById('board-size');
	if (input.value === '') {
		alert('Board inválido!');
	} else {
		sizeMinMax();
		drawBoard(input.value);
	}
}

const clickSize = document.getElementById('generate-board');
clickSize.addEventListener('click', inputVazio);