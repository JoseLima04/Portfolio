const btnViewMore = document.querySelector('.viewMore-projects');



export function viewMore() {
    const card3 = document.querySelector('.card3');
    const card4 = document.querySelector('.card4');

    card3.classList.toggle('hidden')
    card4.classList.toggle('hidden')
    

    if(card3.classList.contains('hidden') && card4.classList.contains('hidden')){
        return btnViewMore.textContent = 'Ver mais';
    }

    return btnViewMore.textContent = 'Ver menos';
}
    


btnViewMore.addEventListener('click', viewMore)
