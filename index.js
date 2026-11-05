let slideAtual = 0;

const slides = document.querySelector(".slides");
const carrossel = document.querySelector(".carrossel");
const total = slides.children.length;
let intervalo;

function mudarSlide(direcao) {
    slideAtual += direcao;

    if (slideAtual >= total) {
        slideAtual = 0;
    }

    if (slideAtual < 0) {
        slideAtual = total - 1;
    }

    slides.style.transform = `translateX(-${slideAtual * 100}%)`;
}

function iniciarCarrossel() {
    clearInterval(intervalo);

    intervalo = setInterval(() => {
        mudarSlide(1);
    }, 3000);
}

function pararCarrossel() {
    clearInterval(intervalo);
}

carrossel.addEventListener("mouseenter", pararCarrossel);
carrossel.addEventListener("mouseleave", iniciarCarrossel);

iniciarCarrossel();