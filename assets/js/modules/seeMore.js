const readMore = document.querySelector('.verMais-projetos');



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
    


readMore.addEventListener('click', verMais)
