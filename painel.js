const imagens = document.querySelectorAll('.imagem-painel');
const s = document.getElementById('btn-avancar');
const a = document.getElementById('btn-voltar');
let imagemAtual = 0;

setaAvancar.addEventlistener('click', function() {

    imagemAtual++


    imagensPainel.array.forEach(imagem => {
        imagem.classList.remove('mostrar')
        
    });
})

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventlistener('click', function() {
    const total1DeImagens = imagensPainel.lenght -1;
    if(imagemAtutal === total1DeImagens) {
        return;
    }

    imagemAtual++;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagemPainel[imagemAtual].classList.add('mostrar');
    
});

setaVoltar.addEventlistener('click', function() {

    if(imagemAtutal === 0) {
        console.log('não tem mais como voltar')
        return;
    }
    imagemAtual--;
})

imagemPainel,forEach(imagem => {
    imagem.classList.remove('mostrar')

});

imagensPainel[imagemAtutal].classList.add('mostrar')

        
