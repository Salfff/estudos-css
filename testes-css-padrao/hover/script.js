const span = document.querySelector('.span');

const container = document.querySelector('.animacao');


let positionX = 0; // Posição inicial
let positionY = 0; // Posição inicial
const step =50; // Quantos pixels mover a cada tecla

// Aplica a posição inicial
span.style.position = 'relative';
span.style.left = positionX + 'px';
span.style.top = positionY + 'px';

document.addEventListener('keydown', function (event) {
    const containerRect = container.getBoundingClientRect();
    const spanRect = span.getBoundingClientRect();

    // Tamanho interno da div (sem borda)
    const maxX = container.clientWidth - span.offsetWidth;
    const maxY = container.clientHeight - span.offsetHeight;


     switch (event.key) {
        case 'ArrowRight':
            if (positionX + step <= maxX) positionX += step;
            break;
        case 'ArrowLeft':
            if (positionX - step >= 0) positionX -= step;
            break;
        case 'ArrowDown':
            if (positionY + step <= maxY) positionY += step;
            break;
        case 'ArrowUp':
            if (positionY - step >= 0) positionY -= step;
            break;
    }

    // Atualiza a posição do span
    span.style.left = positionX + 'px';
    span.style.top = positionY + 'px';
});