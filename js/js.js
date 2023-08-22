const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600)
}

const loop = setInterval(() => {


    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); /* o m+ converte uma string para numero */

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.botton = `${marioPosition}px`;

        mario.src = './imagens/f-Mario.png';
        mario.style.width = '100px';
        mario.style.marginLeft = '50x';

        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', jump);