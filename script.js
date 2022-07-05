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

