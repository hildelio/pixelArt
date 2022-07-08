const main = document.querySelector('#main');
const colorPalette = document.createElement('div');
colorPalette.id = 'color-palette';

function iniciaCores() {
	const preto = document.getElementById('preto');
	const verde = document.getElementById('verde');
	const amarelo = document.getElementById('amarelo');
	const vermelho = document.getElementById('vermelho');
	preto.style.backgroundColor = 'black';
	verde.style.backgroundColor = 'green';
	amarelo.style.backgroundColor = 'yellow';
	vermelho.style.backgroundColor = 'red';
}

function desenharQuadro(tamanho) {
	const quadro =document.getElementById('pixel-board');
	const dimensoes = tamanho * 50;
	const xy = tamanho * tamanho;
	quadro.style.width = `${dimensoes}px`;
	quadro.style.maxWidth = `${dimensoes}px`;
	for (let i = 0; i < (xy); i += 1) {
		const pixel = document.createElement('div');
		pixel.className = 'pixel';
		quadro.appendChild(pixel);
	}
}

desenharQuadro(5);

function escolheCor(cor) {
	const corEscolhida = document.querySelector('.selected');
	corEscolhida.classList.remove('selected');
	cor.target.classList.add('selected');
}

const corAtiva = document.getElementById('color-palette');
corAtiva.addEventListener('click', escolheCor);

function corAtual(clickEvent) {
	const corEscolhida = document.querySelector('.selected').style.backgroundColor;
	const pintaQuadradinho = clickEvent.target;
	pintaQuadradinho.style.backgroundColor = corEscolhida;
}

const quadradinhoPintado = document.getElementById('pixel-board');
quadradinhoPintado.addEventListener('click', corAtual);

function limpaTudo() {
	const botaoLimpar = document.getElementById('clear-board');
	botaoLimpar.addEventListener('click', () => {
		const quadradinhos = document.querySelectorAll('.pixel');
		for(let i = 0; i < quadradinhos.length; i += 1) {
			quadradinhos[i].style.backgroundColor = 'white';
		}
	})
}
limpaTudo();

const body = document.getElementById('body')
