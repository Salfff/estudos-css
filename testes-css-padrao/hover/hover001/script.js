const span = document.querySelector('.span');

const container = document.querySelector('#animacao');


let positionX = 0; // Posição inicial
let positionY = 0; // Posição inicial
const step = 1; // Quantos pixels mover a cada tecla

// Aplica a posição inicial
span.style.position = 'relative';
span.style.right = positionX + 'px';
span.style.down = positionY + 'px';

document.addEventListener('keydown', function (event) {
    const containerRect = container.getBoundingClientRect();
    const spanRect = span.getBoundingClientRect();

    // Tamanho interno da div (sem borda)
    const maxX = container.clientWidth - span.offsetWidth;
    const maxY = container.clientHeight - span.offsetHeight;


     switch (event.key) {
        case 'ArrowRight':
            positionX = Math.min(positionX + step, maxX);
            break;
        case 'ArrowLeft':
            positionX = Math.max(positionX - step, 0);
            break;
        case 'ArrowDown':
            positionY = Math.min(positionY + step, maxY);
            break;
        case 'ArrowUp':
            positionY = Math.max(positionY - step, 0);
            break;
    }

    // Atualiza a posição do span
    span.style.left = positionX + 'px';
    span.style.top = positionY + 'px';
});