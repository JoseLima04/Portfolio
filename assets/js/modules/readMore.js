const button = document.querySelector('.read-button');

export default function lerMais() {
    const card = document.querySelector('.card');
    card.classList.toggle('active');

    if(card.classList.contains('active')){
        return button.textContent = 'Ler Menos';
    }

    return button.textContent = 'Ler Mais';
}

button.addEventListener('click', lerMais)