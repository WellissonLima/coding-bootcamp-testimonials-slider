const imagens = document.querySelectorAll(".slide");
const voltarSlide = document.getElementById("btnPrev");
const avancarSlide = document.getElementById("btnNext");

let imagemAtual = 0;

avancarSlide.addEventListener("click", function(){
    if(imagemAtual === imagens.length - 1){
        return
    }

    imagemAtual++;

    esconderImagemAberta();
    mostrarImagem();
});

voltarSlide.addEventListener("click", function(){
    if(imagemAtual === 0){
        return
    }

    imagemAtual--;

    esconderImagemAberta();
    mostrarImagem();
});

function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar");
}

function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
}