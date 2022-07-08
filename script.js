// const header = document.querySelector('#header')
// const h1 = document.createElement('h1')
// h1.innerText = 'Paleta de cores';
// h1.id = 'title'
// header.appendChild(h1)

const main = document.querySelector('#main');
const colorPalette = document.createElement('div')
colorPalette.id = 'color-palette'

function corAleatoria() {
	const chars = '0123456789ABCDEF'
	let color = '#'
	for (let i = 0; i < 6; i += 1) {
		color += chars.charAt(Math.floor(Math.random() * chars.length))
	}
	return color;
}

function iniciaCores() {
	const preto = document.getElementById('preto');
	const verde = document.getElementById('verde');
	const amarelo = document.getElementById('amarelo');
	const vermelho = document.getElementById('vermelho');
	preto.style.backgroundColor = corAleatoria();
	verde.style.backgroundColor = corAleatoria();
	amarelo.style.backgroundColor = corAleatoria();
	vermelho.style.backgroundColor = corAleatoria();
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
	pintaQuadradinho.style.backgroundColor = corEscolhida
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

// }
// document.getElementById('btn-action').addEventListener('click', () => {
// 	for (let i = 0; i < 5; i += 1) {
// 		let color = generateColor()
// 		let section_color = document.getElementById(`color-${i + 1}`)
// 		section_color.style.backgroundColor = color
// 		let text_color = document.getElementById(`text-color-${i + 1}`)
// 		text_color.textContent = `${color}`
// 	}
// })

