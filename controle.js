const heroi = document.querySelector(".heroi");
const pedra = document.querySelector(".pedra")

const jump = () => {
    heroi.classList.add("jump");

    setTimeout(() => {
        heroi.classList.remove("jump");
    }, 500)
}

const loop = setInterval(() => {
    
    const pedraPosition = pedra.offsetLeft;
    const heroiPosition = +window.getComputedStyle(heroi).bottom.replace("px", "");

    if (pedraPosition <= 120 && pedraPosition >0 && heroiPosition <80) {

        pedra.style.animation = 'none';
        pedra.style.left = `${pedraPosition}px`;

        heroi.style.animation = 'none';
        heroi.style.bottom = `${heroiPosition}px`;

        heroi.src = "imagens/morte.png"
        heroi.style.width = "500px"
        heroi.style.marginLeft = "400px"

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump)