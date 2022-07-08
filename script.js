function startColors() {
	const black = document.getElementById('preto');
	const green = document.getElementById('verde');
	const yellow = document.getElementById('amarelo');
	const red = document.getElementById('vermelho');
	black.style.backgroundColor = 'black';
	green.style.backgroundColor = 'green';
	yellow.style.backgroundColor = 'yellow';
	red.style.backgroundColor = 'red';
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
	const board =document.getElementById('pixel-board');
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
		for(let i = 0; i < smallBoards.length; i += 1) {
			smallBoards[i].style.backgroundColor = 'white';
		}
	})
}
clearAll();

const body = document.getElementById('body')
