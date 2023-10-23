
const options = [
    'robotron.png',
    'robotron-amarelo.png',
    'robotron-branco.png',
    'robotron-preto.png',
    'robotron-rosa.png',
    'robotron-vermelho.png',
];

let contador = 0;

function alterarImagem(alterar) {
    contador = (contador + alterar + options.length) % options.length;
    const imagem = options[contador];
    document.querySelector('.robotron').src = 'imagem/' + imagem;
}

function proximo() {
    alterarImagem(1);
}

function voltar() {
    alterarImagem(-1);
}
