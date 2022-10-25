const button = document.getElementById("ver-mais")

export default function verMais(){
    const cards = document.getElementById('visivel')    
    cards.classList.toggle("visivel")

}

button.addEventListener('click', verMais)  
verMais()
