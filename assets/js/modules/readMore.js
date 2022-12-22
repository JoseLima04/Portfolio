const button = document.querySelector('.read-button');
const button2 = document.querySelector('.read-button2');
const button3 = document.querySelector('.read-button3');
const button4 = document.querySelector('.read-button4');
const readMore = document.querySelector('.verMais-projetos');

export function lerMais() {
    const card = document.querySelector('.card');
    card.classList.toggle('active');

    if(card.classList.contains('active')){
        return button.textContent = 'Ler Menos';
    }

    return button.textContent = 'Ler Mais';
}

export function lerMais2() {
    const card = document.querySelector('.card2');
    card.classList.toggle('active');

    if(card.classList.contains('active')){
        return button2.textContent = 'Ler Menos';
    }

    return button2.textContent = 'Ler Mais';
}

export function lerMais3() {
    const card = document.querySelector('.card3');
    card.classList.toggle('active');

    if(card.classList.contains('active')){
        return button3.textContent = 'Ler Menos';
    }

    return button3.textContent = 'Ler Mais';
}

export function lerMais4() {
    const card = document.querySelector('.card4');
    card.classList.toggle('active');

    if(card.classList.contains('active')){
        return button4.textContent = 'Ler Menos';
    }

    return button4.textContent = 'Ler Mais';
}

export function verMais() {
    const card3 = document.querySelector('.card3');
    const card4 = document.querySelector('.card4');

    card3.classList.toggle('hidden')
    card4.classList.toggle('hidden')
    

    if(card3.classList.contains('hidden') && card4.classList.contains('hidden')){
        return readMore.textContent = 'Ver mais';
    }

    return readMore.textContent = 'Ver menos';
}
    


button.addEventListener('click', lerMais);
button2.addEventListener('click', lerMais2);
button3.addEventListener('click', lerMais3);
button4.addEventListener('click', lerMais4)
readMore.addEventListener('click', verMais)
